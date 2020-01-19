<template>
  <div class="salad-success-form">
    <div>
      <b-container>
        <salad-header></salad-header>
        <b-row>
          <b-col cols="12">
            <h3 class="success-header">
              {{ $t('salad.saladSuccessHeader') }}
            </h3>
          </b-col>
        </b-row>
        <transaction-details></transaction-details>
        <b-container>
          <b-row v-if="dealId">
            <b-col>
              <span class="dealId-label">
                {{ $t('salad.dealId-label')}}
              </span>
            </b-col>
            <b-col>
              <a href="#">{{dealId}}</a>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <h3 class="successStatus-label">
                {{ successStatusHeader }}
              </h3>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <h3 class="successStatus-label">
                {{ successStatusMessage }}
              </h3>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <div v-if="dealConfirmed" class="success-btn-container">
                <b-button class="submit-btn"
                          v-on:click="$emit('startNewMix')">
                  {{ $t('salad.startNewMix-button') }}
                </b-button>
              </div>
            </b-col>
          </b-row>
        </b-container>
        <salad-footer></salad-footer>
      </b-container>
    </div>
  </div>
</template>


<script>
import SaladHeader from '../../components/SaladHeader';
import TransactionDetails from '../../components/TransactionDetails';
import SaladFooter from '../../components/SaladFooter';

export default {
  components: {
    'salad-header': SaladHeader,
    'transaction-details': TransactionDetails,
    'salad-footer': SaladFooter
  },
  props: {
    successStatusHeader: String, 
    successStatusMessage: String,
    dealId: String,
    dealConfirmed: Boolean
  }
};
</script>

<style lang="scss" scoped>
@import 'SuccessForm.scss';
</style>
