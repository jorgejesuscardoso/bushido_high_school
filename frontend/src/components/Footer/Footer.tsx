import { Link } from "react-router-dom";
import { parceiro1 } from "../../utils/imports";
import { Footers, Parceiros, Copyright } from "./style";

export const Footer = () => {
  return (
    <Footers>
      <div>
        <h1>Links uteis</h1>
        <ul>
          <li>
            <Link to="https://www.instagram.com/jorge.bushido/">
              Instagram
            </Link>
          </li>
          <li>
            <Link to="https://www.facebook.com/tst.jorgecardoso">
              Facebook
            </Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
      <div>
        <h1>Contato</h1>
        <ul>
          <li>Telefone: (73) 9126-6263</li>
          <li>Email:
            <a href="#"> tst.jorgecardoso@gmail.com</a>
          </li>
        </ul>
      </div>
      <div>
        <h1>Endereço</h1>
        <ul>
          <li>Rua: Travessa Ana Delmira</li>
          <li>Bairro: Curral Novo</li>
          <li>Cidade: Jequié - BA</li>
        </ul>
      </div>
      <div>
        <h1>Horário de funcionamento</h1>
        <ul>
          <li>Segunda à sexta: 07:00 às 11:00 e das 13:00 ás 17:00</li>
          <li>Sábado: 08:00 às 12:00</li>
        </ul>
      </div>
      <Parceiros>
        <h1>Nossos Parceiros</h1>
        <div>
          <img src={ parceiro1 } alt="Parceiro 1" />
          <img src={ parceiro1 } alt="Parceiro 2" />
        </div>
      </Parceiros>
      <Copyright>&copy; Todos os direitos reservados. Jorge de Jesus Cardoso, 2024.</Copyright>
    </Footers>
  );
}