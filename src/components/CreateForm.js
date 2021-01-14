import React from 'react'

const CreateForm = (props) => {
  const { handleCreateQuestion, firstOption, secondOption } = props
  return (
    <form className="create-form">
      <input
        type="text"
        placeholder="Enter first option"
        value={firstOption}
        name="firstOption"
        onChange={handleCreateQuestion} />
      <span className="input-seperator">OR</span>
      <input
        type="text"
        placeholder="Enter second option"
        value={secondOption}
        name="secondOption"
        onChange={handleCreateQuestion} />
    </form>
  )
}

export default CreateForm