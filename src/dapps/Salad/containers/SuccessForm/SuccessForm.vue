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
          <b-row>
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
        </b-container>
      </b-container>
    </div>
  </div>
</template>


<script>
import SaladHeader from '../../components/SaladHeader';
import TransactionDetails from '../../components/TransactionDetails';

export default {
  components: {
    'salad-header': SaladHeader,
    'transaction-details': TransactionDetails,
  },
  props: {
    successStatusHeader: String,
    successStatusMessage: String,
    dealId: String
  },
  methods: {
    startNewMix () {
      // todo start a new mix
      console.log('startNewMix');
      this.$emit("startNewMix");
    },
  }
};
</script>

<style lang="scss" scoped>
@import 'SuccessForm.scss';
</style>
