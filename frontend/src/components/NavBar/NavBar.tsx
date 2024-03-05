import { Link } from "react-router-dom"
import { DivLogoMark, DivSearch, PerfilDiv, NavBa } from "./Style"
import { useEffect, useRef, useState } from "react";
import { Menu } from './Menu';

export const NavBar = () => {
  
  const ref = useRef<HTMLDivElement>(null);
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

  const handleCloseMenus = (event: React.MouseEvent | MouseEvent) => {
    if (!ref.current?.contains(event.target as Node)) {
      setToggleMenu(false);
    }
  }

  useEffect(() => {
    window.addEventListener('click', (event) => { handleCloseMenus(event) });
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
      <PerfilDiv className={ scroll ? 'loginLink' : '' }>
        <img 
          src="menu_white.png" 
          alt="menu"
          onClick={ () => setToggleMenu(!toggleMenu) }
      />
      </PerfilDiv>
      <Menu />
    </NavBa>
  )
}