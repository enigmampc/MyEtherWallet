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
        <b-row>
          <b-col>
            <span class="successStatus-label">
              {{successStatusHeader}}
            </span>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <span class="successStatus-label">
              {{successStatusMessage}}
            </span>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>


<script>
import SaladHeader from '../../components/SaladHeader';
import TransactionDetails from '../../components/TransactionDetails';
import { mapState } from 'vuex';

export default {
  props: {
    successStatusHeader: {
      type: String,
      default: ''
    },
    successStatusMessage: {
      type: String,
      default: ''
    },
  },
  components: {
    'salad-header': SaladHeader,
    'transaction-details': TransactionDetails,
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
