import { useNavigate } from "react-router-dom";
import { CalendarMenus, MatricMenus, NewsMenus } from "./Style"

export const CalendarMenu = () => {
  const navigate = useNavigate();
  return (
    <CalendarMenus >
      <button
        onClick={ () => navigate('/calendar') }
      >
        Calendário
      </button>
      <button
        onClick={ () => navigate('/year') }
      >
        Ano Letivo
      </button>
      <button
        onClick={ () => navigate('/evaluation') }
      >
        Avalições
      </button>
      <button
        onClick={ () => navigate('/event') }
      >
        Eventos
      </button>
      <button
        onClick={ () => navigate('/programming') }
      >
        Programações
      </button>
    </CalendarMenus>
  )
};

export const MatricMenu = () => {
  const navigate = useNavigate();
  return (
    <MatricMenus >
      <button
        onClick={ () => navigate('/matric') }
      >
        Fazer Matrícula
      </button>
      <button
        onClick={ () => navigate('/confirm') }
      >
        Confirmar Matrícula
      </button>
      <button
        onClick={ () => navigate('/document') }
      >
        Documentos
      </button>
    </MatricMenus>
  )
};

export const NewsMenu = () => {
  const navigate = useNavigate();
  return (
    <NewsMenus >
      <button
        onClick={ () => navigate('/news') }
      >
        Notícias
      </button>
      <button
        onClick={ () => navigate('/event') }
      >
        Eventos
      </button>
      <button
        onClick={ () => navigate('/programming') }
      >
        Programações
      </button>
    </NewsMenus>
  )
};