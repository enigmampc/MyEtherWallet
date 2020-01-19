<template>
  <div class="salad-deposit-form">
    <div class="form">
      <b-container>
        <salad-header></salad-header>
        <b-row>
          <div class="deposit-info">
            <b-col>
              <span class="depositAddress-label">
                {{ $t('salad.depositAddress-label') }}
              </span>
              <span class="currentAddress">
                {{ maskCurrentAddress() }}
              </span>
              <span class="depositAddress-label">
                {{ $t('salad.depositAddress-label2') }}
              </span>
            </b-col>
          </div>
        </b-row>
        <b-row>
            <b-col>
            <div class="sub-text">
              <p v-if="!hasEnoughEth" class="err-msg">
                {{ $t('salad.minimumEthErrMessage') }}
              </p>
            </div>
            </b-col>
        </b-row>

        <b-row>
          <b-col>
            <p class="deliveryAddress-label">
              {{ $t('salad.deliveryAddress-label') }}
            </p>
          </b-col>
        </b-row>

        <b-row class="deposit-container">
          <b-col>
            <div class="deliveryAddress-input">
              <input :placeholder="$t('salad.deliveryAddress-ph')" type="text" 
                  v-model="deliveryAddress"/>
              <p v-if="!isValidDeliveryAddress" class="sub-text err-msg">
                {{ $t('salad.validRecipientErrMessage') }}
              </p>
            </div>
          </b-col>

          <b-col>
            <div class="deposit-btn-container">
              <b-button :class="[isValidInput ? '' : 'disabled']"
                        class="submit-btn startDeposit-btn"
                        @click="startDeposit()">
                {{ $t('salad.startDeposit-button') }}
              </b-button>
            </div>
          </b-col>
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
      currentAddress: '',
      deliveryAddress: '',
      nextMix: '',
      message: '',
      isValidDeliveryAddress: true,
      mixAmount: 0.01
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
        // must have entered an address and it must be valid checksum
        this.deliveryAddress && this.isValidDeliveryAddress
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
        this.deliveryAddressErrMessage = '';
      } catch (error) {
        this.isValidDeliveryAddress = false;
      }
    },
  },
  methods: {
    maskCurrentAddress: function() {
      // Return masked address, eg "0xDECAF....68D"
      return (
        this.currentAddress.substring(0, 7) +
        '....' +
        this.currentAddress.substring(this.currentAddress.length - 3)
      );
    },
    init() {
      this.currentAddress = this.account.address;
    },
    startDeposit() {
      if (!this.canProceed) return;
      this.$emit('startDeposit', this.deliveryAddress);
    }
  }
};
</script>

<style lang="scss" scoped>
@import 'DepositForm.scss';
</style>
