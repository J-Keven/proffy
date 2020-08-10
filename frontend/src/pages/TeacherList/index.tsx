import React, { useState } from  'react'

import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'
import Input from '../../components/Input'
import "./style.css"
import Select from '../../components/Select'

interface TeacherProps {
  id: number
  subject: string,
  cost: number,
  name: string,
  avatar: string,
  whatsapp: string,
  bio: string,
  
}
export default function TeacherList() {

  const [teacher,setTeacher] = useState<TeacherProps[]>()

  return(
    <div id="page-teacher-list" className="container">
      <PageHeader 
        title="Estes são os proffys disponíveis."
      >
        <form id="search-teacher">
          <Select name="subject" label="Matéria" options={
            [
              {value: "Artes", label: "Artes"},
              {value: "Português", label: "Português"},
              {value: "Matemática", label: "Matemática"},
              {value: "Química", label: "Química"},
              {value: "Física", label: "Física"},
              {value: "História", label: "História"},
              {value: "Biologia", label: "Biologia"},
              {value: "Geografia", label: "Geografia"},
            ]
          }/>
          <Select name="week_day" label="Dia da semana"options={
            [
              {value: "0", label: "Domingo"},
              {value: "1", label: "Segunda-feira"},
              {value: "2", label: "Terça-feira"},
              {value: "3", label: "Quarta-feira"},
              {value: "4", label: "Quinta-feira"},
              {value: "5", label: "Sexta-feira"},
              {value: "6", label: "Sábado"},
            ]
          }/>
          <Input type="time" name="time" label="Horário"/>
          
        </form>
      </PageHeader>
      
      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>

  )
}