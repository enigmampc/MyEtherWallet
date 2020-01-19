<template>
  <div class="salad-mix-content">
    <div v-if="page == 'newDeposit'">
      <deposit-form @depositStarted="depositStarted"></deposit-form>
    </div>
    <div v-else-if="page == 'confirmDeposit'">
      <confirmation-form @cancelDeposit="cancelDeposit" @confirmDeposit="confirmDeposit"></confirmation-form>
    </div>
    <div v-else-if="page == 'success'">
      <success-form 
        @startNewMix="startNewMix" 
        v-bind:successStatusHeader="successStatusHeader"
        v-bind:successStatusMessage="successStatusMessage" 
        v-bind:dealId="dealId">
      </success-form>
    </div>
  </div>
</template>
<script>
import DepositForm from '../DepositForm';
import ConfirmationForm from '../ConfirmationForm';
import SuccessForm from '../SuccessForm';
import { mapState } from 'vuex';
import SaladMixer from '../../SaladMixer.js';
import { toChecksumAddress } from 'web3-utils';
import { Toast } from '@/helpers';

export default {
  components: {
    'deposit-form': DepositForm,
    'confirmation-form': ConfirmationForm,
    'success-form': SuccessForm
  },
  data: function() {
    return {
      page: 'newDeposit',
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
      successStatusHeader: this.$t('salad.pendingStatus'),
      successStatusMessage: this.$t('salad.pendingStatusMessage'),
      dealId: ''
    };
  },
  watch: {
    blockCountdown(newVal) {
      console.log(`blockCountdown = ${newVal}`);
      // todo handle blockCountdown
    },
    isSubmitting(newVal) {
      console.log(`isSubmitting = ${newVal}`);
      this.isSubmitting = newVal;
    },
    isPending(newVal) {
      console.log(`isPending = ${newVal}`);
      this.isPending = newVal;
      // todo handle state changes
      if (this.isPending) {
        this.successStatusHeader = this.$t('salad.pendingStatus');
        this.successStatusMessage = this.$t('salad.pendingStatusMessage');
      } else {
        this.successStatusHeader = this.$t('salad.submittedStatus');
        this.successStatusMessage = this.$t('salad.submittedStatusMessage');
      }
    },
    deal(newVal) {
      console.log(`deal = ${newVal}`);
      this.deal = newVal;
      this.dealId = newVal.dealId;
    }
  },
  computed: {
    ...mapState(['web3', 'account', 'network', 'online'])
  },
  mounted() {
    this.initSalad();
  },
  methods: {
    depositStarted(deliveryAddress) {
      this.deliveryAddress = toChecksumAddress(deliveryAddress);
      this.isPending = true;
      this.page = 'confirmDeposit';
    },
    cancelDeposit() {
      this.page = 'newDeposit';
    },
    resetMix() {
      // todo refactor to simplify reset
      this.cancelDeposit();
    },
    async confirmDeposit() {
      const sender = toChecksumAddress(this.account.address);
      const recipient = this.deliveryAddress;
      const amount = this.mixAmount;
      
      this.isSubmitting = true;
      this.page = 'success';
      try {
          const amountInWei = this.web3.utils.toWei(amount);
          
          const depositReceipt = await this.salad.makeDepositAsync(sender, amountInWei);
          Toast.responseHandler(`Deposit made with tx: ${depositReceipt.transactionHash}`, Toast.INFO);
          
          console.log('Deposit made', depositReceipt);
          console.log('Encrypting recipient', recipient);
          const encRecipient = await this.salad.encryptRecipientAsync(recipient);
          console.log(`The encrypted recipient ${encRecipient}`);
          const myPubKey = this.salad.keyPair.publicKey;
          console.log(`Signing deposit payload ${sender}, ${amountInWei}, ${encRecipient}, ${myPubKey}`);
          
          const signature = await this.salad.signDepositMetadataAsync(sender, amountInWei, encRecipient, myPubKey);
          console.log('Deposit payload signed', signature);
          // The public key of the user must be submitted
          // This is DH encryption, Enigma needs the user pub key to decrypt the data
          await this.salad.submitDepositMetadataAsync(sender, amountInWei, encRecipient, myPubKey, signature);
          console.log('Deposit metadata submitted');
          
          Toast.responseHandler(`Deposit accepted by the Relayer`, Toast.INFO);
      } catch (e) {
          Toast.responseHandler(`Error with your deposit: ${e.message}`, Toast.ERROR);
          
          this.err = e
          // todo debugger
          debugger;
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
        console.log(`blockCountdown ${payload.blockCountdown}`);
        this.blockCountdown = payload.blockCountdown;
      });
      this.salad.onThresholdValue(payload => {
        console.log(`threshold ${payload.threshold}`);
        this.threshold = payload.threshold;
      });
      this.salad.onQuorumValue(payload => {
        console.log(`quorum ${payload.quorum}`);
        this.quorum = payload.quorum;
      });
      this.salad.onDealCreated(payload => {
        console.log(`onDealCreated ${payload.deal}`);
        this.deal = payload.deal;
        if (this.deal.participants.indexOf(this.salad.accounts[0]) !== -1) {
          console.log('onDealCreated setting isPending = true')
          this.isPending = true;
        }
      });
      this.salad.onDealExecuted(payload => {
        console.log(`onDealExecuted ${payload.deal}`);
        this.deal = payload.deal;
        this.isPending = false;
      });
    },
    startNewMix() {
      // todo
      console.log('starting a new mix');
    }
  }
};
</script>

<style lang="scss" scoped>
@import 'SaladMixContent';
</style>
