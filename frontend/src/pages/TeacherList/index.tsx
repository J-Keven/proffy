import React, { useState, FormEvent } from  'react'

import Api from '../../services/api'
import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'
import Input from '../../components/Input'
import "./style.css"
import Select from '../../components/Select'

export default function TeacherList() {

  const [teachers,setTeachers] = useState([])
  const [subject, setSubject] = useState("");
  const [week_day, setWeekDay] = useState(0);
  const [time, setTime] = useState("");

  const handlesearchClasses = async (e: FormEvent) => {
    e.preventDefault();

    const { data } = await Api.get(`classes?subject=${subject}&time=${time}&week_day=${week_day}`)

    setTeachers(data)
  }

  return(
    <div id="page-teacher-list" className="container">
      <PageHeader 
        title="Estes são os proffys disponíveis."
      >
        <form id="search-teacher" onSubmit={handlesearchClasses}>
          <Select 
            name="subject" 
            label="Matéria" 
            value={subject}
            onChange={e => { setSubject(e.target.value)}}
            options={
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
          <Select 
          name="week_day" 
          label="Dia da semana"
          value={week_day}
          onChange={e => { setWeekDay(Number(e.target.value))}}
          options={
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
          <Input 
            type="time" 
            name="time" 
            label="Horário"
            value={time}
            onChange={e => { setTime(e.target.value)}}
          />
          <button type="submit">
            Buscar
          </button>
        </form>
      </PageHeader>
      
      <main>
        {
          teachers.map((item, index) => {
            return (
              <TeacherItem 
                key={index}
                teacher={item}
              />
            )
          })
        }
      </main>
    </div>

  )
}