import {
  _getUsers,
  _getQuestions,
  _saveQuestionAnswer,
  _saveQuestion
} from './_DATA'

export function getInitData() {
  return Promise.all([
    _getUsers(),
    _getQuestions()
  ]).then(([users, questions]) => ({
    users,
    questions
  }))
}

export function saveQuestion(question) {
  return Promise.all([
    _saveQuestion(question)
  ]).then(([question]) => (question))
}

export function saveQuestionAnswer(info) {
  // console.log('info', info);
  return _saveQuestionAnswer(info)
}
