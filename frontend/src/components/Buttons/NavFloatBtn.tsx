import { useNavigate } from "react-router-dom";
import { FloatNavButtonsProps } from "../../types/types";
import { ButtonsFloatNav } from "./style";

type UserTypes = 1 | 2 | 3 | 4 | 5 | 6;

export const FloatNavButtons = ({ 
  handleCloseMenus,
  handleNewsMenu,
  handleMatricMenu,
  handleCalendarMenu,
  roler_id,
 }: FloatNavButtonsProps) => {
  const navigate = useNavigate(); 

  const userRole = {
    1: 'Área Administrativa',
    2: 'Área da Direção',
    3: 'Área do Professor',
    4: 'Área da Staff',
    5: 'Área do Aluno',
    6: 'Área de Visitantes',
  }

  const userArea =  userRole[roler_id as UserTypes];

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
        onClick={ () => navigate(`/${userRole[roler_id as UserTypes]}`) }
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