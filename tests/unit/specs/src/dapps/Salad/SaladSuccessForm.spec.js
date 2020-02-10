import Vue from 'vue';
import { shallowMount } from '@vue/test-utils';
import SuccessForm from '@/dapps/Salad/containers/SuccessForm';
import { Tooling } from '@@/helpers';

describe('SuccessForm.vue', () => {
    let localVue, wrapper, i18n, store;

    beforeAll(() => {
        const baseSetup = Tooling.createLocalVueInstance();
        localVue = baseSetup.localVue;
        i18n = baseSetup.i18n;
        store = baseSetup.store;
    });

    beforeEach(() => {
        wrapper = shallowMount(SuccessForm, {
            localVue,
            i18n,
            store,
            attachToDocument: true,
            propsData: {
                dealStatusHeader: '',
                dealStatusMessage: '',
                dealId: '',
                dealExecuted: false
            },
        });
    });

    it('should return the correct data', () => {
        expect(wrapper.vm.$props.dealStatusHeader).toEqual('');
        expect(wrapper.vm.$props.dealStatusMessage).toEqual('');
        expect(wrapper.vm.$props.dealId).toEqual('');
        expect(wrapper.vm.$props.dealExecuted).toEqual(false);
    });

    // todo test that button is present when the deal is confirmed
    xit('New mix button is not present until new deal is confirmed', () => {

        expect(wrapper.classes()).not.toContain('new-mix-btn-container');

        wrapper.setProps({ dealExecuted: true });
        expect(wrapper.classes()).toContain('new-mix-btn-container');
    });

});