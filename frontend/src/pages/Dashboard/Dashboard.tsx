import { useNavigate } from 'react-router-dom'

export const Dashboard = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={ () => navigate('/') }>
        voltar
      </button>
    </div>
  )
}