import { MainNews, SectionTable } from './style';

export const NextFeat = () => {
  return (
    <MainNews>
      <h1>Próximas Features</h1>
      <article>
        <SectionTable>
          <table>
            <thead>
              <tr>
                <th>Serviço</th>
                <th>Descrição</th>
                <th>Data</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Perfil de usuário
                </td>
                <td>
                  Perfil do aluno, funcionário e professor.
                </td>
                <td>
                  2024
                </td>
              </tr>
              <tr>
                <td>
                  Serviço de postagem de eventos e notícias
                </td>
                <td>
                  Habilitar fazer postagem diretamente no site. Perfil de funcionário terá capacidade de postar eventos e notícias.
                </td>
                <td>
                  2024
                </td>
              </tr>
              <tr>
                <td>Matrículas Online</td>
                <td>
                  Possibilidade de solicitar matrículas online para novos alunos.
                </td>
                <td>2024.5</td>                
              </tr>
              <tr>
                <td>Dashboard</td>
                <td>Dashboard para alunos, funcionários e professores.</td>
                <td>2024.8</td>
              </tr>
              <tr>
                <td>
                  Chat com a direção e professores
                </td>
                <td>
                  Chat online com a direção e professores.
                </td>
                <td>
                  2025.2
                </td>
              </tr>
            </tbody>
          </table>
        </SectionTable>
      </article>       
    </MainNews>
  )
};