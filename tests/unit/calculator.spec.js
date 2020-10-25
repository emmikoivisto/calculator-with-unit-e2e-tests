import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('enterNum changes running total', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 4
    wrapper.vm.add('5');
    expect(wrapper.vm.runningTotal).to.equal(9)
  })
  it('add 1 to 4 and get 5', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 4
    wrapper.vm.add('1');
    expect(wrapper.vm.runningTotal).to.equal(5)
  })

  it('subtract', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 7
    wrapper.vm.subtract('4');
    expect(wrapper.vm.runningTotal).to.equal(3)
  })

  it('multiply', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 3
    wrapper.vm.multiply('5');
    expect(wrapper.vm.runningTotal).to.equal(15)
  })

  it('divide', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 21
    wrapper.vm.divide('7');
    expect(wrapper.vm.runningTotal).to.equal(3)
  })

  it('concatenate', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.numberClick(4);
    wrapper.vm.numberClick(1);
    expect(wrapper.vm.runningTotal).to.equal(41)
  })

  it('chain multiple operators', () => {
    const wrapper = shallowMount(App);
    wrapper.vm.previousTotal = 0;
    wrapper.vm.numberClick('20');
    wrapper.vm.operatorClick('-');
    wrapper.vm.numberClick('5');
    wrapper.vm.operatorClick('*');
    wrapper.vm.numberClick('2');
    wrapper.vm.operatorClick('+');
    wrapper.vm.numberClick('20');
    wrapper.vm.operatorClick('=');
    expect(wrapper.vm.runningTotal).to.equal(50);
  })

  it('clear the total', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 20
    wrapper.vm.divide('5');
    wrapper.vm.clearClick();
    expect(wrapper.vm.runningTotal).to.equal(0)
  })
})
