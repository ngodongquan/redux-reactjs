let initialState = {
  list: [{
    name: 'Work',
    isCompleted: false
  },
  {
    name: 'Learning',
    isCompleted: false
  }]
}

const hobbyReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_NEW_HOBBY': {
      let shallowList = [ ...state.list ]
      shallowList.push(action.payload)
      return {
        list: shallowList
      }
    }

    case 'SET_ACTIVE_HOBBY': {
      let shallowList = [ ...state.list ]
      shallowList[action.payload].isCompleted = !shallowList[action.payload].isCompleted
      return {
        list: shallowList
      }
    }

    default: {
      return state
    }
  }
}
export default hobbyReducer