import { Link } from "react-router-dom"
import { DivDrawn, DivLogin, DivSearch, NavBa } from "./Style"

export const NavBar = () => {
  return (
    <NavBa>
      <DivDrawn><Link to="/"><img src="logo4.png" alt="" /></Link></DivDrawn>
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