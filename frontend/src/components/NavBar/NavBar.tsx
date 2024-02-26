import { Link } from "react-router-dom"
import { DivLogoMark, DivSearch, LogOut, LoginOrRegister, NavBa } from "./Style"
import { useEffect, useState } from "react";
import { GetUserType } from "../../utils/LocalStorage";

export const NavBar = () => {
  const [scroll, setScroll] = useState(false);
  const userType = GetUserType();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
    return () => {
      window.removeEventListener('scroll', () => {  });
    }
  }, []);
  
  return (
    <NavBa>
      <DivLogoMark>
        <Link to="/">
          <img src='mark.png' alt="" />
        </Link>
      </DivLogoMark>
      <DivSearch>
        <input type="text" id="nav-search" placeholder="Faça uma pesquisa" />
        <button>Pesquisar</button>
      </DivSearch>
      { userType ? (
        <LogOut className={ scroll ? 'loginLink' : '' }>
         <Link to='/'>LogOut</Link>
        </LogOut>
      ) : (
        <LoginOrRegister className={ scroll ? 'loginLink' : '' }>
          <Link to="/login">Login</Link>
          <Link to="/register">Registrar</Link>
        </LoginOrRegister>
      )}
    </NavBa>
  )
}