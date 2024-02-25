import { useNavigate } from "react-router-dom";
import { FloatNavButtonsProps } from "../../types/components";
import { ButtonsFloatNav } from "./style";

type UserTypes = 'professor' | 'direção' | 'aluno';

export const FloatNavButtons = ({ 
  handleCloseMenus,
  handleNewsMenu,
  handleMatricMenu,
  handleCalendarMenu,
  userType = 'aluno' as UserTypes,
 }: FloatNavButtonsProps) => {
  const navigate = useNavigate(); 

  const userRole = userType === 'direção' ? 'manager' : userType === 'professor' ? 'teacher' : 'student';
  const userArea =  userType === 'direção' ? 'Área da Direção' : userType === 'professor' ? 'Área do Professor' : 'Área do Aluno';

  return (
    <ButtonsFloatNav>
       <button
        onMouseOver={ handleCloseMenus }
        onClick={ () => navigate('/') }
      >
        Home
      </button>
        <button        
        onMouseOver={ handleCloseMenus }
        onClick={ () => navigate(`/${userRole}area`) }
      >
        { userArea }
      </button>
      <button
        onMouseOver={ handleNewsMenu }
      >
        Notícias
      </button>
      <button
        onMouseOver={ handleMatricMenu }
      >
        Matrículas
      </button>
      <button
        onMouseOver={ handleCalendarMenu }
      >
        Calendário
      </button>
      <button        
        onMouseOver={ handleCloseMenus }
        onClick={ () => navigate('/contact')}
      >
        Contato
      </button>
    </ButtonsFloatNav>
  )
};