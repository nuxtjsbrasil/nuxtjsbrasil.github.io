import { mount } from '@vue/test-utils'
import Home from './index.vue'

describe('Home', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Home)
  })

  it('should match with snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
