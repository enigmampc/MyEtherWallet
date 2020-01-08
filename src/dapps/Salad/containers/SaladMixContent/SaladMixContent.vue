<template>
  <div class="salad-mix-content">
    <div>
      <deposit-form></deposit-form>
    </div>
    <div class="text-center">
      <a href="#">{{ $t('salad.learn-more') }}</a>
    </div>
  </div>
</template>

<script>
import DepositForm from '../DepositForm';

export default {
  components: {
    'deposit-form': DepositForm
  }
};
</script>

<style lang="scss" scoped>
@import 'SaladMixContent';
</style>
