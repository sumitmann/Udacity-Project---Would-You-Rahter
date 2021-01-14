import React from 'react'
import Question from './Question'
import ErrorPage from './ErrorPage'

const QuestionDetails = (props) => {
  const { id } = props.match.params
  const { answeredQuestionIds, unansweredQuestionIds } = props
  return (
    <div className="questions-view">
      { answeredQuestionIds.includes(id)
        ? <Question id={id} answered={true} />
        : unansweredQuestionIds.includes(id)
        ? <Question id={id} answered={false} />
        : <ErrorPage />
      }
    </div>
  )
}

export default QuestionDetails