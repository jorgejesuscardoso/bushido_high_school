import { useNavigate } from "react-router-dom";
import { FloatNavButtonsProps } from "../../types/components";
import { ButtonsFloatNav } from "./style";

export const FloatNavButtons = ({ 
  handleCloseMenus,
  handleNewsMenu,
  handleMatricMenu,
  handleCalendarMenu,
 }: FloatNavButtonsProps) => {
  const navigate = useNavigate();
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
        onClick={ () => navigate('/studentarea') }
      >
        Área do aluno
      </button>
      <button
        onMouseOver={ handleNewsMenu }
        onClick={ () => {
          handleNewsMenu();       
        } }        
      >
        Notícias
      </button>
      <button
        onMouseOver={ handleMatricMenu }
        onClick={ () => {
          handleMatricMenu();       
        } }   
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