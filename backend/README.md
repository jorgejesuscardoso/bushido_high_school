# Visão geral
O projeto Bushido School é uma plataforma escolar. Seu objetivo é facilitar o acesso dos alunos e pais à escola, oferecendo funcionalidades como gerenciamento de usuários, acesso a informações sobre eventos, notícias e atividades acadêmicas, além de fornecer uma camada de segurança robusta para proteger dados sensíveis.

## Comandos CLI uteis

##### Na pasta backend.
- `npm run start`: Inicia o server com nodemon.

- `npm run db:start`: Cria um banco de dados com o sequelize e o popula com os dados iniciais.

- `npm run db:reset`: Deve ser usada na pasta backend. Reseta o banco de dados.

##### Na rais do projeto>

- `npm run start:dev`: Inicia o docker-compose (atualmente so está o banco MySQL no compose).
- `npm run stop:dev`: Para o docker-compose.
- `npm run start:all`: Roda todos os comandos anteriores com exceção do `npm run stop:dev` e `npm run db:reset`.


 <details> 
 <Summary> Roles (funções / cargo)</summary>

 
  - <b>Admin - administração:</b> role_id = 1.
  - <b>Manager - gerente (direção, secretária e afins):</b> role_id = 2.
  - <b>Teacher - professor:</b> role_id = 3.
  - <b>Staff - funcionários (que não faz parte da administração ou direção):</b> role_id = 4.
  - <b>Student - estudantes e seus responsáveis:</b> role_id = 5.
  - <b>Default - padrão (visitantes e pessoas cujas roles anteriores não se aplica):</b> role_id = 6.

### Nivéis de permissão

#### Admin
As roles `Admin`tem permissão total no  sistema. Pode ver, criar, modificar e deletar qualquer evento, noticias, programações do calendário, postagens, usuário e dados de usuaŕios e afins. Ele consegue ter acesso a quase todas as informações no banco de dados, salvo aquelas que não é exposta via API. Dados sensiveis e confidénciais de funcionários, alunos e professores cadastrado, ficam totalmente acessivél para as roles `Admin`.

#### Manager
As roles `Mnager` tem poder semi-total no sestima. Elas podem ver, criar, editar e deletar dados, incluindos os dados pessoais, porém ficam limitados a dados de pessoas cadastradas com role `Student`. Dados pessoais de funcionários, qualquer que seja a role, ficam indisponivél para as roles `Manager`. É permitido o acesso somente leitura, de alguns dados de outras roles, e são elas: CNH, endereço, contato, contato de emergencia, matricula, numéro do contrato, plano de saúde, ramal e cartão SUS.

#### Teacher
As roles `Teacher`tem permissões apenas para acessar dados referentes a desempenho dos alunos. Eles podem ver, criar, modificar e deletar dados dos tipos notas nas matérias, faltas, trabalhos feitos e por fazer, atividades diversas (avaliativas ou não). Além disso, esses acessos só é permitido para as matérias e turma na qual ele/ela leciona. Um professor/a não tem permissão para ver ou interagir com dados de outras matérias ou turma.

#### Staff
As roles `Staff` só permissão para fazer gerenciamento de conteúdo do site: criar, ver, modificar e deletar postagens, noticias, eventos e programações.

#### Students
As roles `Students`só tem acesso somente leitura dos seus dados, pessaois, matrécula e desempenho escolar. Além de acesso a area onde é possivél enviar e recebe documentos escolar e renovar ou cancelar matrículas (tanto para evntos: viagens, acampamentos, etc, quanto escolar).

#### Default
As roles `Default` são as roles padrão para visitantes ou usuários cujas as roles anteriores não se aplica. Elas só tem permissão somente leitura das publicações do site e acesso a área de matréculas.
</details>
# Tecnologias utilizadas
## Banco de dados - MySQL
O banco de dados do projeto conta com um sistema ORM para uma consulta segura e prática dos dados nele armazenados. Além disso, dados sensíveis como informações pessoais e senhas são criptografados por meio da ferramenta de hashing prática e eficiente, bcrypt.

