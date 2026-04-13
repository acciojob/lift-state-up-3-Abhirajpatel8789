import React from 'react'

const ChildComponent1 = ({h2,setSelectedOption}) => {
    function hendleClick(){
        setSelectedOption("Option 1")
    }
  return (
    <div className='child1'>
        <h2>{h2}</h2>
        <button onClick={hendleClick}>Option 1</button>
      
    </div>
  )
}

export default ChildComponent1
