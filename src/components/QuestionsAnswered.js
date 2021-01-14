import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class QuestionsAnswered extends Component {
  render() {
    const { id, users, loggedInUser, questions, answered } = this.props
    const question = questions[id]

    let option = answered ? users[loggedInUser].answers[id] : null

    const answersCount = question.optionOne.votes.length + question.optionTwo.votes.length
    const optionOnePercent = Math.ceil((question.optionOne.votes.length / answersCount) * 100)
    const optionTwoPercent = 100 - optionOnePercent;

    return (
      <div className="question-results">
        <div className={`question-result-item ${option === 'optionOne' ? "is-active" : ""}`}>
          <div className="question-opt-text">{question["optionOne"]["text"]} <span>{question.optionOne.votes.length} of {answersCount} votes</span></div>
          <div className="question-result-bar">
            <div className="fill" style={{ width: optionOnePercent+'%' }}></div>
            <div className="text">{optionOnePercent} %</div>
          </div>
        </div>
        <div className={`question-result-item ${option === 'optionTwo' ? "is-active" : ""}`}>
          <div className="question-opt-text">{question["optionTwo"]["text"]} <span>{question.optionTwo.votes.length} of {answersCount} votes</span></div>
          <div className="question-result-bar">
            <div className="fill" style={{ width: optionTwoPercent + '%' }}></div>
            <div className="text">{optionTwoPercent} %</div>
          </div>
        </div>
        <Link to="/questions">
          <span role="img" aria-label="back button">&#128281;</span>
        </Link>
      </div>
    )
  }
}

function mapStateToProps({ users, questions, loggedInUser }) {
  return {
    users,
    questions,
    loggedInUser
  }
}

export default connect(mapStateToProps)(QuestionsAnswered)