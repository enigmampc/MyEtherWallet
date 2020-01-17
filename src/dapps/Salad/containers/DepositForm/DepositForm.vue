<template>
  <div class="salad-deposit-form">
    <div class="form">
      <b-container>
        <salad-header></salad-header>
        <b-row>
          <div class="deposit-info">
            <span class="depositAddress-label">
              {{ $t('salad.depositAddress-label') }}
            </span>
            <span class="currentAddress">
              {{ maskCurrentAddress() }}
            </span>
            <span class="depositAddress-label">
              {{ $t('salad.depositAddress-label2') }}
            </span>
          </div>
        </b-row>
        <b-row>
            <div class="sub-text">
              <p v-if="!hasEnoughEth" class="above-min">
                {{ $t('salad.minimumEthErrMsg') }}
              </p>
            </div>
        </b-row>

        <b-row>
          <b-col>
            <p class="deliveryAddress-label">
              {{ $t('salad.deliveryAddress-label') }}
            </p>
          </b-col>
        </b-row>

        <b-row class="deposit-container">
          <div class="deliveryAddress-input">
            <input :placeholder="$t('salad.deliveryAddress-ph')" type="text" 
                v-model="deliveryAddress"/>
            <p v-show="deliveryAddressErrMsg" class="sub-text err-msg">
              {{ deliveryAddressErrMsg }}
            </p>
          </div>
        
          <div class="deposit-btn-container">
            <b-button :class="[isValidInput ? '' : 'disabled']"
                      class="mew-btn startDeposit-btn"
                      @click="startDeposit()">
              {{ $t('salad.startDeposit-button') }}
            </b-button>
          </div>
        </b-row>

        <salad-footer></salad-footer>
      </b-container>
    </div>
  </div>
</template>

<script>
import SaladFooter from '../../components/SaladFooter';
import SaladHeader from '../../components/SaladHeader';
import { mapState } from 'vuex';
import { toChecksumAddress } from 'web3-utils';
import BigNumber from 'bignumber.js';
import { Toast } from '@/helpers';

export default {
  data: function() {
    return {
      deliveryAddress: '',
      nextMix: '',
      message: '',
      isValidDeliveryAddress: false,
      deliveryAddressErrMsg: '',
      mixAmount: 0.1
    };
  },
  components: {
    'salad-footer': SaladFooter,
    'salad-header': SaladHeader
  },
  computed: {
    ...mapState(['web3', 'account', 'network', 'online']),
    isValidInput() {
      return (
        this.isValidDeliveryAddress &&
        this.deliveryAddress &&
        !this.deliveryAddressErrMsg
      );
    },
    hasEnoughEth() {
      const accountBalance = this.web3.utils.fromWei(
        new BigNumber(this.account.balance).toFixed(),
        'ether'
      );
      
      return accountBalance >= this.mixAmount;
    },
    hasEnoughEng() {
      console.log('checking eng');
      // todo check user's contract balance
      return true;
    },
    canProceed() {
      return this.hasEnoughEth && this.hasEnoughEng;
    },
  },
  mounted() {
    this.init();
  },
  watch: {
      deliveryAddress(newVal) {
        try {
          this.deliveryAddress = toChecksumAddress(newVal);
          this.isValidDeliveryAddress = true;
          this.deliveryAddressErrMsg = '';
        } catch (error) {
          this.deliveryAddressErrMsg = 'DeliveryAddress must be a valid Ethereum address';
        }
    }
  },
  methods: {
    init() {
      const account = {
        address: this.account.address,
        balance: this.account.balance,
        netId: this.network.type.chainID.toString()
      };
    },
    maskCurrentAddress: function() {
      // Return masked address, eg "0xDECAF....68D"
      return (
        this.account.address.substring(0, 7) +
        '....' +
        this.account.address.substring(this.account.address.length - 3)
      );
    },
    startDeposit() {
      if (!this.canProceed) return;
      this.$emit('depositStarted', this.deliveryAddress);
    }
  }
};
</script>

<style lang="scss" scoped>
@import 'DepositForm.scss';
</style>
