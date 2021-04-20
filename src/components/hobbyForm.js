import React, { useState } from 'react'

const HobbyForm = (props) => {
  const { addNameNewHobby } = props 
  const [value, setValue] = useState('')

  const handleChangeInput = (e) => {
    setValue(e.target.value)
  }

  const handleClickAddNewHobby = () => {
    addNameNewHobby(value)
    setValue('')
  }
  return (
    <div>
      <input value={value} onChange={(e) => { handleChangeInput(e) }}></input>
      <button onClick={() => { handleClickAddNewHobby() }}>Add new Hobby</button>
    </div>
  )
}
export default HobbyForm