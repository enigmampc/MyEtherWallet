<template>
  <div class="salad-mix-content">
    <div v-if="newDeposit">
      <deposit-form @depositStarted="depositStarted"></deposit-form>
    </div>
    <div v-else>
      <confirmation-form @cancelDeposit="cancelDeposit"></confirmation-form>
    </div>
  </div>
</template>

<script>
import DepositForm from '../DepositForm';
import ConfirmationForm from '../ConfirmationForm';

export default {
  components: {
    'deposit-form': DepositForm,
    'confirmation-form': ConfirmationForm,
  },
  data: function() {
    return {
      mixAmount: '1',
      newDeposit: true,
      deliveryAddress: ''
    };
  },
  methods: {
    depositStarted(deliveryAddress) {
      this.deliveryAddress = deliveryAddress;
      this.newDeposit = false;
    },
    cancelDeposit() {
      this.newDeposit = true
    }
  }
};
</script>

<style lang="scss" scoped>
@import 'SaladMixContent';
</style>
