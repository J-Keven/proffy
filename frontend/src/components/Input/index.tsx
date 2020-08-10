import React, {InputHTMLAttributes} from 'react'

import "./style.css"


interface InputPropsType extends InputHTMLAttributes<HTMLInputElement>{
  label: string 
  name: string
}

const Input: React.FC<InputPropsType> = ({name, label, ...rest}) => {
  return (
    <div className="input-block">
      <label htmlFor={name}>{label}</label>
      <input type="text" name={name} id={name} {...rest}/>
    </div>
  )
}
export default Input; 