import { CREATE_QUESTION, SAVE_QUESTIONS_ANSWER } from '../actions/questions'
import { FETCH_USERS } from '../actions/users'

export default function users(state = {}, action) {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        ...action.users
      }
    case CREATE_QUESTION:
      return {
        ...state,
        [action.question.author]: {
          ...state[action.question.author],
          questions: state[action.question.author].questions.concat([action.question.id])
        }
      }
    case SAVE_QUESTIONS_ANSWER:
      return {
        ...state,
        [action.loggedInUser]: {
          ...state[action.loggedInUser],
          answers: {
            ...state[action.loggedInUser].answers,
            [action.qid]: action.answer
          }
        }
      }
    default:
      return state
  }
}