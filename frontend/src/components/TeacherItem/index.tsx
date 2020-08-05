import React from 'react'
import WhatsappIcon from '../../assets/images/icons/whatsapp.svg'
import "./style.css"

const TeacherItem = () => {
  return (
    <article className="teacher-item">
          <header>
            <img src="https://avatars2.githubusercontent.com/u/50251304?s=460&u=f3ac62e5d926b4c8f2a8bc93e548ea7443ff5dbb&v=4" alt="j-keven"/>
            <div>
              <strong>
                Jhonnas Keven
              </strong>
              <span>
                Física
              </span>
            </div>
          </header>

          <p>
            Entusiasta das melhores tecnologias de química avançada.
              <br/><br/>
            Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
          </p>

          <footer>
            <p>
              Preço/Hora
              <strong>R$ 100,00</strong>
            </p>
            
            <button type="button"> 
              <img src={WhatsappIcon} alt="whatsapp"/>
              Entre em contato
            </button>
          </footer>
        </article>
        
  )
}

export default TeacherItem;