import Vue from 'vue';
import { shallowMount } from '@vue/test-utils';
import DepositForm from '@/dapps/Salad/containers/DepositForm';
import InterfaceBottomText from '@/components/InterfaceBottomText';
import { Tooling } from '@@/helpers';

describe('DepositForm.vue', () => {
  let localVue, i18n, wrapper, store;

  beforeAll(() => {
    const baseSetup = Tooling.createLocalVueInstance();
    localVue = baseSetup.localVue;
    i18n = baseSetup.i18n;
    store = baseSetup.store;
    Vue.config.warnHandler = () => {};
  });

  beforeEach(() => {
    wrapper = shallowMount(DepositForm, {
      localVue,
      i18n,
      store,
      attachToDocument: true,
      stubs: {
        'interface-bottom-text': InterfaceBottomText
      }
    });
  });
  it('Renders masked currentAddress', () => {
    const addressContent = wrapper.vm.$el
      .querySelector('.currentAddress')
      .textContent.trim();
    const currentAddress = wrapper.vm.account.address;
    const expectedCurrentAddressText =
      currentAddress.substring(0, 7) +
      '....' +
      currentAddress.substring(currentAddress.length - 3);

    expect(addressContent).toEqual(expectedCurrentAddressText);
  });
});
