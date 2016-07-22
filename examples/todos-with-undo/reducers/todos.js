import undoable, { distinctState } from 'redux-undo'

const todo = (state, action) => {
  console.log('todo, state: ', state);
  console.log('todo, action: ', action);
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        completed: !state.completed
      })
    default:
      return state
  }
}

const todos = (state = [], action) => {
  console.log('todos, state: ', state);
  console.log('todos, action: ', action);
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      )
    default:
      return state
  }
}

const undoableTodos = undoable(todos, {
  filter: distinctState()
})

export default undoableTodos

