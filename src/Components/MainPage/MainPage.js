import React from 'react'
import {useForm} from "../../Hooks/useForms"
import { MainContainer, Form, Input } from './styles'

function MainPage() {

  const [form, onChangeForm] = useForm({nome: "", modulos: "", tecnologias: "", responsavel: ""})

  const handleClick = (event) => {
    event.preventDefault()
  console.log(form)
   console.log(`nome: ${form.nome}, modulos: ${form.modulos}, tecnologias: ${form.tecnologias}, responsavel: ${form.responsavel} `)
  }
 
  return (
    <MainContainer>
      <h2>Cadastro de novo curso</h2>

      <Form onSubmit={handleClick}>
        <label htmlFor="nome">Nome do Curso:</label>
        <Input 
          id="nome"
          name="nome"
          value={form.nome}
          onChange={onChangeForm}
        />

        <label htmlFor="modulos">Número de Módulos: </label>
        <Input 
          type="number"
          pattern="[0-9]{5,}"
          id="modulos"
          name="modulos"
          value={form.modulos}
          onChange={onChangeForm}
        />

        <label htmlFor="tecnologias">Tecnologias abordadas: </label>
        <Input 
          id="tecnologias"
          name="tecnologias"
          value={form.tecnologias}
          onChange={onChangeForm}
        />
        
        <label htmlFor="responsavel">Responsável: </label>
        <Input 
          pattern="[A-Za-z]{5,}"
          id="responsavel"
          name="responsavel"
          value={form.responsavel}
          onChange={onChangeForm}
        />
      <button type="submit">Criar curso</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage