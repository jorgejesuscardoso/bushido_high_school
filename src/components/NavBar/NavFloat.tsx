import { useEffect, useState } from "react";
import { DivIsMatric, DivIsNews, NavFloats } from "./Style"
import { useNavigate } from "react-router-dom";

export const NavFloat = () => {
  const navigate = useNavigate();
  const [isNews, setIsNews] = useState(false);
  const [isMatric, setIsMatric] = useState(false);
  const [isCalendar, setIsCalendar] = useState(false);

  const handleNewsMenu = () => {
    setIsNews(!isNews);
    setIsMatric(false);
    setIsCalendar(false);
  }

  const handleMatricMenu = () => {
    setIsMatric(!isMatric);
    setIsNews(false);
    setIsCalendar(false);
  }

  const handleCalendarMenu = () => {
    setIsCalendar(!isCalendar);
    setIsMatric(false);
    setIsNews(false);
  }

  const handleCloseMenus = () => {
    setIsCalendar(false);
    setIsMatric(false);
    setIsNews(false);
  }

  useEffect(() => {    
    window.addEventListener('click', (event) => {
      const newsMenu = document.getElementById('newsMenu');
      const matricMenu = document.getElementById('matricMenu');
      const calendarMenu = document.getElementById('calendarMenu');
      const targets = [newsMenu, matricMenu, calendarMenu];
      const mapTargets = targets.map((t) => t?.contains(event.target as Node)); 
     
      if (event.target) {
        if (mapTargets.includes(false)) {
          handleCloseMenus();
        }
      }
    });

    return () => {
      window.removeEventListener('click', () => {});
    }
    
  }, []);
  useEffect(() => {
    const floats = document.getElementById('navFloats');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 5 * window.innerWidth / 100) {
        floats?.classList.add('floatFixed');
      } else {
        floats?.classList.remove('floatFixed');        
      }
    });
    return () => {
      window.removeEventListener('scroll', () => {});
    }
  },[]);
  return (
    <NavFloats id="navFloats">
      
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
          navigate('/news');        
        } }        
      >
        Notícias {'>'}
      </button>
      <button
        onMouseOver={ handleMatricMenu }
        onClick={ () => {
          handleMatricMenu();
          navigate('/matric');        
        } }   
      >
        Matrículas {'>'}
      </button>
      <button
        onMouseOver={ handleCalendarMenu }
        onClick={ () => navigate('/calendar')}
      >
        Calendário {'>'}
      </button>
      <button        
        onMouseOver={ handleCloseMenus }
        onClick={ () => navigate('/contact')}
      >
        Contato
      </button>
      <button
        onMouseOver={ handleCloseMenus }
        onClick={ () => navigate('/login')}
      >
        Login
      </button>
      <button        
        onMouseOver={ handleCloseMenus }
        onClick={ () => navigate('/register')}
      >
       Registrar
      </button>

      {isNews && (
        <DivIsNews id="newsMenu">
          <button>Notícias</button>
          <button>Eventos</button>
          <button>Programações</button>
        </DivIsNews>
      )}

      {isMatric && (
        <DivIsMatric id="matricMenu">
          <button>Fazer Matrícula</button>
          <button>Confirmar Matrícula</button>
          <button>Documentos</button>
        </DivIsMatric>
      )}
      {isCalendar && (
        <DivIsMatric id="calendarMenu">
          <button>Calendário</button>
          <button>Ano Letivo</button>
          <button>Avalições</button>
          <button>Eventos</button>
          <button>Programações</button>
          </DivIsMatric>
      )}
    </NavFloats>
  )
}