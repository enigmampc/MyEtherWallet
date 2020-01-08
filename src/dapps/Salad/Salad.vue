<template>
  <div class="salad-main-container">
    <salad-mix></salad-mix>
  </div>
</template>

<script>
import SaladMix from './containers/SaladMix';

export default {
  components: {
    'salad-mix': SaladMix
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.salad-main-container {
  border: 2px solid #7070e3;
  background-color: white;
  border-radius: 4px;
  grid-area: main;
  overflow: hidden;
  margin-bottom: 10px;
}
</style>
