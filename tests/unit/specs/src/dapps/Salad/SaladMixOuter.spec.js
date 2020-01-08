import Vue from 'vue';
import { shallowMount } from '@vue/test-utils';
import SaladMixOuter from '@/dapps/Salad/containers/SaladMix';
import InterfaceBottomText from '@/components/InterfaceBottomText';
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
    wrapper = shallowMount(SaladMixOuter, {
      localVue,
      i18n,
      store,
      attachToDocument: true,
      stubs: {
        'interface-bottom-text': InterfaceBottomText
      }
    });
  });

  it('renders title', () => {
    expect(wrapper.find('.title-container').text()).toEqual('Salad');
  });
});
