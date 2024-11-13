import React, { useState } from 'react'

const Steps = () => {
    const [step, setStep]=useState(1);
    const handleNext=()=>{

        
            if(step <= 2) setStep((step)=> step + 1)
        

    }

    const handlePrevious=()=>{
        if (step > 1) setStep((step)=> step - 1)
    }


  return (
    <div>
        <span className={`${step ===1?"active":''}`}>1</span>
        <span className={`${step ===2?"active":''}`}>2</span>
        <span className={`${step ===3?"active":''}`}>3</span>

        <button onClick={handleNext} className='btn btn-primary'>Next

        </button>
        <button onClick={handlePrevious} className='btn btn-primary'>Previous

        </button>

    </div>

        
      
   
  )
}

export default Steps
