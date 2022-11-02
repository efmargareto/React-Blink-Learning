import React, { useEffect, useState } from 'react'
import { store } from '../../store.js';
import { useNavigate } from "react-router-dom";

export const Result = () => {
  const navigate = useNavigate()

  useEffect(() => {
    !store.getState()?.enableResult && navigate('/') 
  }, [])

  const paintResult = () => {
    return store.getState().content.map( (elem, ind) => {
      const isCorrect = Number(elem.position) === (ind + 1 )

      return (
        <div className='options' key={ind}>
        <div className={`task ${isCorrect ? 'correct' : 'incorrect'}`}>
          {elem.text}
          <span className="task-order">{ind + 1}</span>
        </div>
      </div>
      )
    })
  }

  return (
    <div className='result'>
      <div className='container'>
        <h1>Resultado</h1>
        {
          store.getState().content && paintResult()
        }
        <button onClick={() => navigate('/')} className='button button1 m-0'>GO HOME</button>
      </div>
    </div>
  )
}
