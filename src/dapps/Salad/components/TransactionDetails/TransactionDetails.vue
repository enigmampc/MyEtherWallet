<template>
  <div class="transaction-details">
    <div>
      <b-container>
        <b-row>
          <h4 class="salad-header">{{ $t('salad.txDetailsHeader') }}</h4>
        </b-row>
        <b-row>
          <b-col cols="12" md="12">
            <p class="amountSent-label">
              {{ $t('salad.amountSent-label', ['1']) }}
            </p>
          </b-col>
        </b-row>

        <b-row>
          <b-col cols="12" md="12">
            <p class="mixTime-label">{{ $t('salad.mixTime-label', ['2']) }}</p>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>
export default {
}
<style lang="scss" scoped>
@import 'TransactionDetails.scss';
</style>
