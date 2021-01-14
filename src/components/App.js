import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// Actions
import { handleInitData } from '../actions/shared'
// Components
import LoginPage from './LoginPage'
import Questions from './Questions'
import QuestionDetails from './QuestionDetails'
import Routes from './Routes'
import Header from './Header';
import Question from './Question'
import LeadersboardPage from './LeadersboardPage'
import ErrorPage from './ErrorPage'



function mapStateToProps({ loggedInUser, users, questions }) {
  if (users && loggedInUser) {
    const unansweredQuestionIds = []
    const answeredQuestionIds = Object.keys(users[loggedInUser].answers)
    const questionsId = Object.keys(questions).sort((a, b) => questions[b].timestamp - questions[a].timestamp)
    questionsId.map(id => answeredQuestionIds.includes(id) === false && unansweredQuestionIds.push(id))
    answeredQuestionIds.sort((a, b) => questions[b].timestamp - questions[a].timestamp)
    return {
      loggedInUser,
      answeredQuestionIds,
      unansweredQuestionIds
    }
  }
  return {
    loggedInUser
  }
}

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitData())
  }

  render() {
    const { loggedInUser, answeredQuestionIds, unansweredQuestionIds } = this.props
    return (
      <Router>
        <Fragment>
          {loggedInUser !== null
            && <Header />
          }
          <Switch>
            <Route path="/"
                  exact
                  component={LoginPage} />
            <Routes isLoggedin={loggedInUser !== null}
                          exact
                          path="/questions"
                          component={(props) => <Questions {...props} answeredQuestionIds={answeredQuestionIds} unansweredQuestionIds={unansweredQuestionIds} />} />
            <Routes isLoggedin={loggedInUser !== null}
                          path="/questions/:id"
                          component={(props) => <QuestionDetails {...props} answeredQuestionIds={answeredQuestionIds} unansweredQuestionIds={unansweredQuestionIds}/>}/>
            <Routes isLoggedin={loggedInUser !== null}
                          path="/create"
                          component={Question}/>
            <Routes isLoggedin={loggedInUser !== null}
                          path="/leaderboard"
                          component={LeadersboardPage}/>
            <Route component={ErrorPage}/>
          </Switch>
        </Fragment>
      </Router>

    );
  }
}

export default connect(mapStateToProps)(App);
