import React from 'react'
import { Link } from 'react-router-dom'

import BackIcon from '../../assets/images/icons/back.svg'
import LogoImg from '../../assets/images/logo.svg'
import "./style.css"

interface PropsType {
  title: string
}

const PageHeader:React.FC<PropsType> = (props) => {
  return (
    <header className="page-header">
        <div className="top-bar-container">
          <Link to="/">
            <img src={BackIcon} alt="go back icon"/>
          </Link>
          <img src={LogoImg} alt="logo page"/>
        </div>

        <div className="header-content">
          <strong>{props.title}</strong>
          {
            props.children
          }
        </div>
        
      </header>
  )
}

export default PageHeader