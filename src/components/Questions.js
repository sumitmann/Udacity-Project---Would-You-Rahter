import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Question from './Question'

class Questions extends Component {
  state = {
    currentTab: 'unanswered'
  }

  setCurrentTab = e => {
    this.setState({
      currentTab: e.target.value
    })
  }


  render() {
    const { currentTab } = this.state
    const { unansweredQuestionIds, answeredQuestionIds } = this.props
    return (
      <div className="questions-view">
        <div className="questions-tabs">
          <label className={currentTab === 'unanswered' ? 'is-active' : ''}>
            <input
              type="radio"
              name="question-tab"
              value="unanswered" onChange={this.setCurrentTab} />
              Unanswered Questions
          </label>
          <label className={currentTab === 'answered' ? 'is-active' : ''}>
            <input
              type="radio"
              name="question-tab"
              value="answered"
              onChange={this.setCurrentTab} />
              Answered Questions
          </label>
        </div>
        <div className="questions-list">
          {currentTab === 'unanswered' ?
            unansweredQuestionIds.map(id =>
              <Link
                key={id}
                to={`/questions/${id}`}>
                <Question id={id} />
              </Link>
            )
            : answeredQuestionIds.map(id =>
              <Link
                key={id}
                to={`/questions/${id}`}>
                <Question id={id} />
              </Link>
            )
          }
        </div>
      </div>
    );
  }
}

export default (Questions)