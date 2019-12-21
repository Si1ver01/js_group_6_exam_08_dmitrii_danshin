import React from 'react'
import classes from './Input.module.css';

const Input = ({label,value,handler,required,type='text'}) => {
  const id = Math.random();
  return (
    <div className={classes.Input}>
      <label htmlFor={id}>{label}</label>
      <input type={type} placeholder={label} value={value} onChange={handler} required={required} id={id}/>
    </div>
  )
}

export default Input
