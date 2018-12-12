import AppToggleButton from '~/components/AppToggleButton.vue'
import { mount } from '@vue/test-utils'

describe('AppToggleButton.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = null
    wrapper = mount(AppToggleButton)
  })

  test('デフォルト状態で off であるか', () => {
    expect(wrapper.find('p').text()).toBe('off')
  })

  test('ボタンを押すことによって on となるか', () => {
    wrapper.find('button').trigger('click')
    expect(wrapper.find('p').text()).toBe('on')
  })
})
