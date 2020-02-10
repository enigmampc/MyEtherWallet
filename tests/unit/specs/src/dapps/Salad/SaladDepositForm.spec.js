import VueX from 'vuex';
import { shallowMount } from '@vue/test-utils';
import DepositForm from '@/dapps/Salad/containers/DepositForm';
import { Tooling } from '@@/helpers';
import web3 from 'web3';
import { state, getters } from '@@/helpers/mockStore';

describe('DepositForm.vue', () => {
  let localVue, i18n, wrapper, store;

  beforeAll(() => {
    const baseSetup = Tooling.createLocalVueInstance();
    localVue = baseSetup.localVue;
    i18n = baseSetup.i18n;
    store = new VueX.Store({
      modules: {
        main: {
          namespaced: true,
          state,
          getters
        }
      }
    });
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
      .querySelector('.current-address')
      .textContent.trim();
    const currentAddress = state.account.address;
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
    const deliveryAddress = state.account.address;
    wrapper.setData({ deliveryAddress });

    expect(wrapper.vm.$data.isValidDeliveryAddress).toEqual(true);
  });

  it('should set an error message if balance is too low', () => {
    const mixAmount = '1';
    wrapper.setProps({ mixAmount });
    wrapper.setData({ account: { balance: 0 } });

    const deliveryAddress = state.account.address;
    wrapper.setData({ deliveryAddress });

    expect(wrapper.vm.hasEnoughEth).toBe(false);
  });

  it('valid eth balance', () => {
    const mixAmount = '1';
    wrapper.setProps({ mixAmount });
    
    wrapper.setData({ account: { balance: web3.utils.toWei(mixAmount, 'ether') } });

    const deliveryAddress = state.account.address;
    wrapper.setData({ deliveryAddress });

    expect(wrapper.vm.hasEnoughEth).toBe(true);
  });
});
 