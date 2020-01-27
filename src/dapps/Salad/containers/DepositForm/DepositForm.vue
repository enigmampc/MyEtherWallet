<template>
  <div id="salad-deposit-container">
    <div id="deposit-info">
      {{ $t('salad.depositAddress-label') }}
      <span class="current-address">
        {{ maskCurrentAddress() }}
      </span>
      {{ $t('salad.depositAddress-label2') }}
    </div>
    
    <div id="deposit-form">
      <b-container>
        <b-row>
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

        <b-row class="deposit-input-container">
          <b-col>
            <b-row>
              <p class="delivery-address-label">
                {{ $t('salad.deliveryAddress-label') }}
              </p>
            </b-row>
            <b-row>
              <div class="delivery-address-input">
                <input
                  v-model="deliveryAddress"
                  :placeholder="$t('salad.deliveryAddress-ph')"
                  type="text"
                />
              </div>
            </b-row>
          </b-col>

          <b-col>
            <div class="deposit-btn-container">
              <b-button
                :class="[isValidInput ? '' : 'disabled']"
                class="startDeposit-btn"
                @click="startDeposit()"
              >
                {{ $t('salad.startDeposit-button') }}
              </b-button>
            </div>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <p v-if="!isValidDeliveryAddress" class="sub-text err-msg">
              {{ $t('salad.validRecipientErrMessage') }}
            </p>
          </b-col>
        </b-row>

      </b-container>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { toChecksumAddress } from 'web3-utils';
import BigNumber from 'bignumber.js';

export default {
  components: {

  },
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
    canProceed() {
      return this.hasEnoughEth;
    }
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
    }
  },
  mounted() {
    this.init();
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

<style lang="scss">
@import '../../Salad';
</style>

<style lang="scss" scoped>
@import 'DepositForm';
</style>
