import { getInitData } from '../utils/api'
import { fetchQuestions } from './questions'
import { fetchUsers } from './users'

export function handleInitData() {
  return (dispatch) => {
    return getInitData()
      .then(({ users, questions }) => {
        dispatch(fetchUsers(users))
        dispatch(fetchQuestions(questions))
      })
  }
}
