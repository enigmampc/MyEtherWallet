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
import SaladMixer from './SaladMixer.js';
import {
  isValidChecksumAddress as isValidRSKChecksumAddress,
  toChecksumAddress as toRSKChecksumAddress
} from 'rskjs-util';
import { toChecksumAddress } from 'web3-utils';

export default {
  data: function() {
    return {
      deliveryAddress: '',
      nextMix: '',
      message: '',
      isValidDeliveryAddress: false,
      deliveryAddressErrMsg: ''
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
          this.deliveryAddressErrMsg = 'DeliveryAddress be a valid Ethereum address';
        }
    }
  },
  methods: {
    init() {
      const account = {
        address: this.account.address,
        netId: this.network.type.chainID.toString()
      };
      this.saladMixer = new SaladMixer(account, this.web3);
    },
    maskCurrentAddress: function() {
      // Return masked address, eg "0xDECAF....68D"
      return (
        this.account.address.substring(0, 7) +
        '....' +
        this.account.address.substring(this.account.address.length - 3)
      );
    },
    async startDeposit() {
      // todo startDeposit
    }
  }
};
</script>

<style lang="scss" scoped>
@import 'DepositForm.scss';
</style>
