<template>
  <div id="transaction-details-container">
    <div id="transaction-details-header">
      {{ $t('salad.txDetailsHeader') }}
    </div>
    <b-container>
        <b-row>
          <b-col>
            {{ $t('salad.amountSent-label', ['1']) }}
          </b-col>
        </b-row>     
        <b-row>
          <b-col>
            {{ $t('salad.amountReceived-label', ['0.989']) }}
          </b-col>
        </b-row>
        <b-row> 
          <b-col>
            {{ $t('salad.totalFees-label', ['0.011']) }}
          </b-col>
          <b-col>
            <a href="#">{{ $t('salad.feeCalculation-label') }}</a>
          </b-col>
        </b-row>
      </b-container>
  </div>
</template>



<script>
import { mapState } from 'vuex';

export default {
  // todo fees and mixAmount as data/props
  computed: {
    ...mapState('main', ['mixAmount']),
  },
  methods: {
    confirm () {
      this.$emit("confirmDeposit");
    },
    cancel() {
      this.$emit("cancelDeposit");
    }
  }
};
</script>

<style lang="scss" scoped>
@import 'TransactionDetails.scss';
</style>