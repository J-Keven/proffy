import React from  'react'

import PageHeader from '../../components/PageHeader'
import "./style.css"
import TeacherItem from '../../components/TeacherItem'

export default function TeacherList() {

  return(
    <div id="page-teacher-list" className="container">
      <PageHeader 
        title="Estes são os proffys disponíveis."
      >
        <form id="search-teacher">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" name="subject" id="subject"/>
          </div>

          <div className="input-block">
            <label htmlFor="week-day">Dia da Semana</label>
            <input type="text" name="week-day" id="week-day"/>
          </div>

          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" name="time" id="time"/>
          </div>
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