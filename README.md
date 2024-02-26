# Projeto: Bushido School
## Visão Geral

O Bushido School é uma plataforma educacional projetada para facilitar a comunicação e interação entre alunos, professores e administração de uma escola. A plataforma oferece funcionalidades específicas para cada tipo de usuário, incluindo áreas de login distintas e recursos dedicados para matrículas, eventos, calendário e mais.
## Funcionalidades Principais
### Áreas de Usuários

#### Área do Aluno
Permite que os alunos acessem informações pessoais, notas, atividades, calendário escolar e eventos.
Recursos adicionais incluem acesso ao chat interativo com professores e administração, enviou de documentos, acesso e assinaturas de boletins e eventos.

#### Área do Professor
Oferece aos professores recursos para gerenciar notas, atividades e comunicações com os alunos.
Recursos adicionais incluem acesso ao chat interativo com alunos e administração, além do registro de notas no boletim virtual dos alunos.

#### Área de Administração (Adm)
Permite à administração gerenciar matrículas, eventos, notícias, calendário e usuários.
Recursos adicionais incluem registro de novos professores e alunos, acesso ao chat interativo e gerenciamento de informações gerais da escola.
## Sobre as abas
#### Menu de Notícias

- <b>Notícias</b>: Apresenta todas as notícias relevantes para a comunidade escolar. É necessário ter um perfil de adm para gerênciar as publicações.
- <b>Eventos</b>: Informa sobre os eventos atuais e futuros da escola. É necessário ter um perfil de adm para gerênciar as publicações.
- <b>Programações</b>: Apresenta uma lista de futuros eventos e atividades planejadas. É necessário ter um perfil de adm para gerênciar as publicações.

#### Matrículas

- <b>Matrícula</b>: Permite que novos alunos se matriculem na escola. É necessário ter um cadastro no site e estar logado para solicitar uma matrícula.
- <b>Confirmar Matrículas</b>: Permite que os pais dos alunos, confirme a matrículas após a aprovação da administração. 
  - Administração recebe a solicitação de matrícula, faz a pré-matrícula e envia um código(token) para o usuário que o recebe como uma mensagem em seu perfil. Esse código deve ser utilizado em um input na aba <b>Confirmar Matrícula</b>. Tudo dando certo, o usuário recebe uma mensagem dizendo que foi confirmada com sucesso e passa a ter acesso a todos os recursos do perfil para os aluno.
- <b>Documentos</b>: Facilita o envio de documentos necessários para o processo de matrícula. Também é possivel enviar documentos pendentes ou para outras finalidades: permissão para viagem, acampamentos, etc.

#### Calendário

- <b>Calendário</b>: Apresenta um calendário com todas as programações escolares. Passadas e futuras dentro do ano letivo e anteriores.
- <b>Ano Letivo</b>: Informa sobre as atividades e planejamentos para o ano letivo e outras informações das programações pertinentes para um determinado ano letivo, atual, passado ou futuro.
- <b>Avaliações</b>: Lista as datas e tipos de avaliações a serem realizadas por uma turma, seríe ou matéria. Podendo filtrar por todas as opções ao mesmo tempo. Ex: Serie: 3º ano médio, Turma: B, Matéria: Fisica, trará todas as avaliações vindouras e suas datas.
- <b>Eventos</b>: Mostra as datas dos próximos eventos da escola. Em determinado tipo de evento onde é necessário inscrição para participar, é possivél se inscrever se estiver logado como aluno. 

## Próximas Features

- <b>Chat</b>: Implementação de um chat interativo entre alunos, professores e administração. Facilitando a comunicação e resolução de pendências.
- <b>Mural de Notas</b>: Exibição das notas dos alunos em seus respectivos perfis.
- <b>Mural de Atividades</b>: Lista as atividades realizadas pelos alunos e informa sobre as atividades e avaliações pendentes.
- <b>Mural de Faltas e Observações</b>: Registro das faltas e observações relevantes.
