import { Link } from "react-router-dom"
import { DivLogoMark, DivLogin, DivSearch, NavBa } from "./Style"

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
      <DivLogin>
        <div>
          <input type="text" id="login" placeholder="Login" />
          <input type="password" id="password" placeholder="Senha" />
        </div>
        <button>Entrar</button>
        <button>Registrar</button>
      </DivLogin>
    </NavBa>
  )
}