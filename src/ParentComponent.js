import React from 'react'
import ChildComponent from './ChildComponent'

const ParentComponent = () => {
  const greet = 'We will reach out there at 9PM'

  return (
    <div>
      <ChildComponent greet={greet} />
    </div>
  )
}

export default ParentComponent