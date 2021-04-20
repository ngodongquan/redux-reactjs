import React from 'react'
import HobbyList from './hobbyList'
import { useSelector, useDispatch } from 'react-redux'
import { setCompletedHobby, addNewHobby } from '../actions/hoppyActions'
import HobbyForm from './hobbyForm'

const HomePage = () => {
  // get data hobby list from store
  const hobbyList = useSelector(state => state.hobby.list)
  
  // declare dispatch
  const dispatch = useDispatch()

  // methods
  const handleHobbyClick = (index) => {
    dispatch(setCompletedHobby(index))
  }
  const handleChangeInputNewHobby = (value) => {
    let newHobby = {
      name: value,
      isCompleted: false
    }
    dispatch(addNewHobby(newHobby))
  }
  return (
    <div>
      <HobbyForm addNameNewHobby={handleChangeInputNewHobby}></HobbyForm>
      <HobbyList hobbyList={hobbyList} onHobbyClick={handleHobbyClick}></HobbyList>
    </div>
  )
}
export default HomePage