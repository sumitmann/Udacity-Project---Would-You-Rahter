import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserCard from './UserCard'

class LeadersboardPage extends Component {
  render() {
    const { sortUsers } = this.props

    return (
      <div className="leadersboard">
          {sortUsers.map(user =>
            <UserCard user={user} key={user.id} />
          )}
      </div>
    )
  }
}

function mapStateToProps({ users }) {
  const sortUsers = Object.keys(users)
                      .map(id => users[id])
                      .sort((a, b) =>
                        (b.questions.length + Object.keys(b.answers).length) - (a.questions.length + Object.keys(a.answers).length)
                      )
  return {
    sortUsers
  }
}

export default connect(mapStateToProps)(LeadersboardPage)