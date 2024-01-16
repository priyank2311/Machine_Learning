import React from 'react'

const GrandChildComponent = ({greet}) => {
  return (
    <div>
      <h2>
        There is message from your Parents - {greet}
      </h2>
    </div>
  )
}

export default GrandChildComponent