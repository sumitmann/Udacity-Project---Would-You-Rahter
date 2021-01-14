import { saveQuestion, saveQuestionAnswer } from '../utils/api'

export const FETCH_QUESTION = 'FETCH_QUESTION'
export const CREATE_QUESTION = 'CREATE_QUESTION'
export const SAVE_QUESTIONS_ANSWER = 'SAVE_QUESTIONS_ANSWER'


export function fetchQuestions(questions) {
  return {
    type: FETCH_QUESTION,
    questions
  }
}

export function createQuestion(question) {
  return {
    type: CREATE_QUESTION,
    question
  }
}

export function saveQuestionsAnswer(loggedInUser, qid, answer) {
  return {
    type: SAVE_QUESTIONS_ANSWER,
    loggedInUser,
    qid,
    answer
  }
}

export function handleCreateQuestion(optionOne, optionTwo) {
  return (dispatch, getState) => {
    const { loggedInUser } = getState()
    return saveQuestion({
      optionOneText: optionOne,
      optionTwoText: optionTwo,
      author: loggedInUser
    }).then(question => dispatch(createQuestion(question)))
  }
}

export function handleSaveQuestionsAnswer(qid, answer) {
  return (dispatch, getState) => {
    const { loggedInUser } = getState()
    dispatch(saveQuestionsAnswer(loggedInUser, qid, answer))
    return saveQuestionAnswer({
      loggedInUser,
      qid,
      answer
    })
  }
}
