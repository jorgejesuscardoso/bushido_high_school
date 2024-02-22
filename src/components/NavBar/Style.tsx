import styled from "styled-components";

export const NavBa = styled.nav`
  background-color: #225a47;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;
  height: 5vw;
  font-weight: bolder;
  font-size: 1.3em;
  color: #fff;
  margin-bottom: 10px;
`;
export const DivDrawn = styled.div`
  position: absolute;
  left: 0;
  display: flex;
  align-items: center;
  width: 40%;
  height: 5vw;
  overflow: hidden;
  a {
    position: absolute;
    width: 60%;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;
export const DivSearch = styled.div`
  display: flex;
  align-items: center;
  width: 30%;
  height: 5vw;
  input {
    background-color: #1f3300;
    width: 70%;
    height: 50%;
    border-radius: 10px;
    padding: 10px;
    margin-right: 10px;
    &:focus {
      background-color: #fff;
    }
  }
  button {
    width: 20%;
    height: 50%;
    border-radius: 10px;
    border: none;
    background-color: #fff;
    color: #225a47;
    font-weight: bolder;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      background-color: #9dff00;
      color: #225a47;
    }
  }
`;
export const DivLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 35%;
  height: 5vw;
  button {
    width: 15%;
    height: 50%;
    border-radius: 10px;
    border: none;
    background-color: #fff;
    color: #225a47;
    font-weight: bolder;
    transition: 0.3s;
    margin-right: 20px;
    &:hover {
      background-color: #9dff00;
      color: #225a47;
    }
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 90%;
    gap: 5px;

  input {
    background-color: #1f3300;
    width: 80%;
    height: 40%;
    border-radius: 10px;
    padding: 10px;
    &:focus {
      background-color: #fff;
    }
  }
  }
`;
export const NavFloats = styled.nav`
  background-color: #225a47;
  position: absolute;
  top: 5vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 3vw;
  font-weight: bolder;
  font-size: 1.3em;
  color: #fff;
  margin-bottom: 10px;

    button {
    width: 10%;
    height: 100%;
    border: none;
    background-color: #225a47;
    color: #fff;
    font-weight: bolder;
    transition: 0.3s;
    &:hover {
      background-color: #9dff00;
      color: #225a47;
    }
  }
`;
export const DivIsNews = styled.div`
  position: absolute;
  top: 3vw;
  left: 30.7%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 10%;
  height: 3vw;
  background-color: #1c8560;
  button {
    text-align: center;
    width: 100%;
    height: 45%;
    border: none;
    background-color: #1c8560;
    color: #fff;
    font-weight: bolder;
    transition: 0.2s;
    &:hover {
      background-color: #9dff00;
      color: #225a47;
    }
  }
`;
export const DivIsMatric = styled.div`
  position: absolute;
  top: 3vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 10%;
  height: 5vw;
  background-color: #1c8560;
  button {
    text-align: start;
    padding-left: 10px;
    width: 100%;
    height: 30%;
    border: none;
    background-color: #1c8560;
    color: #fff;
    font-weight: bolder;
    transition: 0.2s;
    &:hover {
      background-color: #9dff00;
      color: #225a47;
    }
  }
`;