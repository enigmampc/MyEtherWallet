<template>
  <div class="salad-confirmation-form">
    <transaction-details></transaction-details>
    <b-container class="buttons-container">
      <b-button class="button cancel-btn" @click="cancel()">
        {{ $t('salad.cancel-button') }}
      </b-button>
      <b-button :disabled="isSubmitting" class="button submit-btn" @click="confirmDeposit()">
        {{ isSubmitting ? $t('salad.pending-button') : $t('salad.confirm-button') }}
      </b-button>
    </b-container>
  </div>
</template>

<script>
import TransactionDetails from '../../components/TransactionDetails';

export default {
  components: {
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
@import 'ConfirmationForm';
</style>