Outro fator que contribui significativamente para a segurança do projeto é a adoção do modelo MSC (Model, Service, Controller) e uma registro detalhado dos login de usuários.

Caso aja algum tipo de ataque como o de XSS, será possivel localizar de onde veio, pois apenas usuários devidamente autenticados pode ter acesso aos endpoints das API's.

## ORM Sequelize
O Sequelize é uma biblioteca Node.js amplamente adotada para mapeamento objeto-relacional (ORM - Object-Relational Mapping). Essa ferramenta simplifica a interação entre uma aplicação Node.js e um banco de dados relacional, tornando a manipulação de dados mais intuitiva e eficiente.

Com o Sequelize, é possível definir modelos de dados usando JavaScript, o que corresponde diretamente às tabelas no banco de dados. Isso facilita a implementação das operações CRUD (Create, Read, Update, Delete), pois se baseia em conceitos familiares ao desenvolvedor.

Além disso, o Sequelize oferece suporte a uma variedade de bancos de dados, incluindo MySQL, PostgreSQL, SQLite e MSSQL. Essa flexibilidade permite escolher a tecnologia mais adequada às necessidades do projeto.

Além disso, o Sequelize é complementado pelo Sequelize CLI, uma ferramenta de linha de comando que facilita ainda mais o desenvolvimento e a manutenção de bancos de dados relacionais.

O Sequelize CLI oferece uma variedade de comandos que agilizam tarefas comuns, como a geração automática de modelos, migrações e seeders. Com alguns comandos, é possivel inicializar um projeto Sequelize, criar e gerenciar modelos de dados, realizar migrações de esquema e preencher o banco de dados com dados de teste.

Outra vantagem do Sequelize é sua ampla aceitação na comunidade Node.js e uma documentação abrangente e ativa, garantindo um suporte confiável e uma curva de aprendizado suave para os desenvolvedores.

## Express
O Express.js é um framework web minimalista para Node.js que simplifica o desenvolvimento de aplicativos web e APIs.
O Express segue o paradigma "faça o mínimo, mas faça bem feito", o que o torna fácil de aprender e usar para desenvolvedores de todos os níveis de experiência.

O Express permite que escolhamos e implementemos apenas os recursos necessários para os aplicativos, sem impor estruturas rígidas ou convenções.

O Express possui um vasto ecossistema de middleware, que são funções intermediárias que podem ser adicionadas ao pipeline de requisição para realizar diversas tarefas, como tratamento de erros, autenticação e autorização, entre outras.

### Middlewares json() e cors()
O middleware express.json() é utilizado para fazer o parsing do corpo das requisições HTTP que possuem o formato JSON, ou seja, ele extrai os dados enviados pelo cliente no corpo da requisição e os disponibiliza no objeto req.body para fácil manipulação pelo código do servidor.

O middleware express(cors()) é utilizado para habilitar o CORS (Cross-Origin Resource Sharing) em um aplicativo Express. Isso permite que o servidor responda a solicitações de recursos vindas de diferentes origens do que o próprio servidor, o que é útil em cenários de APIs que precisam ser acessadas por clientes hospedados em domínios diferentes.

Esses dois middlewares são comumente utilizados em aplicações Express para lidar com requisitos comuns, como o envio de dados JSON e a habilitação do CORS, garantindo assim uma maior eficiência e segurança no desenvolvimento de aplicativos web.







# Camadas da Aplicação
### Camada Controller

A camada de controle (Controller) é responsável por verificar o tipo de solicitação que está sendo feita. Em quase todas as requisições, é necessário estar devidamente autenticado, com um token válido e uma 'role' associada, exceto nas seguintes rotas:

- `app.get('/', GetAllPosts)`
- `app.get('/news', GetAllNews)`
- `app.get('/events', GetAllEvents)`
- `app.get('/slides', GetSlideImg)`
- `app.post('/users', CreateNewStudent)`
- `app.post('/matric', RequestNewMatric)`

Se não houver um token válido ou uma role associada na requisição, é enviado um erro com o status HTTP 400 (Bad Request), indicando que os dados não são válidos. Em casos de múltiplas tentativas inválidas de acesso (5 vezes), a conexão é bloqueada por 5 minutos como medida de segurança. Além disso, um e-mail é enviado para o usuário registrado naquele login, alertando sobre as tentativas de acesso inválidas.



