import { parceiro1 } from "../../utils/imports";
import { Footers, Parceiros, Copyright } from "./style";

export const Footer = () => {
  return (
    <Footers>
      <div>
        <h3>Nossas redes sociais</h3>
        <ul>
          <li>
            <a href="https://www.instagram.com/jorge.bushido/">Instagram</a>
          </li>
          <li>
            <a href="https://www.facebook.com/tst.jorgecardoso">Facebook</a>
          </li>
        </ul>
      </div>
      <div>
        <h3>Contato</h3>
        <ul>
          <li>Telefone: (73) 9126-6263</li>
          <li>Email:
            <a href="#"> tst.jorgecardoso@gmail.com</a>
          </li>
        </ul>
      </div>
      <div>
        <h3>Endereço</h3>
        <ul>
          <li>Rua: Travessa Ana Delmira</li>
          <li>Bairro: Curral Novo</li>
          <li>Cidade: Jequié - BA</li>
        </ul>
      </div>
      <div>
        <h3>Horário de funcionamento</h3>
        <ul>
          <li>Segunda à sexta: 07:00 às 11:00 e das 13:00 ás 17:00</li>
          <li>Sábado: 08:00 às 12:00</li>
        </ul>
      </div>
      <Parceiros>
        <h3>Nossos Parceiros</h3>
        <div>
          <img src={ parceiro1 } alt="Parceiro 1" />
          <img src={ parceiro1 } alt="Parceiro 2" />
        </div>
      </Parceiros>
      <Copyright>&copy; Todos os direitos reservados. Jorge de Jesus Cardoso, 2024.</Copyright>
    </Footers>
  );
}