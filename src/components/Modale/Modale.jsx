import React from 'react';
import './style.css'

window.React = React
export const Modale = (props) => {
  return props.trigger ? (
    <div className='modale'>
      <div className='content'>
        <button
          className='close'
          onClick={() => props.setTrigger(false)}
        >
          X
        </button>
        <span className='text'>{props.content}</span>
      </div>
    </div>
  ) : (
    ''
  );}