### Camada Service
- A camada de serviços (Service) é responsável por lidar com as regras de negócios. Ela verifica se todos os dados são válidos e então os encaminha para a camada Model. Se houver algum dado que não esteja de acordo com os padrões estipulados, um erro é retornado.

  - Exemplo, ao tentar acessar uma rota sem a devida credêncial: 

   - Um aluno, devidamente logado, com seu token e role ativos, tenta acessar um painel que apenas um professor ou alguem com uma role superior ao de `student` pode acessar. Nesse exemplo, ele passará pela rota controller, já que existe um token ativo e uma role válida no corpo da requisição. No entanto, essa rota é destinada a professores ou a uma role superior à de student, como staff, manager ou admin. Quando a requisição chega na camada de serviços (Service) e a verificação da role não atende às regras de serviços, `é necessário ter uma role válida;`  a requisição é recusada e é retornado um erro com status 401 unauthorized e uma mensagem, `Acesso Negado! Você não possui as permissões necessárias para acessar esta funcionalidade.` .
### Camada Model

A camada Model é responsável pela interação com o banco de dados e pela manipulação dos dados da aplicação. Ela representa as entidades do sistema e define suas estruturas, relações e comportamentos.

Cada modelo possui responsabilidades únicas, consultando sua respectiva entidade (tabela do banco de dados). Cada consulta é feita utilizando o ORM do Sequelize, o que facilita muito a implementação do CRUD.

#### A model StudentModel
O Model StudentModel é responsável por interagir com a tabela `students` no banco de dados. Com ele, realizamos todas as operações de CRUD com segurança, desde adicionar um novo aluno até lançar notas e excluí-lo.

A tabela de alunos armazena todos os usuários de alunos. Nenhum aluno tem permissões acima de sua função, que é somente de leitura, exceto para enviar mensagens para a secretária.

Nenhum aluno tem permissão para modificar seus dados cadastrais em seu perfil, com exceção do email, senha e `apelido`. No entanto, a alteração do `apelido` não afeta o nome real do aluno no banco de dados.

Para o registro de um novo `user` estudante no banco de dados, é necessário passar os seguintes dados na rota `app.post('/student', CreateStudent)`:

  - <b>Nome de usuário</b>: Pode ser o que você quizer. É nome que vai aparecer ao entrar em seu perfil, máximo de 20 caracteres.

  - <b>Email</b>: email valido com `@` e `.com`. nao pode terpaço vazio. Máximo de 50 caracteres.

  - <b>Password</b>: A senha deve ser alfanúmerica com letras maiuscula e minuscula e com o minimo de 6 caracteres e com o máximo de 20 caracteres.

Para os dados pessoais (fica na responsabilidade da direção fazer essa inserção), é necessário passar os seguintes dados na rota `app.post('/students/data', CreateStudentData)`.

  - <b>Role id</b>: `role_id`. para aluno e a role id número 5
  .
 - <b>Id de usuário do aluno</b>: pode conseguir o id de usuário passando o paramento `getemail`, na rota `app.get('/student', GetStudentByEmail)`, ficando assim `/users&getemail:"email aqui"`:

 - <b>Nome completo</b>: O Nome completo do aluno.

 - <b>Endereço</b>: Endeço completo, rua, bairro, cidade, 
 estado.

 - <b>Nome do responsável</b>: Se o responsável não reside na mesma residência do aluno, deve informar tambem o endereço do responsável passando o paramento `responsible` no endpoint, ficando assim `/student/data&responsible:"o endereço aqui!"`.

 - <b>Telefone do responsável</b>: O telefone tem que ter o formato por padrão xx-x-xxxx-xxxx.

Apatir daqui todos os documentos são de ambos, aluno e responsável.

 - <b>RG</b>.
 - <b>CPF</b>
 - <b>Cartão de vácina do COVID</b>

#### A TeacherModel
 Model TeacherModel é responsável por interagir com a tabela `teachers` no banco de dados. Com ele, podemos criar um novo usuário para um professor, adicionar uma nova disciplina, modificar a carga horária ou a classe pela qual ele é responsável.

