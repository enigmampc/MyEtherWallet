<template>
  <div class="salad-footer">
    <div>
      <b-container>
        <b-row>
          <b-col cols="12" md="12">
            <p class="mixAmount-label">
              {{ $t('salad.mixAmount-label', ['1']) }}
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

<style lang="scss" scoped>
@import 'SaladFooter.scss';
</style>