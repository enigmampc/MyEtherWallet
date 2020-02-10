import VueX from 'vuex';
import { shallowMount } from '@vue/test-utils';
import SaladMix from '@/dapps/Salad/containers/SaladMix';
import { Tooling } from '@@/helpers';
import { state, getters } from '@@/helpers/mockStore';

describe('SaladMix.vue', () => {
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
    wrapper = shallowMount(SaladMix, {
      localVue,
      i18n,
      store,
      attachToDocument: true
    });
  });

  it('should return the correct data', () => {
    expect(wrapper.vm.$data.page).toEqual('startNewMix');
    expect(wrapper.vm.$data.mixAmount).toEqual('0.01');
    expect(wrapper.vm.$data.deliveryAddress).toEqual('');
    expect(wrapper.vm.$data.isSubmitting).toEqual(false);
    expect(wrapper.vm.$data.isPending).toEqual(false);
    expect(wrapper.vm.$data.blockCountdown).toEqual(0);
    expect(wrapper.vm.$data.quorum).toEqual(0);
    expect(wrapper.vm.$data.err).toEqual(null);
    expect(wrapper.vm.$data.deal).toEqual(null);
    expect(wrapper.vm.$data.dealId).toEqual('');
    expect(wrapper.vm.$data.dealConfirmed).toEqual(false);
  });

  it('should fail to start deposit with invalid address', async () => {
    try {
      await wrapper.vm.startDeposit('foo');
    } catch (e) {
      //todo expect error
    }
    finally {
      expect(wrapper.vm.$data.page).toEqual('startNewMix');
    }
  });

  it('should start deposit with valid address', async () => {
    await wrapper.vm.startDeposit(state.account.address);
    expect(wrapper.vm.$data.page).toEqual('confirmDeposit');
  });

  it('should cancel deposit', async () => {
    await wrapper.vm.startDeposit(state.account.address);
    expect(wrapper.vm.$data.page).toEqual('confirmDeposit');

    await wrapper.vm.cancelDeposit();
    expect(wrapper.vm.$data.page).toEqual('startNewMix');
    expect(wrapper.vm.$data.deliveryAddress).toEqual('');
    expect(wrapper.vm.$data.isSubmitting).toEqual(false);
  });

  xit('start confirm deposit', async () => {
    await wrapper.vm.startDeposit(state.account.address);
    expect(wrapper.vm.$data.page).toEqual('confirmDeposit');

    // todo mock salad and test 
    await wrapper.vm.confirmDeposit();
  });
});
