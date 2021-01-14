import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { dateFormatter, timeFormatter } from '../utils/helpers'
import { handleSaveQuestionsAnswer, handleCreateQuestion } from '../actions/questions'
import CreateForm from './CreateForm'
import QuestionsAnswered from './QuestionsAnswered'
import QuestionsNotAnswered from './QuestionsNotAnswered'

class Question extends Component {
  state = {
    selectedOpt: '',
    firstOption: '',
    secondOption: ''
  }

  optionClickHandler = e => {
    e.preventDefault()
    const selectedOpt = e.target.value
    // console.log(selectedOpt);
    const { dispatch, id } = this.props
    dispatch(handleSaveQuestionsAnswer(id, selectedOpt))
    this.setState({
      selectedOpt
    })
  }

  handleCreateQuestion = e => {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmitQuestion = e => {
    e.preventDefault()
    const { firstOption, secondOption } = this.state
    this.props.dispatch(handleCreateQuestion(firstOption, secondOption))
    this.setState({
      firstOption: "",
      secondOption: ""
    })
    this.props.history.push("/questions")
  }

  _questionDetail() {
    const { id, questions } = this.props
    const question = questions[id]
    return (
      <div className="question-info">
        <span className="question-info-opt">{question["optionOne"]["text"]}</span>
        <span className="question-info-separator">OR</span>
        <span className="question-info-opt">{question["optionTwo"]["text"]}</span>
      </div>
    )
  }

  render() {
    const { id, users, questions, answered, loggedInUser } = this.props
    const { firstOption, secondOption } = this.state
    const question = questions[id]
    const location = window.location.pathname
    const type = location.split("/").slice(-1)[0]
    return (
      <div
        className={`question-item ${type === "add" ? "is-createnew" : ""}`}>
        <div className="user-info">
          <h3>
            {question ? users[question.author].name : users[loggedInUser].name} asks
          </h3>
          <img alt="avatar"
            src={question ? users[question.author].avatarURL : users[loggedInUser].avatarURL} />
        </div>
        <div
          className="question-item-main">
          <h4>Would you rather</h4>
          {type === "questions"
            ? this._questionDetail()
            : type === id
              ? answered === false
                ? <QuestionsNotAnswered
                  optionClickHandler={this.optionClickHandler}
                  question={question} />
                : <QuestionsAnswered
                  answered={answered}
                  id={id} />
              : type === "add"
                ? <CreateForm
                  handleCreateQuestion={this.handleCreateQuestion}
                  firstOption={firstOption}
                  secondOption={secondOption} />
                : null}
        </div>
        {question
          ? <div className="question-item-info">
            <div className="score">
              <span>{question.optionOne.votes.length + question.optionTwo.votes.length}</span>
              Votes
            </div>
            <span className="question-item-date">
              {dateFormatter(question.timestamp)} {timeFormatter(question.timestamp)}
            </span>
          </div>
          : <div className="question-item-info is-askquestion">
            <button
              type="submit" disabled={!firstOption || !secondOption}
              onClick={this.handleSubmitQuestion}>
              Ask
            </button>
            <Link to="/questions">
              <span role="img" aria-label="back button">&#128281;</span>
            </Link>
          </div>
        }
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

export default connect(mapStateToProps)(Question)