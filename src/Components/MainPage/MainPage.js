import React from 'react'
import { MainContainer, Form, Input } from './styles'

function MainPage() {
 
  return (
    <MainContainer>
      <h2>Cadastro de novo curso</h2>

      <Form onSubmit="">
        <label for="nome">Nome do Curso:</label>
        <Input 
          id="nome"
        />

        <label for="modulos">Número de Módulos: </label>
        <Input 
          id="modulos"
        />

        <label for="tecnologias">Tecnologias abordadas: </label>
        <Input 
          id="tecnologias"
        />
        
        <label for="responsavel">Responsável: </label>
        <Input 
          id="responsavel"
        />
      <button type="submit">Criar curso</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage