import { mount } from '@vue/test-utils'
import VueToNuxtLogo from './VueToNuxtLogo.vue'

describe('VueToNuxtLogo', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(VueToNuxtLogo)
  })

  it('should match with snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
