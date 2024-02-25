import styled from "styled-components";

export const NavBa = styled.nav`
  background-color: var(--nav-background-color);
  position: absolute;
  top: 0;
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;
  height: 6vw;
  font-weight: bolder;
  font-size: 1.3em;
`;
export const DivLogoMark = styled.div`
  position: absolute;
  left: 0;
  display: flex;
  align-items: center;
  width: 24%;
  height: 6vw;
  overflow: hidden;
  a {
    position: absolute;
    width: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;
export const DivSearch = styled.div`
  display: flex;
  align-items: center;
  width: 35%;
  height: 6vw;
  margin-right: 10%;

  input {
    background-color: var( --nav-input-background-color);
    width: 70%;
    height: 40%;
    border-radius: 10px;
    padding: 10px;
    margin-right: 10px;
    color: var(--text-color);

    &:focus {
      background-color: var(--nav-input-focus-color);
      font-size: 0.8em;
    }
    &::placeholder {
      color: var(--placeholder-color);
    }
  }
  button {
    width: 15%;
    height: 40%;
    border-radius: 10px;
    border: none;
    background-color: var(--nav-button-background-color);
    color: var(--button-text-color);
    font-weight: bolder !important;
    font-size: 0.7em;
    cursor: pointer;
    &:hover {
      background-color: var(--nav-button-hover-color);
    }
  }
`;
export const LoginOrRegister = styled.div`
  display: flex;
  justify-content: space-around;
  width: 10%;
  margin-right: 5%;
  gap: 15px;
  color: var(--text-color);
  z-index: 10;

    a {
      text-align: center;
      border: 1px solid var(--login-color);
      border-radius: 10px;
      font-size: 0.8em;
      font-weight: 400;
      padding: 5px;
      width: 50%;
    }
`;
export const LogOut = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4%;
  height: 27px;
  margin-right: 5%;
  gap: 15px;
  color: var(--text-color);
  z-index: 10;
  border: 1px solid var(--logOut-color);
  border-radius: 10px;
  font-size: 0.9em;
  cursor: pointer;
    &:hover {
      background-color: var(--logOut-hover-color);
    }
  a {
    color: var(--text-color);
    font-size: 0.8em;
    font-weight: 400;
  }
`;
export const NavFloats = styled.nav`
  background-color: var(--nav-background-color);
  display: flex;
  align-items: center;
  position: absolute;
  top: 6vw;
  width: 100%;
  height: 2.5vw;

    button {
    width: 15%;
    height: 70%;
    color: var(--text-color);
    font-weight: bolder;
    font-size: 0.9em;
    &:hover {
      border-bottom: 1px solid var( --button-border-color);
    }
  }
`;
export const NewsMenus = styled.div`
  background-color: var(--nav-menu-floating-background-color);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  border-radius: 0 0 5px 5px;

  button {
    text-align: start;
    padding-left: 10px;
    width: 100%;
    height: 25px;
    font-size: 0.8em;
    font-weight: 400;
    border-bottom: 1px solid var(--nav-menu-floating-btn-border-color);
    border-radius: 0;   
    color: var(--text-color);
    transition: 0.2s;
    &:hover {
      background-color: var(--nav-menu-floating-btn-hover-color);
      border-radius: 0 ;
    }
  }
`;
export const MatricMenus = styled.div`
  background-color: var(--nav-menu-floating-background-color);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  border-radius: 0 0 5px 5px;

  button {
    text-align: start;
    padding-left: 10px;
    width: 100%;
    height: 25px;
    font-size: 0.8em;
    font-weight: 400;
    border-bottom: 1px solid var(--nav-menu-floating-btn-border-color);
    border-radius: 0;   
    color: var(--text-color);
    transition: 0.2s;
    &:hover {
      background-color: var(--nav-menu-floating-btn-hover-color);
     border-radius: 0 ;
    }
  }
`;
export const CalendarMenus = styled.div`
  background-color: var(--nav-menu-floating-background-color);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  border-radius: 0 0 5px 5px;

  button {
    text-align: start;
    padding-left: 10px;
    width: 100%;
    height: 25px;
    font-size: 0.8em;
    font-weight: 400;
    border-bottom: 1px solid var(--nav-menu-floating-btn-border-color);
    border-radius: 0;   
    color: var(--text-color);
    transition: 0.2s;
    &:hover {
      background-color: var(--nav-menu-floating-btn-hover-color);
      border-radius: 0 ;
    }
  }
`;
export const ContainerCalendarMenu = styled.div`
  position: absolute;
  top: 2.5vw;
  left: 42.5%;
  width: 13%;  
`;
export const ContainerMatricMenu = styled.div`
  position: absolute;
  top: 2.5vw;
  left: 32%;
  width: 13%;  
`;
export const ContainerNewsMenu = styled.div`
  position: absolute;
  top: 2.5vw;
  left: 21%;
  width: 13%;  
`;