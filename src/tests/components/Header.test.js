import React from 'react'
import { shallow } from 'enzyme'

import { Header } from '../../components/Header'


let startLogout, wrapper

beforeEach(() => {
  startLogout = jest.fn()
  wrapper = shallow(
    <Header
      startLogout={startLogout}
    />
  )
})


test('should render Header correctly', () => {
  expect(wrapper).toMatchSnapshot()

  // without Enzyme
  // const renderer = new ReactShallowRenderer()
  // renderer.render(<Header />)
  // expect(renderer.getRenderOutput()).toMatchSnapshot()

  // Enzyme example
  //expect(wrapper.find('h1').text()).toBe('Expensify')
})


test('should call startLogout on button click', () => {
  wrapper.find('button').simulate('click')
  expect(startLogout).toHaveBeenCalled()
})