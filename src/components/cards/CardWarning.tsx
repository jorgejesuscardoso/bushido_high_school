/* eslint-disable @typescript-eslint/no-explicit-any */
import { Main } from './style';

export const CardWarning = ({ props }: any) => {
  return (
    <Main>
      <h1>{ props }</h1>
      <p>Bem vindo ao nosso website</p>
      <button>Ainda em produção</button>
    </Main>
  );
}