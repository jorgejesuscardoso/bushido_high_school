import styled from 'styled-components';

export const NotFounds = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  h1 {
    font-size: 2em;
    color: var(--text-color);
  }
  button {
    margin-top: 20px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: var(--button-background-color);
    color: var(--text-color);
    font-size: 1em;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      background-color: var(--button-hover-color);
      color: var(--text-color-black);
    }
  }
`;