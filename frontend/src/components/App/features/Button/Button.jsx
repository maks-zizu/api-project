import React, { useState } from 'react'

const Button = () => {

  const [count, setCount] = useState(0)
  const [step, setStep] = useState(1)

  const sum = () => {
    setCount((prev)=> prev+step)
  }

  return (
    <div>
      <div>{count}</div>
      <input type='number' onChange={(e)=>setStep(Number(e.target.value))} />
      <button onClick={sum}>
        Добавить
      </button>
    </div>
  )
}

export default Button