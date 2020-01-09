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
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('should return the correct data', () => {
    expect(wrapper.vm.$data.deliveryAddress).toEqual('');
    expect(wrapper.vm.$data.nextMix).toEqual('');
    expect(wrapper.vm.$data.message).toEqual('');
    expect(wrapper.vm.$data.isValidDeliveryAddress).toEqual(false);
    expect(wrapper.vm.$data.deliveryAddressErrMsg).toEqual('');
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

  it('should set an error message if deliveryAddress is not valid', () => {
    const deliveryAddress = '0x0';
    wrapper.setData({ deliveryAddress });

    expect(wrapper.vm.$data.deliveryAddressErrMsg).toEqual(
      'DeliveryAddress be a valid Ethereum address'
    );
  });
});
