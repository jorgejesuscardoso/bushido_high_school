import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f4f4f4;
  h1 {
    font-size: 3em;
    color: #225a47;
  }
  p {
    font-size: 1.5em;
    color: #225a47;
  }
  button {
    padding: 10px 20px;
    font-size: 1.5em;
    font-weight: bolder;
    background-color: #225a47;
    color: #fff;
    border: none;
    border-radius: 10px;
    margin-top: 20px;
    cursor: pointer;
  }
`;