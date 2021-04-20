import React from 'react'
import Proptypes from 'prop-types'


const HobbyList = (props) => {
  const { hobbyList, onHobbyClick } = props

  const setCompleted = (index) => {
    onHobbyClick(index)
  }
  return (
    <div>
      {hobbyList.map((hobby, index) => (
        <li
        onClick={() => {setCompleted(index) }}
        key={index}
        className={hobby.isCompleted ? 'hobby-completed' : ''}>
          {hobby.name}
        </li>
      ))}
    </div>
  )
}

HobbyList.propTypes = {
  hobbyList: Proptypes.array
}

HobbyList.defaultProps = {
  hobbyList: []
}
export default HobbyList
