import React, { PropTypes } from 'react'
import Todo from './Todo'
import TotalTasks from './TotalTasks'

const TodoList = ({ allTodosCount, todos, onTextClick, onVoteClick }) => {
  console.log('MARKER: ', todos);
  return (
  <div>
    <ul>
      {todos.map(todo =>
        <Todo
          key={todo.id}
          {...todo}
          onTextClick={() => onTextClick(todo.id)}
          onVoteClick={() => onVoteClick(todo.id)}
        />
      )}
    </ul>

    <TotalTasks allTodosCount={allTodosCount} todosCount={todos.length}/>
  </div>
)}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTextClick: PropTypes.func.isRequired,
  onVoteClick: PropTypes.func.isRequired
}

export default TodoList
