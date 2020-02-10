<template>
  <div id="salad-deal-container">
    <salad-deal-header></salad-deal-header>
    <div>
      <b-container>
        <b-row>
          <b-col>
            <h3 class="salad-success-msg">
              {{ $t('salad.saladSuccessHeader') }}
            </h3>
          </b-col>
        </b-row>
        <transaction-details v-bind:dealId="dealId"></transaction-details>
        <b-container class="deal-status-container">
          <b-row>
            {{ dealStatusHeader }}
          </b-row>
          <b-row>
            {{ dealStatusMessage }}
          </b-row>
          <b-row>
              <div v-if="dealExecuted" class="new-mix-btn-container">
              <b-button class="submit-btn" v-on:click="$emit('startNewMix')">
                {{ $t('salad.startNewMix-button') }}
              </b-button>
            </div>
          </b-row>
        </b-container>
      </b-container>
    </div>
  </div>
</template>


<script>
import SaladDealHeader from '../../components/SaladDealHeader';
import TransactionDetails from '../../components/TransactionDetails';
import { mapState } from 'vuex';

export default {
  components: {
    'salad-deal-header': SaladDealHeader,
    'transaction-details': TransactionDetails
  },
  props: {
    dealStatusHeader: String, 
    dealStatusMessage: String,
    dealId: String,
    dealExecuted: Boolean
  }
};
</script>

<style lang="scss" scoped>
@import 'SuccessForm';
</style>
