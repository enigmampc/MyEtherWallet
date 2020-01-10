<template>
  <div class="salad-header">
    <div>
      <b-container>
        <b-row>
          <b-col cols="6" md="6">
            <h4 class="salad-header">{{ $t('salad.saladHeader') }}</h4>
          </b-col>
          <b-col cols="6" md="6">
            <h4 class="salad-header">
              {{ $t('salad.nextMix-label', ['00:33:21']) }}
            </h4>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import 'SaladHeader.scss';
</style>
