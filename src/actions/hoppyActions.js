export const addNewHobby = (hobby) => {
  return {
    type: 'ADD_NEW_HOBBY',
    payload: hobby
  }
}

export const setCompletedHobby = (index) => {
  return {
    type: 'SET_ACTIVE_HOBBY',
    payload: index
  }
}