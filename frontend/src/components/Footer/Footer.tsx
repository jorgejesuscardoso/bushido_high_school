import { Link } from "react-router-dom";
import { parceiro1 } from "../../utils/imports";
import { Footers, Parceiros, Copyright, DivLinks } from "./style";

export const Footer = () => {
  return (
    <Footers>
      <DivLinks>
        <h1>Links uteis</h1>
        <div>
          <ul>
            <li>
              <img src="ico_insta.png" alt="Instagram" />
              <Link to="https://www.instagram.com/jorge.bushido/" target='_blank' referrerPolicy='no-referrer' >
                Instagram
              </Link>
            </li>
            <li>
              <img src="ico_face.png" alt="Facebook" />
              <Link to="https://www.facebook.com/tst.jorgecardoso" target='_blank' referrerPolicy='no-referrer' >
                Facebook
              </Link>
            </li>
            <li>
              <img src="ico_linkedin.png" alt="Linkedin" />
              <Link to="https://www.linkedin.com/in/jorge-de-jesus-cardoso-0a3b3b1b3/" target='_blank' referrerPolicy='no-referrer' >
                Linkedin
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <img src="ico_github_white.png" alt="GitHub" />
              <Link to="https://github.com/jorgejesuscardoso/Portfolio" target='_blank' referrerPolicy='no-referrer' >GitHub</Link>
            </li>
            <li>
              <img src="ico_yt.png" alt="YouTube" />
              <Link to="https://www.youtube.com/channel/UCMYS6rJegLBYcfWzC0W4OyA" target='_blank' referrerPolicy='no-referrer' >
                YouTube
              </Link>
            </li>
          </ul>
        </div>
      </DivLinks>
      <div>
        <h1>Contato</h1>
        <ul>
          <li>Telefone: (73) 9126-6263</li>
          <li>Email:
            <a href="#"> tst.jorgecardoso@gmail.com</a>
          </li>
            <li>
              <Link to="/about">About</Link>
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