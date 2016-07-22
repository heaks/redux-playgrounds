import React from 'react'

const Votes = ({ votes = 0, onVoteClick }) => (
  <button onClick={onVoteClick}>Likes: {votes}</button>
)

export default Votes
