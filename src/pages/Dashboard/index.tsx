import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './style';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer"/>
      <Title>Explore repositório no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" type="text"/>
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img src="https://avatars1.githubusercontent.com/u/61694500?s=460&u=c6dd454cad69770c1ff2079953ff32bf63ceee82&v=4"
          alt="Johnny Saraiva"
          />
          <div>
            <strong>Johnny-Saraiva/go-barber</strong>
            <p>Aplicativo para barbearia utilizando NodeJS, ReactJS e React Native.</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img src="https://avatars1.githubusercontent.com/u/61694500?s=460&u=c6dd454cad69770c1ff2079953ff32bf63ceee82&v=4"
          alt="Johnny Saraiva"
          />
          <div>
            <strong>Johnny-Saraiva/go-barber</strong>
            <p>Aplicativo para barbearia utilizando NodeJS, ReactJS e React Native.</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img src="https://avatars1.githubusercontent.com/u/61694500?s=460&u=c6dd454cad69770c1ff2079953ff32bf63ceee82&v=4"
          alt="Johnny Saraiva"
          />
          <div>
            <strong>Johnny-Saraiva/go-barber</strong>
            <p>Aplicativo para barbearia utilizando NodeJS, ReactJS e React Native.</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  )
}

export default Dashboard;