Nessa tabela são listados todos os usuários com permissões e privilégios de professores no sistema. Os professores têm acesso limitado às funcionalidades referentes ao seu cargo, não podendo acessar áreas administrativas ou de gerência. Por exemplo, até o momento, um professor não tem permissão para criar postagens nem gerenciar publicações de notícias ou eventos.

Para registrar um novo `user` para o professor no banco de dados e necessário passar os seguintes dados na rota `app.post('/teacher', CreateTeacher)`:

  - <b>Nome de usuário</b>: Pode ser o que você quizer. É nome que vai aparecer ao entrar em seu perfil, máximo de 20 caracteres.

  - <b>Email</b>: email valido com `@` e `.com`. nao pode terpaço vazio. Máximo de 50 caracteres.

  - <b>Password</b>: A senha deve ser alfanúmerica com letras maiuscula e minuscula e com o minimo de 6 caracteres e com o máximo de 20 caracteres.

  Para os dados pessoais (fica na responsabilidade da direção fazer essa inserção), é necessário utilizar a rota `app.post('/teacher/data', CreateTeacherData)`:

  - <b>Role id</b>: `role_id`. para professor é a role id número 3

 - <b>Id de usuário</b>: Pode ser encontrada passando o email do professor na pesquisa que acessa o endpoint `app.get('/teacher', GetTeacherByEmail)` passando o paramento `getemail`, ficando assim `/teacher&getemail:"email aqui"`.

 - <b>Nome completo</b>: O Nome completo do funcionário.

 - <b>Endereço</b>: Endeço completo, rua, bairro, cidade, estado.

 - <b>Telefone</b>: O telefone tem que ter o formato por padrão xx-x-xxxx-xxxx.

 - <b>RG</b>.
 - <b>CPF</b>
 - <b>CNH</b>: Opicional.
 - <b>Cartão de vácina do COVID</b>
 - <b>Certificação</b>: Diploma ou certificado. Dependendo do cargo.

 Para os dados relacionados ao exercicio da profissão, deve-se passar os dados na rota `app.post('/teacher/data/role', CreateRole)`:

 - <b>id da Role</b>: `role_id`, deve ser um Number. No caso para professor é o id número 3 .

 - <b>carga horária</b>: `workload`, String no fomato, exemplo, `40 horas`.

 - <b>turnos</b>: `shift`, deve ser um array e não pode ser vazio. Exemplo: `["matutino", "verpertino", "noturno"]`.

 - <b>classe</b>: `class`, deve ser um array, com todas as classes onde irá lecionar. Exemplo, Terceiro ano do ensino médio. E se tiver mais de uma turma, a estrutura deve ser igual no enxemplo, um array de String, começando com o valor ordinário da classe. Exemplo: 
 `["9º ano do ensino fundamental", "2º ano do ensino médio", "3º ano do ensino médio", "2º ano do ensino médio"]`.

 - <b>matéria</b>: `subject`, qual matérias ele lecionará. Deve seré um array de string, e não pode ser vazio. Exemplo: `["Matemática"]`.


##### A StaffModel

A StaffModel é responsável por interagir com a tabela `staffs`. Nessa tabela, podemos adicionar todos os outros funcionários que não façam parte do corpo docente oficial ou administrativo, como estagiários, prestadores de serviços, etc.

Essa tabela armazena os usuários das pessoas colaboradoras que possuem privilégios mais limitados do que os professores. No entanto, elas podem ser promovidas e receber privilégios adicionais conforme necessário. Elas podem até mesmo ter sua função elevada para `manager`, obtendo permissões semitotais no sistema, com nível de privilégio inferior apenas ao de admin. Caso de exemplo, durante periodo de matrículas onde a demada é alta e é necessário ter mais funcionários com permissões de manipulação dos cadastrais dos alunos.

