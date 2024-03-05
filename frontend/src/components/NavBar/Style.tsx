import styled from "styled-components";

export const NavBa = styled.nav`
  background-color: var(--nav-background-color);
  position: absolute;
  top: 0;
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;
  height: 7vw;
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
  height: 70%;
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
    font-size: 0.7em;
    font-weight: 600;
    cursor: pointer;
    &:hover {
      background-color: var(--nav-button-hover-color);
    }
  }

  @media (max-width: 968px) {
    height: 7vw;

    button {
      width: 17%;
      font-size: 0.5em;
      font-weight: 600;
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

    @media (max-width: 968px) {
      width: 12%;
      a {
        font-size: 0.5em;
      }
    }
`;
export const PerfilDiv = styled.div`
 img {   
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;
    margin-right: 2vw;
    margin-left: 10vw;
  }
`;
export const NavFloats = styled.nav`
  background-color: var(--nav-background-color);
  display: flex;
  align-items: center;
  position: absolute;
  top: 6vw;
  width: 100%;
  height: 3vw;

    button {
    width: 15%;
    height: 75%;
    color: var(--text-color);
    font-weight: bolder;
    font-size: 0.9em;
    padding: 12px;
    &:hover {
      border-bottom: 1px solid var( --button-border-color);
      color: var(--text-color-2);
    }
  }


  @media (max-width: 968px) {
    button {
      font-size: 0.7em;
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
    display: flex;
    align-items: center;
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

  @media (max-width: 968px) {
    button {
      font-size: 0.7em;
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
    display: flex;
    align-items: center;
    text-align: start;
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

  @media (max-width: 968px) {
    button {
      font-size: 0.7em;
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
    display: flex;
    align-items: center;
    text-align: start;
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


  @media (max-width: 968px) {
    button {
      font-size: 0.7em;
    } 
  }
`;
export const ContainerCalendarMenu = styled.div`
  position: absolute;
  top: 2.5vw;
  left: 43%;
  width: 14%;  
`;
export const ContainerMatricMenu = styled.div`
  position: absolute;
  top: 2.5vw;
  left: 32%;
  width: 14%;  
`;
export const ContainerNewsMenu = styled.div`
  position: absolute;
  top: 2.5vw;
  left: 22%;
  width: 14%;  
`;
export const MenuDiv = styled.div`
  position: fixed;
  top: 9vw;
  background-color: var(--nav-menu-floating-background-color);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30%;
  border-radius: 0 0 5px 5px;
  transition: all 0.5s;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 35px;
    font-size: 0.7em;
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