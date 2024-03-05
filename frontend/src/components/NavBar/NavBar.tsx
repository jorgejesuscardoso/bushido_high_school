import { Link } from "react-router-dom"
import { DivLogoMark, DivSearch, PerfilDiv, NavBa } from "./Style"
import { useEffect, useRef, useState } from "react";
import { useDispatch } from 'react-redux';
import { toggleMenuAction } from '../Redux/action/newPost';

export const NavBar = () => {
  const ref = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const [scroll, setScroll] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

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
  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
    dispatch(toggleMenuAction(!toggleMenu));
  }

  useEffect(() => {
    window.addEventListener('click', (event) => {
      if (!ref.current?.contains(event.target as Node)) {
        setToggleMenu(false);
        dispatch(toggleMenuAction(false));
      }
    });
    return () => {
      window.removeEventListener('click', () => {});
    }
  }, []);
  return (
    <NavBa>
      <DivLogoMark>
        <Link to="/">
          <img src='mark.png' alt="Logo Marca: Bushido School" />
        </Link>
      </DivLogoMark>
      <DivSearch>
        <input type="text" id="nav-search" placeholder="Faça uma pesquisa" />
        <button>Pesquisar</button>
      </DivSearch>
      <PerfilDiv className={ scroll ? 'loginLink' : '' } ref={ ref }>
        <img 
          src="menu_white.png" 
          alt="menu"
          onClick={ () => handleToggleMenu()}
      />
      </PerfilDiv>
    </NavBa>
  )
}