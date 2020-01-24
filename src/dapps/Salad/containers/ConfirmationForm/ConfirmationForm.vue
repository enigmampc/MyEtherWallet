<template>
  <div class="salad-confirmation-form">
    <div class="form">
      <b-container>
        <salad-header></salad-header>
        <transaction-details></transaction-details>

        <b-row>
          <div class="buttons-container">
            <b-col>
              <b-button class="cancel-btn" @click="cancel()">
                {{ $t('salad.cancel-button') }}
              </b-button>
            </b-col>
            <b-col>
              <b-button :disabled="isSubmitting" class="submit-btn" @click="confirmDeposit()">
                {{ isSubmitting ? $t('salad.pending-button') : $t('salad.confirm-button') }}
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
  components: {
    'salad-footer': SaladFooter,
    'salad-header': SaladHeader,
    'transaction-details': TransactionDetails,
  },
  props: {
    isSubmitting: Boolean
  },
  methods: {
    confirmDeposit () {
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
