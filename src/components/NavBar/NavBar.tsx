import { Link } from "react-router-dom"
import { DivLogoMark, DivSearch, NavBa } from "./Style"

export const NavBar = () => {
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
    </NavBa>
  )
}