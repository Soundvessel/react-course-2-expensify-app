//import thunk from 'redux-thunk'

import {
  login,
  startLogin,
  logout,
  startLogout
} from '../../actions/auth'
import configureMockStore from 'redux-mock-store'


//const createMockStore = configureMockStore([thunk])

test('should setup login user action object', () => {
  const uid = 'test-uid'
  const action = login(uid)
  expect(action).toEqual({
    type: 'LOGIN',
    uid
  })
})

test('should login user', () => {

})

test('should setup logout user action object', () => {
  const action = logout()
  expect(action).toEqual({
    type: 'LOGOUT'
  })
})

test('should logout user', () => {
})