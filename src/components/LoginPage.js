import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setLoggedInUser } from '../actions/loggedInUser'

class LoginPage extends Component {
  handleLoggedInUser = (id) => {
    this.props.dispatch(setLoggedInUser(id))
    const { from } = this.props.location.state || { from: { pathname: "/questions" } }
    this.props.history.push(from)
  }

  render() {
    const { userIds, users } = this.props

    return (
      <div className="login-view">
        <h1>Welcome to would you rather game</h1>
        <h2>Choose a user to login</h2>
        <div className="user-list">
          {userIds.map(user =>
            <div
              className="user-item numorphic-shadow"
              key={user}
              onClick={() => this.handleLoggedInUser(user)}>
              <img alt={users[user].name} src={users[user].avatarURL} />
              <span className="user-name">
                {users[user].name}
              </span>
            </div>
          )
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    userIds: Object.keys(users),
    users
  }
}

export default connect(mapStateToProps)(LoginPage)
