import { useEffect, useState } from "react";
import { DivIsMatric, DivIsNews, NavFloats } from "./Style"
import { useNavigate } from "react-router-dom";

export const NavFloat = () => {
  const navigate = useNavigate();
  const [isNews, setIsNews] = useState(false);
  const [isMatric, setIsMatric] = useState(false);

  const handleNews = () => {
    setIsNews(!isNews);
    setIsMatric(false);
  }

  const handleMatric = () => {
    setIsMatric(!isMatric);
    setIsNews(false);
  }
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setIsNews(false);
      setIsMatric(false);
    });
    window.addEventListener('click', (event) => {
      const newsMenu = document.getElementById('newsMenu');
      const matricMenu = document.getElementById('matricMenu');

      if (event.target) {
        if (!newsMenu?.contains(event.target as Node)) {
          setIsNews(false);
        }
      
        if (!matricMenu?.contains(event.target as Node)) {
          setIsMatric(false);
        }
      }
    });
    
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
  },[]);
  return (
    <NavFloats id="navFloats">
      <button
        onMouseOver={ () => {
          setIsNews(false);
          setIsMatric(false);        
        }}
        onClick={ () => navigate('/') }
      >
        Home
      </button>
      <button
        onMouseOver={ () => {
          setIsNews(false);
          setIsMatric(false);        
        }}
        onClick={ () => navigate('/studentarea') }
      >
        Área do aluno
      </button>
      <button
        onMouseOver={ handleNews }
        onClick={ () => {
          handleNews();
          navigate('/news');        
        } }        
      >
        Notícias {'>'}
      </button>
      <button
        onMouseOver={ handleMatric }
        onClick={ () => {
          handleMatric();
          navigate('/matric');        
        } }   
      >
        Matrículas {'>'}
      </button>
      <button
        onMouseOver={ () => {
          setIsNews(false);
          setIsMatric(false);        
        }}
        onClick={ () => navigate('/contact')}
      >
        Contato
      </button>
      <button
        onMouseOver={ () => {
          setIsNews(false);
          setIsMatric(false);        
        }}
        onClick={ () => navigate('/calendar')}
      >
        Calendário
      </button>
      <button
        onMouseOver={ () => {
          setIsNews(false);
          setIsMatric(false);        
        }}
        onClick={ () => navigate('/about')}
      >
        Quem somos
      </button>
      <button
        onMouseOver={ () => {
          setIsNews(false);
          setIsMatric(false);        
        }}
        onClick={ () => navigate('/login')}
      >
        Login
      </button>
      <button
        onMouseOver={ () => {
          setIsNews(false);
          setIsMatric(false);        
        }}
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
    </NavFloats>
  )
}