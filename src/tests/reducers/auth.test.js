import authReducer from '../../reducers/auth'

test('should se uid for login', () => {
  const uid = 'test-uid'
  const action = {
    type: 'LOGIN',
    uid
  }
  const state = authReducer({}, action)
  expect(state.uid).toEqual(uid)
})

test('should clear uid for logout', () => {
  const action = {
    type: 'LOGOUT'
  }
  const state = authReducer({ uid: 'old-uid' }, action)
  expect(state.uid).toBeUndefined()
})