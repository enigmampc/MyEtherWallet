<template>
  <div class="salad-confirmation-form">
    <div class="form">
      <b-container>
        <salad-header></salad-header>
        <b-row>
          <b-col>
            <h4 class="salad-header">
              {{ $t('salad.txDetailsHeader') }}
            </h4>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <span class="amountSent-label">
              {{ $t('salad.amountSent-label', ['1']) }}
            </span>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <span class="amountReceived-label">
              {{ $t('salad.amountReceived-label', ['0.989 ETH']) }}
            </span>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <span class="totalFees-label">
              {{ $t('salad.totalFees-label', ['0.011']) }}
            </span>
          </b-col>
          <b-col>
            <a href="#">{{ $t('salad.feeCalculation-label') }}</a>
          </b-col>
        </b-row>

        <b-row>
          <div v-if="isSubmitting" class="buttons-container">
            <b-col>
              <b-button class="submit" @click="cancel()">
                {{ $t('salad.cancel-button') }}
              </b-button>
            </b-col>
            <b-col>
              <b-button :disabled="isPending" class="cancel-btn" @click="confirm()">
                {{ isPending ? $t('salad.pending-button') : $t('salad.confirm-button') }}
              </b-button>
            </b-col>
          </div>
        </b-row>
        <b-row v-if="!isSubmitting">
          <div class="status-container">
            <h4 class="salad-header">
              {{ isPending ? $t('salad.pendingStatus') : $t('salad.confirmed-status') }}
            </h4>
            <b-col>
            </b-col>
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

export default {
  data: function() {
    return {
      // todo pass from config
      mixAmount: '0.01',
      isSubmitting: true,
      isPending: false,
      statusHeader: '',
      statusMessage: ''
      

    };
  },
  components: {
    'salad-footer': SaladFooter,
    'salad-header': SaladHeader,
  },
  methods: {
    confirm () {
      this.isSubmitting = false;
      this.isPending = true;
      this.$emit("confirmDeposit");
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
