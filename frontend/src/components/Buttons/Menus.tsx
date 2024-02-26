import { useNavigate } from "react-router-dom";
import { CalendarMenus, MatricMenus, NewsMenus } from "../NavBar/Style"

// Este componente armazena os menus suspensos do componente NavFloat 

export const CalendarMenu = () => {
  const navigate = useNavigate();
  return (
    <CalendarMenus >
      <button
        onClick={ () => navigate('/calendar') } // Navega para a rota /   calendar onde é exibido todos os eventos do calendário escolar
      >
        Calendário
      </button>
      <button
        onClick={ () => navigate('/school_year') }  // Navega para a rota /school_year onde é exibido todas as informações do ano letivo
      >
        Ano Letivo
      </button>
      <button
        onClick={ () => navigate('/evaluation') } // Navega para a rota /evaluation onde é exibido todas as avaliações que o aluno tem. É possível visualizar as notas e faltas e também o boletim. É necessário estar logado para acessar essa rota. Se não estiver logado, é redirecionado para a rota /login. Se acessada por um professor, é exibido as avaliações que ele criou. Se for admin, é exibido todas as avaliações.
      >
        Avalições
      </button>
      <button
        onClick={ () => navigate('/calendar_event') } // Navega para a rota /calendar_event onde é exibido todos os eventos do calendário escolar. Em determinada situação, é possível se inscrever em um evento. É necessário estar logado como aluno para se inscrever em um evento. Se não estiver logado, é redirecionado para a rota /login. Administradores e professores podem criar eventos em seus respectivos perfils.
      >
        Eventos
      </button>
    </CalendarMenus>
  )
};

export const MatricMenu = () => {
  const navigate = useNavigate();
  return (
    <MatricMenus >
      <button
        onClick={ () => navigate('/matriculation') }  // Navega para a rota /matriculation onde é exibido todas as informações sobre a matrícula. É necessário estar logado para solicitar uma matrícula. É possível apenas solicitar uma matrícula. Um admin deve analisar a solicitação e aprovar a matrícula. A matrícula é confirmada em outra rota apos o usuário receber um token enviado por algum admin.
      >
        Fazer Matrícula
      </button>
      <button
        onClick={ () => navigate('/confirm_matric') } // Navega para a rota /confirm_matric onde é exibido todas as informações sobre a matrícula. É possível apenas confirmar a matrícula. Um admin deve analisar a solicitação e aprovar a matrícula. A matrícula é confirmada em outra rota apos o usuário receber um token enviado por algum admin.
      >
        Confirmar Matrícula
      </button>
      <button
        onClick={ () => navigate('/send_document') } // Navega para a rota /send_document onde é possivél enviar documentos para a conclusão da matrícula e outros tipos, como permitir a entrada de um aluno em um evento, viagem, acampamento, etc.
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
        onClick={ () => navigate('/news') } // Navega para a rota /news onde é exibido todas as notícias cadastradas. É possível criar uma notícia se tiver permissão de admin. É necessário estar logado como admin para criar uma notícia. Existe um botão para criar uma notícia na página de gerenciamento de notícias no perfil de admin. Ao clicar no botão, é redirecionado para a rota /create_news, uma página de formulário para criar uma notícia com um editor de texto bem simples.
      >
        Notícias
      </button>
      <button
        onClick={ () => navigate('/event') }  // Navega para a rota /event onde é exibido todos os eventos cadastrados. É possível criar um evento se tiver permissão de admin. Existe um botão para criar um evento na página de gerenciamento de eventos no perfil de admin. Ao clicar no botão, é redirecionado para a rota /create_event, uma página de formulário para criar um evento com um editor de texto bem simples. É possivel se inscrever em um evento se habilitado pelo admin. Um botão é exibido para se inscrever em um evento. Ao clicar no botão, é redirecionado para a rota /subscribe_event, uma página de formulário para se inscrever em um evento.
      >
        Eventos
      </button>
      <button
        onClick={ () => navigate('/programming') }  // Navega para a rota /programming onde é exibido todas as programações cadastradas. É possível criar uma programação se tiver permissão de admin. Existe um botão para criar uma programação na página de gerenciamento de programações no perfil de admin. Ao clicar no botão, é redirecionado para a rota /create_programming, uma página de formulário para criar uma programação com um editor de texto bem simples.
      >
        Programações
      </button>
    </NewsMenus>
  )
};