import React from 'react'

const UserCard = (props) => {
  const { user } = props
  return (
    <div className="user-card">
      <div className="user-info">
        <h3>{user.name}</h3>
        <img src={user.avatarURL} alt="avatar" />
      </div>
      <p>Questions asked: {user.questions.length}</p>
      <p>Questions answered: {Object.keys(user.answers).length}</p>
      <div className="score">
        <span>{user.questions.length + Object.keys(user.answers).length}</span>
        Score
      </div>
    </div>
  )
}

export default UserCard