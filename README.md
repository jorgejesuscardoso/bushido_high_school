# Projeto: Bushido School
Deploy: [Netlify](https://cndev.netlify.app/)
<details>
<summary>

## Visão Geral

</summary>

O Bushido School é uma plataforma educacional projetada para facilitar a comunicação e interação entre alunos, professores e administração de uma escola. A plataforma oferece funcionalidades específicas para cada tipo de usuário, incluindo áreas de login distintas e recursos dedicados para matrículas, eventos, calendário e mais.

Imagine a seguinte situação: você mora em uma região remota, como uma zona rural, e precisa contatar a escola para resolver questões importantes ou se manter atualizado sobre o progresso de seu filho. Porém, devido a condições climáticas adversas, como uma forte chuva, você não consegue comparecer pessoalmente, resultando em perda de tempo e desatualização.

Apesar de existirem aplicativos como o WhatsApp e o Google Sala de Aula, que facilitam a comunicação, realizar matrículas ou acompanhar o desenvolvimento dos alunos pode ser trabalhoso e não oferece um feedback rápido e prático sobre a entrega e recebimento de informações.

No Bushido School, oferecemos uma interface intuitiva e amigável, projetada para facilitar a navegação entre projetos, trabalhos e atividades dos alunos. Você pode enviar e receber documentos de forma segura, assinar boletins, fazer ou cancelar matrículas, entrar em contato com a secretaria da escola, se inscrever em eventos e projetos escolares, tudo isso sem sair de casa. As mensagens enviadas pela direção ficam salvas em seu perfil, permitindo que você as acesse a qualquer momento.

O Bushido School foi criado para simplificar o dia a dia dos pais de alunos, especialmente para aqueles com pouco tempo disponível ou que vivem em regiões remotas, garantindo acesso fácil e rápido a informações importantes sobre a vida escolar de seus filhos.
</details>

## Funcionalidades Principais


### Áreas de Usuários

<details>

<summary>

#### Área do Aluno
</summary>

Permite que os alunos acessem informações pessoais, notas, atividades, calendário escolar e eventos.
Recursos adicionais incluem acesso ao chat interativo com professores e administração, enviou de documentos, acesso e assinaturas de boletins e eventos.

</details>

<details>
<summary>

#### Área do Professor
</summary>
Oferece aos professores recursos para gerenciar notas, atividades e comunicações com os alunos.
Recursos adicionais incluem acesso ao chat interativo com alunos e administração, além do registro de notas no boletim virtual dos alunos.
</details>

<details>
<summary>

#### Área de Administração (Adm)
</summary>
Permite à administração gerenciar matrículas, eventos, notícias, calendário e usuários.
Recursos adicionais incluem registro de novos professores e alunos, acesso ao chat interativo e gerenciamento de informações gerais da escola.
</details>


## Sobre as abas

<details>
<summary>

#### Menu de Notícias
</summary>

- <b>Notícias</b>: Apresenta todas as notícias relevantes para a comunidade escolar. É necessário ter um perfil de adm para gerênciar as publicações.
- <b>Eventos</b>: Informa sobre os eventos atuais e futuros da escola. É necessário ter um perfil de adm para gerênciar as publicações.
- <b>Programações</b>: Apresenta uma lista de futuros eventos e atividades planejadas. É necessário ter um perfil de adm para gerênciar as publicações.
</details>

<details>
<summary>

#### Matrículas
</summary>

- <b>Matrícula</b>: Permite que novos alunos se matriculem na escola. É necessário ter um cadastro no site e estar logado para solicitar uma matrícula.
- <b>Confirmar Matrículas</b>: Permite que os pais dos alunos, confirme a matrículas após a aprovação da administração. 
  - Administração recebe a solicitação de matrícula, faz a pré-matrícula e envia um código(token) para o usuário que o recebe como uma mensagem em seu perfil. Esse código deve ser utilizado em um input na aba <b>Confirmar Matrícula</b>. Tudo dando certo, o usuário recebe uma mensagem dizendo que foi confirmada com sucesso e passa a ter acesso a todos os recursos do perfil para os aluno.
- <b>Documentos</b>: Facilita o envio de documentos necessários para o processo de matrícula. Também é possivel enviar documentos pendentes ou para outras finalidades: permissão para viagem, acampamentos, etc.
</details>

<details>
<summary>

#### Calendário
</summary>
- <b>Calendário</b>: Apresenta um calendário com todas as programações escolares. Passadas e futuras dentro do ano letivo e anteriores.
- <b>Ano Letivo</b>: Informa sobre as atividades e planejamentos para o ano letivo e outras informações das programações pertinentes para um determinado ano letivo, atual, passado ou futuro.
- <b>Avaliações</b>: Lista as datas e tipos de avaliações a serem realizadas por uma turma, seríe ou matéria. Podendo filtrar por todas as opções ao mesmo tempo. Ex: Serie: 3º ano médio, Turma: B, Matéria: Fisica, trará todas as avaliações vindouras e suas datas.
- <b>Eventos</b>: Mostra as datas dos próximos eventos da escola. Em determinado tipo de evento onde é necessário inscrição para participar, é possivél se inscrever se estiver logado como aluno. 
</details>
<details>
<summary>
 
 ### Dados Técnicos
 </summary>

  - [Readme do frontend](https://github.com/jorgejesuscardoso/bushido_school/tree/main/frontend)

  - [Readme do backend](https://github.com/jorgejesuscardoso/bushido_school/tree/main/backend)

 </details>