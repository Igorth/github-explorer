import React from 'react';

import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="GitHub Explorer" />
      <Title>GitHub Explorer</Title>
      <Form>
        <input placeholder="Enter the name of the repository" />
        <button type="submit">Search</button>
      </Form>
      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/6334925?s=460&u=22ac11f121d145ba9c4cd0f3be6cec2d2e0e2d89&v=4"
            alt="Igor Dias"
          />
          <div>
            <strong>Igorth/githubexplorer</strong>
            <p>GitHub Explorer</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/6334925?s=460&u=22ac11f121d145ba9c4cd0f3be6cec2d2e0e2d89&v=4"
            alt="Igor Dias"
          />
          <div>
            <strong>Igorth/githubexplorer</strong>
            <p>GitHub Explorer</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/6334925?s=460&u=22ac11f121d145ba9c4cd0f3be6cec2d2e0e2d89&v=4"
            alt="Igor Dias"
          />
          <div>
            <strong>Igorth/githubexplorer</strong>
            <p>GitHub Explorer</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
