import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import { vote } from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
  }
}

const mapStateToProps = (state) => {
  console.log('Visible TODO list, state: ', state);
  return {
    allTodosCount: state.todos.length,
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log('Visible TODO list, dispatch: ', dispatch);
  return {
    onTextClick: (id) => {
      dispatch(toggleTodo(id))
    },
    onVoteClick: (id) => {
      dispatch(vote(id))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)


export default VisibleTodoList
