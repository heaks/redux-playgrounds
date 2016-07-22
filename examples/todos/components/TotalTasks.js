import React, { PropTypes } from 'react'

const TotalTasks = ({allTodosCount, todosCount}) => (
  <div>
    <p>Total Tasks: {allTodosCount}</p>
    <p>Tasks shown: {todosCount}</p>
  </div>
)

TotalTasks.propTypes = {
  allTodosCount: PropTypes.number.isRequired,
  todosCount: PropTypes.number.isRequired
}

export default TotalTasks
