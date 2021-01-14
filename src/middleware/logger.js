const logger = (store) => (next) => (action) => {
  console.group(action.type)
  console.log('Actions: ', action)
  const returnAction = next(action)
  console.log('New State: ', store.getState())
  console.groupEnd()
  return returnAction
}

export default logger
