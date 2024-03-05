import { Link } from 'react-router-dom'
import { MenuDiv } from './Style'
import { GetUserInfoOfStorage, RemoveUserInfoOfStorage } from '../../utils/LocalStorage'

export const Menu = () => {
  const userInfo = GetUserInfoOfStorage()
  const isLogged = userInfo.role_id ? true : false

  const handleLogout = () => {
    RemoveUserInfoOfStorage()
    window.location.reload()
  }

  return (
    <MenuDiv>
      <ul>
        <li>
          <Link 
            to={ isLogged ? '/profile' : '/login' }>
              { isLogged ? 'Perfil' : 'Login' }
          </Link>
        </li>
        <li>
          <Link 
            to={ isLogged ? '#' : '/register' }
            onClick={ isLogged ? handleLogout : () => {} }
          >
            { isLogged ? 'Sair' : 'Registrar'}
          </Link>
        </li>
        <li>
          <Link to="/courses">Cursos</Link>
        </li>
        <li>
          <Link to="/settings">Configurações</Link>
        </li>
        <li>
          <Link to="/about">Sobre</Link>
        </li>
      </ul>
    </MenuDiv>
  )
}