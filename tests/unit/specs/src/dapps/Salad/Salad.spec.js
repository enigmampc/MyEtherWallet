import Vue from 'vue';
import { shallowMount } from '@vue/test-utils';
import Salad from '@/dapps/Salad/Salad';
import { Tooling } from '@@/helpers';

describe('Salad.vue', () => {
  let localVue, i18n, wrapper, store;

  beforeAll(() => {
    const baseSetup = Tooling.createLocalVueInstance();
    localVue = baseSetup.localVue;
    i18n = baseSetup.i18n;
    store = baseSetup.store;
    Vue.config.warnHandler = () => {};
  });

  beforeEach(() => {
    wrapper = shallowMount(Salad, {
      localVue,
      i18n,
      store,
      attachToDocument: true
    });
  });

  it('renders title', () => {
    expect(wrapper.find('.salad-dapp-title').text()).toEqual('Salad');
  });
});
 