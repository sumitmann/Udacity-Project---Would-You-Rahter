import React from 'react'
import { Link } from 'react-router-dom'

const QuestionsNotAnswered = (props) => {
  const { question } = props
  return (
    <form className="questions-tabs">
      <label>
        <input
          type="radio"
          name="option"
          value="optionOne"
          onChange={props.optionClickHandler} />
        {question["optionOne"]["text"]}
      </label>
      <span className="">OR</span>
      <label>
        <input
          type="radio"
          name="question"
          value="optionTwo"
          onChange={props.optionClickHandler} />
        {question["optionTwo"]["text"]}
      </label>
      <Link to="/questions">
        <span role="img" aria-label="back button">&#128281;</span>
      </Link>
    </form>
  )
}

export default QuestionsNotAnswered