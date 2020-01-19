import Vue from 'vue';
import { shallowMount } from '@vue/test-utils';
import DepositForm from '@/dapps/Salad/containers/DepositForm';
import { Tooling } from '@@/helpers';
import web3 from 'web3';

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
      attachToDocument: true
    });
  });

  it('should return the correct data', () => {
    
    expect(wrapper.vm.$data.deliveryAddress).toEqual('');
    expect(wrapper.vm.$data.nextMix).toEqual('');
    expect(wrapper.vm.$data.message).toEqual('');
    expect(wrapper.vm.$data.isValidDeliveryAddress).toEqual(true);
    expect(wrapper.vm.$data.mixAmount).toEqual(0.01);
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

  it('invalid deliveryAddress', () => {
    const deliveryAddress = '0x0';
    wrapper.setData({ deliveryAddress });
    expect(wrapper.vm.$data.isValidDeliveryAddress).toEqual(false);
  });

  it('deliveryAddress is valid', () => {
    const deliveryAddress = wrapper.vm.account.address;
    wrapper.setData({ deliveryAddress });

    expect(wrapper.vm.$data.isValidDeliveryAddress).toEqual(true);
  });

  it('should set an error message if balance is too low', () => {
    const mixAmount = '1';
    wrapper.setProps({ mixAmount });
    wrapper.setData({ account: { balance: 0 } });

    const deliveryAddress = wrapper.vm.account.address;
    wrapper.setData({ deliveryAddress });

    expect(wrapper.vm.hasEnoughEth).toBe(false);
  });

  it('valid eth balance', () => {
    const mixAmount = '1';
    wrapper.setProps({ mixAmount });
    
    wrapper.setData({ account: { balance: web3.utils.toWei(mixAmount, 'ether') } });

    const deliveryAddress = wrapper.vm.account.address;
    wrapper.setData({ deliveryAddress });

    expect(wrapper.vm.hasEnoughEth).toBe(true);
  });
});
