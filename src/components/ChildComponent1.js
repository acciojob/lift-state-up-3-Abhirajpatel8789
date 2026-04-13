import React from 'react'

const ChildComponent1 = ({setSelectedOption}) => {
    function hendleClick(){
        setSelectedOption("Option 1")
    }
  return (
    <div className='child1'>
        <h1>Child Component 1</h1>
        <button onClick={hendleClick}>Option 1</button>
    
    </div>
  )
}

export default ChildComponent1
