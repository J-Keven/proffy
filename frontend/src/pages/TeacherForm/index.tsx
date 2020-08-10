import React, { useState, FormEvent } from  'react'
import PageHeader from '../../components/PageHeader'
import { useHistory } from 'react-router-dom'
import WarnningIcon from '../../assets/images/icons/warning.svg'
import Input from '../../components/Input'
import Textarea from '../../components/TextArea'
import "./style.css"
import Select from '../../components/Select'
import api from '../../services/api'

export default function TeacherFomr() {

  const history = useHistory();
  const [name, setName] = useState("")
  const [avatar, setAvatar] = useState("")
  const [whatsapp, setWhatsapp] = useState("")
  const [subject, setSubject] = useState("")
  const [cost, setCost] = useState(0)
  const [bio, setBio] = useState("")

  const [schedule, setSchedule] = useState([{
    week_day: 0, from: '', to: ""
  }])

  
  const addNewScheduleItem = () => {
    setSchedule(
      [
        ...schedule,
        { week_day: 0, from: '', to: "" }
      ]
    )
  }

  const setScheduleItem = (position: number, field: string, value: string | number) => {
    const newArray = schedule.map((item, index) => {
      if(position === index) {
        return {...item, [field]: value}
      }
      return item
    })

    setSchedule([...newArray])
  }

  const handleCreateClasses =  async (e: FormEvent) => {
    e.preventDefault();

    try {
      await api.post('classes', {
        name,
        avatar,
        whatsapp,
        subject,
        cost: Number(cost),
        bio,
        schedule,
      })

      history.push("/");
    } catch (error) {
      alert("Server Error")
    }

  }

  return(
    <div id="page-teacher-form" className="container">
      <PageHeader 
        title="Que incrível que você quer dar aulas."
        description="O Primeiro passo é preencher esse formulário de inscriçaõ."
      />

      <main>
        <form onSubmit={handleCreateClasses}>
          <fieldset>
            <legend>Seus Dados</legend>
            <Input name="name" label="Nome Completo" value={name} onChange={e => { setName(e.target.value)}}/>
            <Input name="avatar" label="Avatar" value={avatar} onChange={e => { setAvatar(e.target.value)}}/>
            <Input name="whatsapp" label="Whatsapp" value={whatsapp} onChange={e => { setWhatsapp(e.target.value)}}/>
          </fieldset>

          <fieldset>
            <legend>Sobre a Aula</legend>
            <Select 
              name="subject" 
              label="Matéria"
              value={subject} 
              onChange={e => { 
                setSubject(e.target.value)
              }} 
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
            <Input name="cost" label="Custo da sua hora por aular" value={cost} onChange={e => { setCost(Number(e.target.value))}}/>
            
            <Textarea label="Biografia" name="bio" value={bio} onChange={e => {setBio(e.target.value)}}/>
          </fieldset>
          <fieldset>
            <legend >
              Horários disponíveis
              <button type="button" onClick={addNewScheduleItem}>
                + Novo Horário
              </button>
            </legend>
          
            {
              schedule.map((item, index) => {
                return (
                  <div key={index} className="schedule-item">
                    <Select 
                      name="week_day" 
                      label="Dia da semana"
                      value={item.week_day}
                      onChange={e => setScheduleItem(index, "week_day", Number(e.target.value))}
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
                      name="from" 
                      label="Das" 
                      value={item.from}
                      onChange={e => setScheduleItem(index, "from", e.target.value)
                    }/>
                    <Input 
                      type="time" 
                      name="to" 
                      label="Até"
                      value={item.to}
                      onChange={e => setScheduleItem(index, "to", e.target.value)
                    }/>
                  </div>
                )
              })
            }
          </fieldset>

          <footer>
            <p>
              <img src={WarnningIcon} alt="Aviso importante"/>

              Importante! <br/>
              Preencha todos os dados!
            </p>
            <button type="submit" onClick={() => {}}>
                Salvar Cadastro
            </button>
          </footer>
        </form>
      </main>
    </div>
  )
}