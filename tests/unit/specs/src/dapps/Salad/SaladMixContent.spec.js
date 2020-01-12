import Vue from 'vue';
import { shallowMount } from '@vue/test-utils';
import SaladMixContent from '@/dapps/Salad/containers/SaladMixContent';
import { Tooling } from '@@/helpers';

describe('SaladMixContent.vue', () => {
  let localVue, i18n, wrapper, store;

  beforeAll(() => {
    const baseSetup = Tooling.createLocalVueInstance();
    localVue = baseSetup.localVue;
    i18n = baseSetup.i18n;
    store = baseSetup.store;
    Vue.config.warnHandler = () => {};
  });

  beforeEach(() => {
    wrapper = shallowMount(SaladMixContent, {
      localVue,
      i18n,
      store,
      attachToDocument: true
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('should return the correct data', () => {
    expect(wrapper.vm.$data.deliveryAddress).toEqual('');
    expect(wrapper.vm.$data.mixAmount).toEqual('1');
    expect(wrapper.vm.$data.newDeposit).toEqual(true);
  });

//   todo emit event, test the content

});
