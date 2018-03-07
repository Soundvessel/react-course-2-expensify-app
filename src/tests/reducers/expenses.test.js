import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'


test('sound set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' })
  expect(state).toEqual([])
})


test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([expenses[0], expenses[2]])
})


test('should not remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: 'DoesNotExist'
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
})


test('should add an expense', () => {
  const newExpense = {
    id: '4',
    description: 'Sub',
    note: '',
    amount: 500,
    createdAt: 0
  }
  const action = {
    type: 'ADD_EXPENSE',
    expense: newExpense
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([...expenses, newExpense])
})


test('should edit an expense', () => {
  const amount = 295
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[0].id,
    updates: {
      amount
    }
  }
  const state = expensesReducer(expenses, action)
  expect(state[0].amount).toEqual(amount)
})


test('should not edit an expense if expense not found', () => {
  const amount = 295
  const action = {
    type: 'EDIT_EXPENSE',
    id: 'BadID',
    updates: {
      amount
    }
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
})


test('should set expenses', () => {
  const action = {
    type: 'SET_EXPENSES',
    expenses: [expenses[1]]
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([expenses[1]])
})