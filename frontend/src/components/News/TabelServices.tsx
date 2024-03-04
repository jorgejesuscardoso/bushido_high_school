import { MainNews, SectionTable } from './style';

export const TabelServices = () => {
  return (
    <MainNews>
        <h1>Projeto Bushido High School</h1>
        <article>
          <h2>Preços e Serviços</h2>
          <SectionTable>
            <table>
              <thead>
                <tr>
                  <th>Serviço</th>
                  <th>Descrição</th>
                  <th>Preço</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Desenvolvimento Web</td>
                  <td>Desenvolvimento de websites responsivos e modernos utilizando as tecnologias mais recentes e o melhor que o React tem a oferecer.</td>
                  <td>A tratar</td>
                </tr>
                <tr>
                  <td>Aulas de Programação Full Stack</td>
                  <td>Aulas particulares ou em grupo, focadas em suas necessidades específicas de aprendizado.</td>
                  <td>R$ 120/semana</td>
                </tr>
                <tr>
                  <td>
                    Consultoria em TI
                  </td>
                  <td>
                    Segurança e desenvolvimento de software.
                  </td>
                  <td>
                    R$ 120/hora
                  </td>
                </tr>
                <tr>
                  <td>
                    Aulas de JavaScript
                  </td>
                  <td>
                    Aprenda a linguagem de programação mais popular e versátil do mundo.
                  </td>
                  <td>
                    R$ 100/semana
                  </td>
                </tr>
                <tr>
                  <td>
                    Aulas de TypeScript
                  </td>
                  <td>
                    Aprenda uma das linguagem de programação mais completa e utilizada em backend do mundo. Principios SOLID, POO, TDD, Clean Code, etc.
                  </td>
                  <td>
                    R$ 150/semana
                  </td>
                </tr>
                <tr>
                  <td>
                    Aulas de Python
                  </td>
                  <td>
                     Amada por muitos, odiada por ninguém. Python é uma linguagem de programação de alto nível, muito conceituada, imperativa, orientada a objetos, funcional, tipagem dinâmica e com uma curva de aprendizado muito baixa.
                  </td>
                  <td>
                    R$ 175/semana
                  </td>
                </tr>
                <tr>
                  <td>
                    Aulas de React 
                  </td>
                  <td>
                    Concerteza a biblioteca de desenvolvimento web mais popular que existe. Se você deseja aprender a desenvolver aplicações web modernas e escaláveis, então tem que aprender a utilizar React. Este portal, por exemplo, foi desenvolvido inteiramente com React.
                  </td>
                  <td>
                    R$ 120/semana
                  </td>
                </tr>
              </tbody>
            </table>
          </SectionTable>
        </article>   
        <footer>
          <span>&copy; Projeto desenvolvido por Jorge de Jesus cardoso - Bushido Developer, 2024</span>
        </footer>     
      </MainNews>
  )
};