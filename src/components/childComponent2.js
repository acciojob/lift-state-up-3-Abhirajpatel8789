import React from 'react'

const ChildComponent2 = ({h2,setSelectedOption}) => {
    function hendleClick(){
       setSelectedOption("Option 2")
    }
  return (
    <div className='child2'>
        <h2>{h2}</h2>
        <button onClick={hendleClick}>Option 2</button>
        
      
    </div>
  )
}

export default ChildComponent2