Para registrar um novo `user` para uma pessoa colaboradora que não faz parte do corpo docente ou administrativo, é necessário passar os seguintes dados na rota `app.post('/staff', CreateStaff)`:

  - <b>Nome de usuário</b>: Pode ser o que você quizer. É nome que vai aparecer ao entrar em seu perfil, máximo de 20 caracteres.

  - <b>Email</b>: email valido com `@` e `.com`. nao pode terpaço vazio. Máximo de 50 caracteres.

  - <b>Password</b>: A senha deve ser alfanúmerica com letras maiuscula e minuscula e com o minimo de 6 caracteres e com o máximo de 20 caracteres.

  Para os dados pessoais (fica na responsabilidade da direção fazer essa inserção), é necessário utilizar a rota `app.post('/staff/data', CreateStaffData)`:

 - <b>Id de usuário</b>: Pode ser encontrada passando o email da pessoa colaboradora na pesquisa que acessa o endpoint `app.get('/staff', GetStaffByEmail)` passando o paramento `getemail`, ficando assim `/staff&getemail:"email aqui"`.

 - <b>Role id</b>: `role_id`. para funcionários é a role id número 4

 - <b>Nome completo</b>: O Nome completo do funcionário.

 - <b>Endereço</b>: Endeço completo, rua, bairro, cidade, estado.

 - <b>Telefone</b>: O telefone tem que ter o formato por padrão xx-x-xxxx-xxxx.

 - <b>RG</b>.
 - <b>CPF</b>
 - <b>CNH</b>: Opicional.
 - <b>Cartão de vácina do COVID</b>
 - <b>Certificação</b>: Diploma ou certificado. Dependendo do cargo.

 Para os dados relacionados ao exercicio da profissão, deve-se passar os dados na rota `app.post('/staff/data/role', CreateRole)`:

 - <b>id da Role</b>: `role_id`, deve ser um Number. No caso para staff é o id número 4 .

 - <b>carga horária</b>: `workload`, String no fomato, exemplo, `40 horas`.

 - <b>turnos</b>: `shift`, deve ser um array e não pode ser vazio. Exemplo: `["matutino", "verpertino", "noturno"]`.

- <b>Cargo</b>: `role_description`, descreve o cargo da pessoa colaboradora. Deve ser uma string, exemplo. `Estágiario`, `serviços gerais`, `jardineiro`, `merendeira`.

Apartir daqui, é no caso dessa pessoa colaboradora for trabalhar em sala de aula, exemplo, um professor estágiario, instrutor temporário.

 - <b>classe</b>: `class`, deve ser um array, com todas as classes onde irá lecionar. Exemplo, Terceiro ano do ensino médio. E se tiver mais de uma turma, a estrutura deve ser igual no enxemplo, um array de String, começando com o valor ordinário da classe. Exemplo: 
 `["9º ano do ensino fundamental", "2º ano do ensino médio", "3º ano do ensino médio", "2º ano do ensino médio"]`.

 - <b>matéria</b>: `subject`, qual matérias ele lecionará. Deve seré um array de string, e não pode ser vazio. Exemplo: `["Matemática"]`.

##### A ManagerModel

A ManagerModel é responsável por interagir com a tabela `manager`, reservada para os usuários das pessoas colaboradoras com cargo de gerência na escola. Isso inclui secretários, coordenadores, supervisores, entre outros. São responsáveis diretos pelo tratamento com os alunos e seus dados pessoais, lidando com o cadastro, manutenção e atualização desses dados, bem como o tratamento direto com os alunos e responsáveis.

