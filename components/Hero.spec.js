import { mount } from '@vue/test-utils'
import Hero from './Hero.vue'

describe('Hero', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Hero)
  })

  it('should match with snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
