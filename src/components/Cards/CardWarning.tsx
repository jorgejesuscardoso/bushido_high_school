/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from 'react-router-dom';
import { Main } from './style';

export const CardWarning = ({ props }: any) => {
  const navigate = useNavigate();
  return (
    <Main>
      <h1>{ props }</h1>
      <p>Seja Muito Bem vindo!</p>
      <button
        onClick={ () => navigate('/') }
      >
        Ainda em produção
      </button>
    </Main>
  );
}