Para registrar um novo `user` para uma pessoa da direção é necessário passar os seguintes dados na rota `app.post('/manager', CreateManager )`:

  - <b>Nome de usuário</b>: Pode ser o que você quizer. É nome que vai aparecer ao entrar em seu perfil, máximo de 20 caracteres.

  - <b>Email</b>: email valido com `@` e `.com`. nao pode terpaço vazio. Máximo de 50 caracteres.

  - <b>Password</b>: A senha deve ser alfanúmerica com letras maiuscula e minuscula e com o minimo de 6 caracteres e com o máximo de 20 caracteres.

  Para os dados pessoais (fica na responsabilidade da direção fazer essa inserção), é necessário utilizar a rota `app.post('/manager/data', CreateManagerData)`:

  - <b>Role id</b>: `role_id`. com permissão de gerenciamento é a role id número 2

 - <b>Id de usuário</b>: Pode ser encontrada passando o email da pessoa colaboradora na pesquisa que acessa o endpoint `app.get('/manager', GetManagerByEmail)` passando o paramento `getemail`, ficando assim `/manager&getemail:"email aqui"`.

 - <b>Nome completo</b>: O Nome completo do funcionário.

 - <b>Endereço</b>: Endeço completo, rua, bairro, cidade, estado.

 - <b>Telefone</b>: O telefone tem que ter o formato por padrão xx-x-xxxx-xxxx.

 - <b>RG</b>.
 - <b>CPF</b>
 - <b>CNH</b>: Opicional.
 - <b>Cartão de vácina do COVID</b>
 - <b>Certificação</b>: Diploma ou certificado. Dependendo do cargo.

 Para os dados relacionados ao exercicio da profissão, deve-se passar os dados na rota `app.post('/manager/data/role', CreateRole)`:

 - <b>id da Role</b>: `role_id`, deve ser um Number. No caso para staff é o id número 4 .

 - <b>carga horária</b>: `workload`, String no fomato, exemplo, `40 horas`.

 - <b>turnos</b>: `shift`, deve ser um array e não pode ser vazio. Exemplo: `["matutino", "verpertino", "noturno"]`.

- <b>Cargo</b>: `role_description`, descreve o cargo da pessoa colaboradora. Deve ser uma string, exemplo. `Secretário/a`, `Supervisor/a`, `Coordenador/a`. `RH`

##### A AdminModel

Esta model é simples, porém é responsável por interagir com a tabela admin, onde são listados todos os usuários com privilégio total no sistema. Exemplos de pessoas para esse cargo incluem diretores, reitores e seus vices.

Para registrar um novo `user` para uma pessoa da direção é necessário passar os seguintes dados na rota `app.post('/admin', CreateAdm)`:

  - <b>Nome de usuário</b>: Pode ser o que você quizer. É nome que vai aparecer ao entrar em seu perfil, máximo de 20 caracteres.

  - <b>Email</b>: email valido com `@` e `.com`. nao pode terpaço vazio. Máximo de 50 caracteres.

  - <b>Password</b>: A senha deve ser alfanúmerica com letras maiuscula e minuscula e com o minimo de 6 caracteres e com o máximo de 20 caracteres.

  Para os dados pessoais (fica na responsabilidade da direção fazer essa inserção), é necessário utilizar a rota `app.post('/admin/data', CreateAdmData)`:

- <b>Role id</b>: `role_id`. com permissão de acesso geral(admin) é a role id número 1

 - <b>Id de usuário</b>: Pode ser encontrada passando o email da pessoa colaboradora na pesquisa que acessa o endpoint `app.get('/admin', GetAdmByEmail)` passando o paramento `getemail`, ficando assim `/admin&getemail:"email aqui"`.

 - <b>Nome completo</b>: O Nome completo do funcionário.

 - <b>Endereço</b>: Endeço completo, rua, bairro, cidade, estado.

 - <b>Telefone</b>: O telefone tem que ter o formato por padrão xx-x-xxxx-xxxx.

 - <b>RG</b>.
 - <b>CPF</b>
 - <b>CNH</b>: Opicional.
 - <b>Cartão de vácina do COVID</b>
 - <b>Certificação</b>: Diploma ou certificado. Dependendo do cargo.

 Para os dados relacionados ao exercicio da profissão, deve-se passar os dados na rota `app.post('/adm/data/role', CreateRole)`:

 - <b>id da Role</b>: `role_id`, deve ser um Number. No caso para staff é o id número 4 .

 - <b>carga horária</b>: `workload`, String no fomato, exemplo, `40 horas`.

 - <b>turnos</b>: `shift`, deve ser um array e não pode ser vazio. Exemplo: `["matutino", "verpertino", "noturno"]`.

- <b>Cargo</b>: `role_description`, descreve o cargo da pessoa colaboradora. Deve ser uma string, exemplo. `Diretor/a`, `Reitor/a`, `Vice diretor/a`. `Vice reitor/a`

## API