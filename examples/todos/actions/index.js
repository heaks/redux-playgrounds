import * as types from '../constants/actionTypes'

let nextTodoId = 0
export const addTodo = (text) => {
  return {
    type: types.ADD_TODO,
    id: nextTodoId++,
    text
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: types.SET_VISIBILITY_FILTER,
    filter
  }
}

export const toggleTodo = (id) => {
  return {
    type: types.TOGGLE_TODO,
    id
  }
}

export const vote = (id) => {
  return {
    type: types.UPVOTE_TODO,
    id
  }
}
