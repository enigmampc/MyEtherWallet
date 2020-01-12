import Vue from 'vue';
import { shallowMount } from '@vue/test-utils';
import SaladMix from '@/dapps/Salad/containers/SaladMix';
import { Tooling } from '@@/helpers';

describe('SaladMix.vue', () => {
  let localVue, i18n, wrapper, store;

  beforeAll(() => {
    const baseSetup = Tooling.createLocalVueInstance();
    localVue = baseSetup.localVue;
    i18n = baseSetup.i18n;
    store = baseSetup.store;
    Vue.config.warnHandler = () => {};
  });

  beforeEach(() => {
    wrapper = shallowMount(SaladMix, {
      localVue,
      i18n,
      store,
      attachToDocument: true
    });
  });

  it('renders title', () => {
    expect(wrapper.find('.title-container').text()).toEqual('Salad');
  });
});
