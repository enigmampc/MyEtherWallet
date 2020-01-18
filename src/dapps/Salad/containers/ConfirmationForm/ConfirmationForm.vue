<template>
  <div class="salad-confirmation-form">
    <div class="form">
      <b-container>
        <salad-header></salad-header>
        <transaction-details></transaction-details>

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
        
        <salad-footer></salad-footer>
      </b-container>
    </div>
  </div>
</template>

<script>
import SaladFooter from '../../components/SaladFooter';
import SaladHeader from '../../components/SaladHeader';
import TransactionDetails from '../../components/TransactionDetails';

export default {
  data: function() {
    return {
      // todo pass from config
      mixAmount: '0.01',
      isSubmitting: true,
      isPending: false,
    };
  },
  components: {
    'salad-footer': SaladFooter,
    'salad-header': SaladHeader,
    'transaction-details': TransactionDetails,
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
