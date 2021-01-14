import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, NavLink } from 'react-router-dom'
import { setLoggedInUser } from '../actions/loggedInUser';

class Header extends Component {

  handleLogout = () => {
    this.props.dispatch(setLoggedInUser(null))
    this.props.history.push("/")
  }

  render() {
    const { loggedInUser, users } = this.props
    return (
      <header className="header">
        <img src={users[loggedInUser].avatarURL} alt="uavatar" className="user-avatar"/>
        <h2 className="header-title">{users[loggedInUser].name}</h2>
        <nav className="main-nav">
          <NavLink to="/questions" className="main-nav-link numorphic-shadow is-small" activeClassName="is-active">Home</NavLink>
          <NavLink to="/add" className="main-nav-link numorphic-shadow is-small" activeClassName="is-active">Create Question</NavLink>
          <NavLink to="/leaderboard" className="main-nav-link numorphic-shadow is-small" activeClassName="is-active">Leadersboard</NavLink>
          <a className="main-nav-link numorphic-shadow is-small" onClick={this.handleLogout}>Logout</a>
        </nav>
      </header>
    )
  }
}


function mapStateToProps({ loggedInUser, users }) {
  return {
    users,
    loggedInUser
  }
}
export default withRouter(connect(mapStateToProps)(Header))