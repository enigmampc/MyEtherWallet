<template>
  <div class="transaction-details">
    <div>
      <b-container>
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
      </b-container>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import 'TransactionDetails.scss';
</style>