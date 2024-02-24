import { useNavigate } from "react-router-dom";
import { NotFounds } from "./style";

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <NotFounds>
      <h1>404 - Not Found!</h1>
      <button onClick={ () => navigate('/') }>
        Página Inicial
      </button>
    </NotFounds>
  );
}