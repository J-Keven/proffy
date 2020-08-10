import React from 'react'
import WhatsappIcon from '../../assets/images/icons/whatsapp.svg'
import "./style.css"
import Api from '../../services/api'

interface TeacherPropsType {
  teacher: {
    id: number
    subject: string,
    cost: number,
    name: string,
    avatar: string,
    whatsapp: string,
    bio: string,
  }
}

const TeacherItem: React.FC<TeacherPropsType> = ({teacher}) => {

  const createNewConnection = async () => {
    Api.post('connection', {
      user_id: teacher.id
    })
  }
  return (
    <article className="teacher-item">
          <header>
            <img src={teacher.avatar} alt={teacher.name}/>
            <div>
              <strong>
                {teacher.name}
              </strong>
              <span>
                {teacher.subject}
              </span>
            </div>
          </header>

          <p>
            {teacher.bio}
          </p>

          <footer>
            <p>
              Preço/Hora
              <strong>R$ {teacher.cost}</strong>
            </p>
            
            <a target="_blank" rel="noopener noreferrer" href={`https://wa.me/${teacher.whatsapp}`} onClick={createNewConnection}> 
              <img src={WhatsappIcon} alt="whatsapp"/>
              Entre em contato
            </a>
          </footer>
        </article>
        
  )
}

export default TeacherItem;