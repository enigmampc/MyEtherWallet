<template>
  <div class="salad-footer">
    <div>
      <b-container>
        <b-row>
          <b-col>
            <p class="mixAmount-label">{{ $t('salad.mixAmount-label', ['1']) }}</p>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <p class="mixTime-label">{{ $t('salad.mixTime-label', ['2']) }}</p>
          </b-col>
        </b-row>
      </b-container>

      <div class="text-center">
        <b-row>
          <b-col>
            <a href="#">{{ $t('salad.learn-more') }}</a>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import 'SaladFooter.scss';
</style>