<template>
  <div id="salad-dapp-container">
    <back-button :title="$t('salad.exit-dapp')" />
    <div id="salad-dapp-header">
      <div class="salad-dapp-title">
        {{ $t('salad.title') }}
      </div>
      <div class="salad-dapp-description">
        {{ $t('salad.description') }} <a href="#">{{ $t('salad.whatisit') }}</a>
      </div>
    </div>
    <salad-mix></salad-mix>
  </div>
</template>

<script>
import SaladMix from './containers/SaladMix';
import BackButton from '@/layouts/InterfaceLayout/components/BackButton';

export default {
  components: {
    'back-button': BackButton,
    'salad-mix': SaladMix
  }
};
</script>

<style lang="scss" scoped>
@import 'Salad';
</style>
