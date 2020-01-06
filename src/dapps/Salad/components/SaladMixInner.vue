<template>
  <div class="salad-mix-inner">
    <div>
      <salad-deposit-form></salad-deposit-form>
    </div>
    <div class="text-center">
      <a href="#">{{ $t('salad.learn-more') }}</a>
    </div>
  </div>
</template>

<script>
import SaladDepositForm from './SaladDepositForm.vue';

export default {
  components: {
    'salad-deposit-form': SaladDepositForm
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: black;
}
.salad-mix-inner {
  background-color: white !important;
  border-radius: 25px;
  border: 2px solid #7070e3;
}
</style>
