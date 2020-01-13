<template>
  <div class="salad-confirmation-form">
    <div class="form">
      <b-container>
        <salad-header></salad-header>

        <b-row>
          <h4 class="salad-header">
            {{ $t('salad.txDetailsHeader') }}
          </h4>
        </b-row>
        <b-row>
          <span class="amountSent-label">
            {{ $t('salad.amountSent-label', ['1']) }}
          </span>
        </b-row>
        <b-row>
          <span class="amountReceived-label">
            {{ $t('salad.amountReceived-label', ['0.989 ETH']) }}
          </span>
        </b-row>
        <b-row>
          <span class="totalFees-label">
            {{ $t('salad.totalFees-label', ['0.011']) }}
          </span>
        </b-row>

        <b-row>
          <a href="#">{{ $t('salad.feeCalculation-label') }}</a>
        </b-row>

        <b-row class="confirmation-container">
          <div class="buttons-container">
            <b-button class="submit-btn" @click="cancel()">
              {{ $t('salad.cancel-button') }}
            </b-button>
            <b-button class="cancel-btn" @click="confirm()">
              {{ $t('salad.confirm-button') }}
            </b-button>
          </div>
        </b-row>
        
        <salad-footer></salad-footer>
      </b-container>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import SaladFooter from '../../components/SaladFooter';
import SaladHeader from '../../components/SaladHeader';

export default {
  computed: {
    ...mapState(['web3', 'account', 'network', 'online'])
  },
  data: function() {
    return {
      mixAmount: '1',
      
    };
  },
  components: {
    'salad-footer': SaladFooter,
    'salad-header': SaladHeader,
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      const account = {
        address: this.account.address,
        netId: this.network.type.chainID.toString()
      };
    },
    confirm() {
      console.log('confirming');
      // todo confirmation
    },
    cancel() {
      this.$emit("cancelDeposit");
    }
  }
};
</script>

<style lang="scss" scoped>
@import 'Confirmationform.scss';
</style>
