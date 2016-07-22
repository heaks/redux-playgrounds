const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false,
        votes: 0
      }
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        completed: !state.completed
      })
    case 'UPVOTE_TODO':
      if (state.id !== action.id) {
        return state
      }
      return Object.assign({}, state, {
        votes: state.votes + 1
      })
    default:
      return state
  }
}

const todos = (state = [], action) => {
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
    case 'UPVOTE_TODO':
      return state.map(t =>
          todo(t, action)
      );
    default:
      return state
  }
}

export default todos
