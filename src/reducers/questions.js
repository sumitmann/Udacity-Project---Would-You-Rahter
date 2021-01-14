import { FETCH_QUESTION, CREATE_QUESTION, SAVE_QUESTIONS_ANSWER } from '../actions/questions'

export default function questions(state = {}, action) {
  switch (action.type) {
    case FETCH_QUESTION:
      return {
        ...state,
        ...action.questions
      }
    case CREATE_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question
      }
    case SAVE_QUESTIONS_ANSWER:
      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          [action.answer]: {
            ...state[action.qid][action.answer],
            votes: state[action.qid][action.answer].votes.concat([action.loggedInUser])
          }
        }
      }
    default:
      return state
  }
}