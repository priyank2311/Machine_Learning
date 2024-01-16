import React from 'react'
import GrandChildComponent from './GrandChildComponent'

const ChildComponent = ({greet}) => {
  return (
    <div>
      <GrandChildComponent greet = {greet} />
    </div>
  )
}

export default ChildComponent
