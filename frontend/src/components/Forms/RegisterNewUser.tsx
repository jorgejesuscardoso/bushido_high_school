import { Link, useNavigate } from 'react-router-dom'
import { FormBtnDiv, FormContainer } from './style'
import { useState } from 'react'
import { creatNewUser } from '../../services/UsersApi'

export const FormNewUser = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [role, setRole] = useState(6)
  const [createError, setCreateError] = useState('')
  const [createSuccess, setCreateSuccess] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newUserData = {
      username: name,
      password,
      role_id: role,
      email
    }

  const response = await creatNewUser(newUserData)
  console.log(response)
    if (response.status === 400) {
      setCreateError('Erro ao criar usuário! Tente novamente mais tarde!')
    }
    if (response.ok) {
      setCreateSuccess('Usuário criado com sucesso!');
      setLoading(!loading);
      setEmail('');
      setPassword('');
      setName('');
      setRole(6);
      setCreateError('');
    }
    setTimeout(() => {
      navigate('/')
    }, 15000)
  }
  return (
    <FormContainer>
      <form
        onSubmit={(e) => handleSubmit(e) }
      >
      <img src="logoBgdWhite.png" alt="Logo marca Bushido developer" />
      <p><b>Registro para novos usuários</b></p>
      <div>
        <label htmlFor="name">Nome:</label>
        <input
          type="text" 
          id="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setCreateError('');
          }}
          required
        />
      </div>
      <div>
        <label htmlFor="email">E-mail:</label>
        <input 
          type="email" 
          id="email" 
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            setCreateError('');
          }}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Senha:</label>
        <input 
          type="password" 
          id="password" 
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setCreateError('');
          }}
          required          
        />
      </div>
      <div>
        <label htmlFor="role">Tipo de usuário:</label>
        <select 
          name="role" 
          id="role"
          value={role}
          onChange={(e) => {
            setRole(Number(e.target.value));
            setCreateError('');
          }}
          required
        >

          <option value="6">
            Padrão: visitantes, solicitante de matrícula!
          </option>

          <option value="5">
            Aluno: Necessário está mátriculado!
          </option>

          <option value="4">
            Staff: Necessário validação!
          </option>
          <option value="3">
            Professor: Necessário validação!
          </option>
        </select>
      </div>
      <FormBtnDiv>
        <button 
          type="submit" 
          className='submit'
          >
            Registrar
        </button>
        <button 
          type="reset" 
          className='cancel'
          onClick={() => {
            setEmail('')
            setPassword('')
            setName('')
            setRole(6)
          }}
          >
            Cancelar
        </button>
      </FormBtnDiv>

      <span>Já possui uma conta? <Link to='/login'>clique aqui!</Link></span>
     </form>
     { createError && <p className='error'>{ createError }</p> }
     { createSuccess && <p className='success'>{ createSuccess }</p> }
     { loading && <p className='loading'>Carregando... aguarde um momento!</p>}
    </FormContainer>
  )
}