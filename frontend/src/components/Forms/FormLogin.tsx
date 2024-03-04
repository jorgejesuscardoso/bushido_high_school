import { useState } from 'react';
import { LoginContainer, News } from './style';
import { Link } from 'react-router-dom';
import { TabelServices } from '../News/TabelServices';
import { loginUser } from '../../services/UsersApi';
import { SetRole, SetToken } from '../../utils/LocalStorage';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [logado, setLogado] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };

    const response = await loginUser(data);

    if (response.message) {
      setError('Email ou senha incorretos!');
      return;
    }
    console.log(response);
    if (response.token) {
      const toStringToken = response.token.token;
      const Role = response.role_id;
      const toStringRole = JSON.stringify(Role);
      SetToken(toStringToken);
      SetRole(toStringRole);
      setLogado(!logado);
      setLoading(!loading);
      setTimeout(() => {
        window.location.href = '/';
      }, 21000);
    }
  };

  return (
    <LoginContainer>
      <News>
        <TabelServices /> 
      </News>
      <form
        onSubmit={handleLogin}
      >
        <img src="logoBgdWhite.png" alt="logomarca do bushido developer - codando o futuro com excelência e segurança!" />
        <h1>Seja bem vindo!</h1>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError('');
          }}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError('');
          }}
          required
        />
      </div>
      <div>
        <button type="submit">Login</button>
      </div>

      <span>
        Não tem uma conta? <Link to="/register">Registre-se</Link>
      </span>
      <span>
        <Link to="/forgotpassword">Esqueceu a senha?</Link>
      </span>
      <span>
        <Link to="/">Voltar</Link>
      </span>
    { logado && <p className='success-login'>Logado com sucesso!</p> }
    { loading && <p className='loading-login'>Redirecionando...</p> }
    { error && <p className='error-login'>{ error }</p> }
    </form>
  </LoginContainer>
  )
};
    