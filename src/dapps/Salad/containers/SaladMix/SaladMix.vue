<template>
  <div id="salad-mix-container">
    <div v-if="page == 'startNewMix'">
      <deposit-form @startDeposit="startDeposit"></deposit-form>
    </div>
    <div v-else-if="page == 'confirmDeposit'">
      <confirmation-form 
      @cancelDeposit="cancelDeposit" @confirmDeposit="confirmDeposit"
      v-bind:isSubmitting="isSubmitting"
      >
      </confirmation-form>
    </div>
    <div v-else-if="page == 'success'">
      <success-form 
        @startNewMix="startNewMix" 
        v-bind:dealStatusHeader="dealStatusHeader"
        v-bind:dealStatusMessage="dealStatusMessage" 
        v-bind:dealId="dealId"
        v-bind:dealExecuted="dealExecuted">
      </success-form>
    </div>
    <salad-mix-footer></salad-mix-footer>
  </div>
</template>
 
<script>
import SaladMixHeader from '../../components/SaladMixHeader';
import SaladMixFooter from '../../components/SaladMixFooter';
import DepositForm from '../DepositForm';
import ConfirmationForm from '../ConfirmationForm';
import SuccessForm from '../SuccessForm';
import { mapState } from 'vuex';
import SaladMixer from '../../SaladMixer.js';
import { toChecksumAddress } from 'web3-utils';
import { Toast } from '@/helpers';

const DEAL_STATUS = {
    NEW: 0,
    EXECUTABLE: 1,
    EXECUTED: 2,
};

export default {
  components: {
    'salad-mix-header': SaladMixHeader,
    'salad-mix-footer': SaladMixFooter,
    'deposit-form': DepositForm,
    'confirmation-form': ConfirmationForm,
    'success-form': SuccessForm
  },
  data: function() {
    return {
      page: 'startNewMix',
      mixAmount: "0.01",
      deliveryAddress: '',
      isSubmitting: false,
      isPending: false,
      blockCountdown: 0,
      quorum: 0,
      threshold: 0,
      err: null,
      deal: null,
      salad: null,
      dealStatusHeader: this.$t('salad.pendingStatus'),
      dealStatusMessage: this.$t('salad.pendingStatusMessage'),
      dealId: '',
      dealExecuted: false,
      dealConfirmed: false
    };
  },
  computed: {
    ...mapState('main', ['web3', 'account', 'network', 'online']),
  },
  watch: {
    blockCountdown(newVal) {
      this.blockCountdown = newVal;
      // todo handle blockCountdown
    },
    isSubmitting(newVal) {
      this.isSubmitting = newVal;
    },
    isPending(newVal) {
      this.isPending = newVal;
    },
    deal(newVal) {
      this.deal = newVal;
      this.dealId = newVal.dealId;
      if (this.deal.status == DEAL_STATUS.EXECUTED) {
        this.dealStatusHeader = this.$t('salad.completedStatus');
        this.dealStatusMessage = this.$t('salad.completedStatusMessage');
        this.dealExecuted = true;
      } else {
        if (this.isPending) {
          this.dealStatusHeader = this.$t('salad.pendingStatus');
          this.dealStatusMessage = this.$t('salad.pendingStatusMessage');
        } else {
          this.dealStatusHeader = this.$t('salad.submittedStatus');
          this.dealStatusMessage = this.$t('salad.submittedStatusMessage');
        }
      }
    }
  },
  mounted() {
    this.initSalad();
  },
  methods: {
    startDeposit(deliveryAddress) {
      this.deliveryAddress = toChecksumAddress(deliveryAddress);
      this.dealExecuted = false;
      this.page = 'confirmDeposit';
    },
    cancelDeposit() {
      this.startNewMix();
    },
    startNewMix() {
      this.page = 'startNewMix';
      this.deliveryAddress = '';
      this.isSubmitting = false;
      this.isPending = false;
      this.blockCountdown = 0;
      this.quorum = 0;
      this.threshold = 0;
      this.err = null;
      this.deal = null;
      this.dealId = '';
      this.dealConfirmed = false;
    },
    async confirmDeposit() {
      const sender = toChecksumAddress(this.account.address);
      const recipient = this.deliveryAddress;
      const amount = this.mixAmount;
      
      this.isSubmitting = true;
      try {
          const amountInWei = this.web3.utils.toWei(amount);
          
          const depositReceipt = await this.salad.makeDepositAsync(sender, amountInWei);
          this.dealId = depositReceipt.transactionHash;
          Toast.responseHandler(`Deposit made with tx: ${this.dealId}`, Toast.INFO);
          
          const encRecipient = await this.salad.encryptRecipientAsync(recipient);
          const myPubKey = this.salad.keyPair.publicKey;
          
          const signature = await this.salad.signDepositMetadataAsync(sender, amountInWei, encRecipient, myPubKey);
          // The public key of the user must be submitted
          // This is DH encryption, Enigma needs the user pub key to decrypt the data
          await this.salad.submitDepositMetadataAsync(sender, amountInWei, encRecipient, myPubKey, signature);
          
          Toast.responseHandler(`Deposit accepted by the Relayer`, Toast.INFO);
          this.isPending = true;
          this.page = 'success'

      } catch (e) {
          Toast.responseHandler(`Error with your deposit: ${e.message}`, Toast.ERROR);
          this.isPending = false;
          this.err = e
      }
      finally {
          this.isSubmitting = false;
      }
    },
    async initSalad() {
      const account = {
        address: this.account.address,
        balance: this.account.balance,
        netId: this.network.type.chainID.toString()
      };
      this.salad = new SaladMixer(account, this.web3);
      this.salad.initAsync();

      this.salad.onBlock(payload => {
        this.blockCountdown = payload.blockCountdown;
      });
      this.salad.onThresholdValue(payload => {
        this.threshold = payload.threshold;
      });
      this.salad.onQuorumValue(payload => {
        this.quorum = payload.quorum;
      });
      this.salad.onDealCreated(payload => {
        this.deal = payload.deal;
        if (this.deal.participants.indexOf(this.salad.accounts[0]) !== -1) {
          this.isPending = true;
        }
      });
      this.salad.onDealExecuted(payload => {
        this.deal = payload.deal;
        this.isPending = false;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import 'SaladMix';
</style>
