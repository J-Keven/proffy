import React, {SelectHTMLAttributes} from 'react'

import "./style.css"


interface SelectPropsType extends SelectHTMLAttributes<HTMLSelectElement>{
  label: string 
  name: string
  options: Array<{
    label: string,
    value: string
  }>
}

const Select: React.FC<SelectPropsType> = ({name, label,options, ...rest}) => {
  return (
    <div className="select-block">
      <label htmlFor={name}>{label}</label> 
      <select name={name} id={name} {...rest}>
        <option value="select">Selecione uma Opção</option>
        {
          options.map(item => {
            return (
            <option key={item.value} value={item.value}>{item.label}</option>
            )
          })
        }
      </select>
    </div>
  )
}
export default Select;  