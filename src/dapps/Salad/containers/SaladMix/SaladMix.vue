<template>
  <div>
    <div class="salad-outer-div">
      <back-button :title="$t('salad.exit-dapp')" />
      <div class="salad-header">
        <div class="title-container">
          <h1>{{ $t('salad.title') }}</h1>
        </div>
        <div>
          <h3>{{ $t('salad.desc') }}</h3>
        </div>
      </div>
      <div>
        <salad-mix-content></salad-mix-content>
      </div>
    </div>
  </div>
</template>

<script>
import SaladMixContent from '../SaladMixContent';
import BackButton from '@/layouts/InterfaceLayout/components/BackButton';

export default {
  components: {
    'salad-mix-content': SaladMixContent,
    'back-button': BackButton
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
  color: #42b983;
}
.back-container {
  background-color: #cdf2ee;
}

.salad-outer-div {
  border: 30px solid #cdf2ee;
  background-color: #cdf2ee;
}
</style>
