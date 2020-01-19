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


// todo refactoring
  it('should return the correct data', () => {
    expect(wrapper.vm.$data.page).toEqual('newDeposit');
    expect(wrapper.vm.$data.mixAmount).toEqual('0.01');
    expect(wrapper.vm.$data.deliveryAddress).toEqual('');
    expect(wrapper.vm.$data.isSubmitting).toEqual(false);
  });

  // it('Starts deposit with valid deliveryAddress', () => {
  //   const addressContent = wrapper.vm.$el
  //     .querySelector('.currentAddress')
  //     .textContent.trim();
  //   const currentAddress = wrapper.vm.account.address;
  //   const expectedCurrentAddressText =
  //     currentAddress.substring(0, 7) +
  //     '....' +
  //     currentAddress.substring(currentAddress.length - 3);

  //   expect(addressContent).toEqual(expectedCurrentAddressText);
  // });

  it('should fail to start if deliveryAddress is not valid', () => {
    const deliveryAddress = '0x0';
    wrapper.setData({ deliveryAddress });

    expect(wrapper.vm.$data.page).toEqual(
      'newDeposit'
    );
  });

  // it('deliveryAddress is valid', () => {
  //   const deliveryAddress = '0x0';
  //   wrapper.setData({ deliveryAddress });

  //   expect(wrapper.vm.$data.deliveryAddressErrMessage).toEqual(
  //     'DeliveryAddress must be a valid Ethereum address'
  //   );
  // });

  // it('should set an error message if balance is too low', () => {
  //   const mixAmount = '1';
  //   wrapper.setProps({ mixAmount });
  //   wrapper.setData({ account: { balance: 0 } });

  //   const deliveryAddress = wrapper.vm.account.address;
  //   wrapper.setData({ deliveryAddress });

  //   expect(wrapper.vm.hasEnoughEth).toBe(false);
  // });

  // it('valid eth balance', () => {
  //   const mixAmount = '1';
  //   wrapper.setProps({ mixAmount });
    
  //   wrapper.setData({ account: { balance: web3.utils.toWei(mixAmount, 'ether') } });

  //   const deliveryAddress = wrapper.vm.account.address;
  //   wrapper.setData({ deliveryAddress });

  //   expect(wrapper.vm.hasEnoughEth).toBe(true);
  // });

//   todo emit event, test the content

});
