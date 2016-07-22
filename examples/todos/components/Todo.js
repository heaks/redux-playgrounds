import React, { PropTypes } from 'react'
import Votes from './Votes'

const Todo = ({ onTextClick, onVoteClick, completed, text, votes}) => {
  return (
  <li
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    <span onClick={onTextClick}>{text}</span> {'  '}  <Votes votes={votes} onVoteClick={onVoteClick}/>
  </li>
)}

Todo.propTypes = {
  onTextClick: PropTypes.func.isRequired,
  onVoteClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
