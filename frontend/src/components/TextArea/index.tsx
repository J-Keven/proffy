import React, {TextareaHTMLAttributes} from 'react'

import "./style.css"


interface TextareaPropsType extends TextareaHTMLAttributes<HTMLTextAreaElement>{
  label: string 
  name: string
}

const Textarea: React.FC<TextareaPropsType> = ({name, label, ...rest}) => {
  return (
    <div className="textarea-block">
      <label htmlFor={name}>{label}</label> 
      <textarea name={name} id={name} {...rest}/>
    </div>
  )
}
export default Textarea; 