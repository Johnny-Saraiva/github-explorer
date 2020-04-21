import React from 'react';

import logoImg from '../../assets/logo.svg';

import { Title, Form } from './style';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer"/>
      <Title>Explore repositório no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" type="text"/>
        <button type="submit">Pesquisar</button>
      </Form>
    </>
  )
}

export default Dashboard;
