# Visão geral
O projeto Bushido School é uma plataforma escolar. Seu objetivo é facilitar o acesso dos alunos e pais à escola, oferecendo funcionalidades como gerenciamento de usuários, acesso a informações sobre eventos, notícias e atividades acadêmicas, além de fornecer uma camada de segurança robusta para proteger dados sensíveis.

## Comandos CLI uteis
<details> 
 <Summary> Comandos CLI e onde execultar</summary>

##### Na pasta backend.
- `npm run start`: Inicia o server com nodemon.

- `npm run db:start`: Cria um banco de dados com o sequelize e o popula com os dados iniciais.

- `npm run db:reset`: Deve ser usada na pasta backend. Reseta o banco de dados.

##### Na rais do projeto>

- `npm run start:dev`: Inicia o docker-compose (atualmente so está o banco MySQL no compose).
- `npm run stop:dev`: Para o docker-compose.
- `npm run start:all`: Roda todos os comandos anteriores com exceção do `npm run stop:dev` e `npm run db:reset`.
</details>

 ## Roles

 <details> 
 <Summary>Role ID - funções, cargo e permissões</summary>

  - <b>Admin - administração:</b>.
  - <b>Manager - gerente (direção, secretária e afins):</b> role_id = 2.
  - <b>Teacher - professor:</b>.
  - <b>Staff - funcionários (que não faz parte da administração ou direção):</b>.
  - <b>Student - estudantes e seus responsáveis:</b> role_id = 5.
  - <b>Default - padrão (visitantes e pessoas cujas roles anteriores não se aplica):</b>.

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


<details>
<summary> Banco de dados MySQL</summary>

## Banco de dados - MySQL
O banco de dados do projeto conta com um sistema ORM para uma consulta segura e prática dos dados nele armazenados. Além disso, dados sensíveis como informações pessoais e senhas são criptografados por meio da ferramenta de hashing prática e eficiente, bcrypt.

Outro fator que contribui significativamente para a segurança do projeto é a adoção do modelo MSC (Model, Service, Controller) e uma registro detalhado dos login de usuários.

Caso aja algum tipo de ataque como o de XSS, será possivel localizar de onde veio, pois apenas usuários devidamente autenticados pode ter acesso aos endpoints das API's.
</details>

<details>
<summary>ORM Sequelize</summary>

## ORM Sequelize
O Sequelize é uma biblioteca Node.js amplamente adotada para mapeamento objeto-relacional (ORM - Object-Relational Mapping). Essa ferramenta simplifica a interação entre uma aplicação Node.js e um banco de dados relacional, tornando a manipulação de dados mais intuitiva e eficiente.

Com o Sequelize, é possível definir modelos de dados usando JavaScript, o que corresponde diretamente às tabelas no banco de dados. Isso facilita a implementação das operações CRUD (Create, Read, Update, Delete), pois se baseia em conceitos familiares ao desenvolvedor.

Além disso, o Sequelize oferece suporte a uma variedade de bancos de dados, incluindo MySQL, PostgreSQL, SQLite e MSSQL. Essa flexibilidade permite escolher a tecnologia mais adequada às necessidades do projeto.

Além disso, o Sequelize é complementado pelo Sequelize CLI, uma ferramenta de linha de comando que facilita ainda mais o desenvolvimento e a manutenção de bancos de dados relacionais.

O Sequelize CLI oferece uma variedade de comandos que agilizam tarefas comuns, como a geração automática de modelos, migrações e seeders. Com alguns comandos, é possivel inicializar um projeto Sequelize, criar e gerenciar modelos de dados, realizar migrações de esquema e preencher o banco de dados com dados de teste.

Outra vantagem do Sequelize é sua ampla aceitação na comunidade Node.js e uma documentação abrangente e ativa, garantindo um suporte confiável e uma curva de aprendizado suave para os desenvolvedores.
</details>

<details>
<summary>Express.Js</summary>

## Express
O Express.js é um framework web minimalista para Node.js que simplifica o desenvolvimento de aplicativos web e APIs.
O Express segue o paradigma "faça o mínimo, mas faça bem feito", o que o torna fácil de aprender e usar para desenvolvedores de todos os níveis de experiência.

O Express permite que escolhamos e implementemos apenas os recursos necessários para os aplicativos, sem impor estruturas rígidas ou convenções.

O Express possui um vasto ecossistema de middleware, que são funções intermediárias que podem ser adicionadas ao pipeline de requisição para realizar diversas tarefas, como tratamento de erros, autenticação e autorização, entre outras.

### Middlewares json() e cors()
O middleware `express.json()` é utilizado para fazer o parsing do corpo das requisições HTTP que possuem o formato JSON, ou seja, ele extrai os dados enviados pelo cliente no corpo da requisição e os disponibiliza no objeto req.body para fácil manipulação pelo código do servidor.

O middleware `express(cors())` é utilizado para habilitar o CORS (Cross-Origin Resource Sharing) em um aplicativo Express. Isso permite que o servidor responda a solicitações de recursos vindas de diferentes origens do que o próprio servidor, o que é útil em cenários de APIs que precisam ser acessadas por clientes hospedados em domínios diferentes.

Esses dois middlewares são comumente utilizados em aplicações Express para lidar com requisitos comuns, como o envio de dados JSON e a habilitação do CORS, garantindo assim uma maior eficiência e segurança no desenvolvimento de aplicativos web.
</details>




# Camadas da Aplicação
<details>
<summary>Controller</summary>

A camada de controle (Controller) é responsável por verificar o tipo de solicitação que está sendo feita. Em quase todas as requisições, é necessário estar devidamente autenticado, com um token válido e uma 'role' associada, exceto nas seguintes rotas:

- `app.get('/', GetAllPosts)`
- `app.get('/news', GetAllNews)`
- `app.get('/events', GetAllEvents)`
- `app.get('/slides', GetSlideImg)`
- `app.post('/users', CreateNewStudent)`
- `app.post('/matric', RequestNewMatric)`

Se não houver um token válido ou uma role associada na requisição, é enviado um erro com o status HTTP 400 (Bad Request), indicando que os dados não são válidos. Em casos de múltiplas tentativas inválidas de acesso (5 vezes), a conexão é bloqueada por 5 minutos como medida de segurança. Além disso, um e-mail é enviado para o usuário registrado naquele login, alertando sobre as tentativas de acesso inválidas.
</details>

<details>
<summary>Service</summary>

A camada de serviços (Service) é responsável por lidar com as regras de negócios. Ela verifica se todos os dados são válidos e então os encaminha para a camada Model. Se houver algum dado que não esteja de acordo com os padrões estipulados, um erro é retornado.

  - Exemplo, ao tentar acessar uma rota sem a devida credêncial: 

   - Um aluno, devidamente logado, com seu token e role ativos, tenta acessar um painel que apenas um professor ou alguem com uma role superior ao de `student` pode acessar. Nesse exemplo, ele passará pela rota controller, já que existe um token ativo e uma role válida no corpo da requisição. No entanto, essa rota é destinada a professores ou a uma role superior à de student, como staff, manager ou admin. Quando a requisição chega na camada de serviços (Service) e a verificação da role não atende às regras de serviços, `é necessário ter uma role válida;`  a requisição é recusada e é retornado um erro com status 401 unauthorized e uma mensagem, `Acesso Negado! Você não possui as permissões necessárias para acessar esta funcionalidade.` .

   </details>

<details>
<summary>Model</summary>

A camada Model é responsável pela interação com o banco de dados e pela manipulação dos dados da aplicação. Ela representa as entidades do sistema e define suas estruturas, relações e comportamentos.

Cada modelo possui responsabilidades únicas, consultando sua respectiva entidade (tabela do banco de dados). Cada consulta é feita utilizando o ORM do Sequelize, o que facilita muito a implementação do CRUD.

<details>
<summary>Users</summary>

O model `Users` é o responsável por interagir a tabela `Users` no banco de dados. Com ela é possivel fazer o CRUD de cada usuários registrado.

Para poder registrar um novo usuário no banco de dados, é necessário os seguintes dados.

  - username: O nome de usuário será utilizado para fazer login no sistema.

  - email: Seŕa utilizando tanto para efetuar login como também para possiveis envio de emails e recuperação de senha. 

  - password: A senha deve ser composta por: letra maiuscula, minuscula, números e caractere especial e possuir no minimo 6 digitos.

  - role_id: Esse é um dos identificadores de segurança e função no sistema. Sem uma role_id, o usuário não pode fazer nada além de ver o conteúdo do site. É listado todas as roles possiveis no inicio desse documento.
</details>

<details>
<summary>User_Data</summary>

 Essa Model é a responsável por interagir com a tabela `User_data` no banco de dados. Nessa tabela, fica registrado todos os dados pessoais dos usuários.

 Para poder registrar um novo usuário no banco de dados, é necessário os seguintes dados.
 
 - user_id: Sem ter um `user` devidamente regsitrado no sistema não é possivel ter dados pessoais de `user`.

 - name: É necessário passar o nome completo. Esse nome náo é o nome de usuário nem o nome que é exposto no perfil de usuário e não é possivel alterar sem uma consulta direta no banco de dados com uma role de `admin`.

 - email: Deve ser o mesmo email utilizado no momento de criar o `username`. Não é possivel registrar um email inválido: sem o `@` e o `.com` e com espaço vazio entre eles.

 - birthday: No formato `YYYY-MM-DD`. Não permitido data inválido: uma data no futuro ou com mais de 100 anos.

 - address: Endereço completo: rua, bairro, cidade, estado e CEP.

 - phone: Telefone deve ser `string` e no formato: `XX X XXXX-XXXX`.

  > Apartir desse ponto, serão envio de documentação e que só é adicionado após a confirmação da matrícula. No caso de registro de funcionários, todos esses dados, com exeção de `username`, será preenchida por alguem da direção ou alguem com permissão necessária.

- matriculation: O número da matrícula pode ser visto no perfil de usuário.

- RG: O RG deve ser preenchido no formato de `string` com essa estrutura `xx.xxx.xxx-x`.
- CPF: O CPF deve ser preenchido no formato de `string` com essa estrutura `xxx.xxx.xxx-xx`.
</details>
</details>

# API

### Middlewares

<details>
<summary>ValidateNewUser</summary>

Essa Middleware é a responsável por tratar os dados de entrada no cadastro de novos usuários. Caso algum dado esteja inválido ou ausente, a conexão é imterrompida e um erro é lançado.

- <b>username:</b> 
Se não tiver um username lança um erro com status `400 Bad Request`, e uma mensagem avisando que esse campo é obrigatório e mostrando um exemplo de formato válido.

> {<br> <span style="margin-left: 30px">message: "O campo 'username' é obrigatório e deve ter no minimo 3 caracteres"</span><br>}

- <b>email:</b> 
Se o email estiver ausente ou no formato errado lança um erro com status `400 Bad Request`, e uma mensagem avisando que esse campo é obrigatório e mostrando um exemplo de formato válido. 

> {<br> <span style="margin-left: 30px">message: "O campo 'email' é obrigatório e deve ser no formato: 'test@test.com'"</span><br>}

Caso o email já exista no banco de dados, lança um erro com status `409 Conflict`, com a mensagem que o email informado já está cadastrado no sistema. 

> {<br> <span style="margin-left: 30px">message: "O email já está cadastrado!"</span><br>}

- <b>password:</b>
 Caso a senha esteja ausente ou formato e tamanho inválido, é lançado um erro com status `400 Bad Request` e uma mensagem avisando que esse campo é obrigatório e mostrando um exemplo de formato válido.

 > {<br> <span style="margin-left: 30px">message: "O campo 'password' é obrigatório e deve ter no minimo 6 caracteres!"</span><br>}

- <b>role_id:</b> 
Se não houver role_id ou for uma role_id inválida, retornar erro com status `400 Bad Request`, e uma mensagem avisando que esse campo é obrigatório.

> {<br> <span style="margin-left: 30px">message: "O campo "role_id" é obrigatório"</span><br>}

Se o cadastro for feito com sucesso, é retornado um objeto com a mensagem de sucesso e informando a role do usuário e o status http `201 created`.

> {<br> <span style="margin-left: 30px">message: "Usuário criado com sucesso! A sua role é: "role-exemplo", status: 201"</span><br>}
</details>


<details>
<summary>ValidateNewData</summary>

Essa Middleware é a responsável por tratar os dados de entrada no cadastro de dados pessoais do usuários. Caso algum dado esteja inválido ou ausente, a conexão é imterrompida e um erro é lançado.

- <b>name:</b> 
Se não tiver um name lança um erro com status `400 Bad Request`, e uma mensagem avisando que esse campo é obrigatório e mostrando um exemplo de formato válido.

> {<br> <span style="margin-left: 30px">message: "O campo 'name' é obrigatório e deve ter no minimo 6 caracteres"</span><br>}

- <b>email:</b> 
Se o email estiver ausente ou no formato errado lança um erro com status `400 Bad Request`, e uma mensagem avisando que esse campo é obrigatório e mostrando um exemplo de formato válido. 

> {<br> <span style="margin-left: 30px">message: "O campo 'email' é obrigatório e deve ser no formato: 'test@test.com'"</span><br>}

Caso o email já exista no banco de dados, lança um erro com status `409 Conflict`, com a mensagem que o email informado já está cadastrado no sistema. 

> {<br> <span style="margin-left: 30px">message: "O email já está cadastrado!"</span><br>}

- <b>user_id:</b>
 Caso o userìd informado não constar no banco de dados ou ter um formato inválido, é lançado um erro com status `400 Bad Request` e uma mensagem avisando que esse campo é obrigatório e mostrando um exemplo de formato válido.

 > {<br> <span style="margin-left: 30px">message: "O campo 'user_id' é obrigatório e deve ser um número !"</span><br>}

- <b>matriculation:</b> 
Se não houver matriculation ou ter um formato inválida, retornar erro com status `400 Bad Request`, e uma mensagem avisando que esse campo é obrigatório.

> {<br> <span style="margin-left: 30px">message: "O campo "matriculation" é obrigatório"</span><br>}

- <b>birthday:</b> 
Se não houver birthday ou ter um formato inválida, retornar erro com status `400 Bad Request`, e uma mensagem avisando que esse campo é obrigatório.

> {<br> <span style="margin-left: 30px">message: "O campo "birthday" é obrigatório" e deve ter o formato `YYYY-MM-DD`!</span><br>}

- <b>address:</b> 
Se não houver address ou ter um formato inválida, retornar erro com status `400 Bad Request`, e uma mensagem avisando que esse campo é obrigatório.
> {<br> <span style="margin-left: 30px">message: "O campo "address" é obrigatório"</span><br>}

- <b>phone:</b> 
Se não houver phone ou ter um formato inválida, retornar erro com status `400 Bad Request`, e uma mensagem avisando que esse campo é obrigatório.
> {<br> <span style="margin-left: 30px">message: "O campo "phone" é obrigatório e deve ter o formato `xx x xxxx-xxxx`"</span><br>}

- <b>phone:</b> 
Se não houver phone ou ter um formato inválida, retornar erro com status `400 Bad Request`, e uma mensagem avisando que esse campo é obrigatório.
> {<br> <span style="margin-left: 30px">message: "O campo "phone" é obrigatório e deve ter o formato `xx x xxxx-xxxx`"</span><br>}

- <b>CPF:</b> 
Se não houver CPF ou ter um formato inválida, retornar erro com status `400 Bad Request`, e uma mensagem avisando que esse campo é obrigatório.
> {<br> <span style="margin-left: 30px">message: "O campo "CPF" é obrigatório e deve ter o formato `xxx.xxx.xxx-xx`"</span><br>}

- <b>RG:</b> 
Se não houver RG ou ter um formato inválida, retornar erro com status `400 Bad Request`, e uma mensagem avisando que esse campo é obrigatório.
> {<br> <span style="margin-left: 30px">message: "O campo "RG" é obrigatório e deve ter o formato `xx.xxx.xxx-x`"</span><br>}
</details>

### Endpoints

<details>
<summary> Endpoints <b>/users</b></summary>

Este endpoit é a rota para ter acesso a todos os usuários registrado no banco de dados. 

Ao utilizar o metodo HTTP POST, você cosegue criar um novo usuário na tabela `Users` no banco de dado caso todos os dados passados estejam corretos.

Ao acessar essa rota utlizando o metodo GET, estando devidamente logado, com um token e uma `role_id` válida, que neste caso é a role de `manager` ou de `admin`, você terá como retorno, um array de objetos com todos os usuários cadastrado na tabela `Users` no banco de dados

Ao utilizar o metodo HTTP PUT nessa rota e você estiver devidamente logado, com um token e uma `role_id` válida, você consegue fazer a atualização de seus dados de usuários

Ao utilizar o metodo HTTP DELETE, estando devidamente logado, com token e `role_id` válida, você consegue encerrar o seu cadastro no sistema deletando permanentemente o seu username.

Neste endpoint também é possível passar uma `query data=true` ficando assim, `/users?data=true`.

Ao adicionar no endpoint a query `data=true` numa requesição GET, você terá no retorno, um array com todos `users` juntamente com seus dados pessoais. Sem a query você recebe somente um array contendo os dados de usuários de todos os usuários cadastrado.
</details>

<details>
<summary>Endpoints <b>/users/:id</b></summary>

Este endpoit é a rota para ter acesso aos dados de usuário de um determinado usuário registrado no banco de dados. 

Não é possível utilizar o metodo HTTP POST nesta rota.

Ao acessar essa rota utlizando o metodo GET passando como paramentro um ID de usuário valido e estando devidamente logado, com um token e uma `role_id` válida, que neste caso é a role de `manager` ou de `admin`, você terá como retorno, um objeto com todos os dados de usuário pertencentes à aquele ID.

Ao utilizar o metodo HTTP PUT nessa rota e você estiver devidamente logado, com um token e uma `role_id` válida, você consegue fazer a atualização de seus dados de usuários mas não é possível alterar dados de outros usuários. Ao menos que tenha uma role `admin`.

Ao utilizar o metodo HTTP DELETE, estando devidamente logado, com token e `role_id` válida, você consegue encerrar o seu cadastro no sistema deletando permanentemente o seu usuário ou de outro usuário. 

Neste endpoint também é possível passar uma `query data=true` ficando assim, `/users/:id?data=true`.

Ao adicionar no endpoint a query `data=true` numa requesição GET, você terá no retorno, além dos dados de usuário como tambem todos os seus dados pessoais. Sem a query você recebe somente um objeto contendo os dados de usuários.
</details>

<details>
<summary>Endpoint <b>/data</b></summary>

Este endpoit é a rota para ter acesso aos dados pessoais de todos os usuários registrados no banco de dados. 

Ao utilizar o metodo HTTP POST passando um `user_id` válido, você cosegue inserir dados pessoais do usuário dono do ID, na tabela `User_Data` no banco de dado, caso todos os dados passados estejam de acordo com as regras de serviços.

Ao acessar essa rota utlizando o metodo GET, estando devidamente logado, com um token e uma `role_id` válida, que neste caso é a role de `manager` ou de `admin`, você terá como retorno, um array de objetos com todos os dados pessoas cadastrado na tabela `User_Data` no banco de dados

Ao utilizar o metodo HTTP PUT nessa rota e você estiver devidamente logado e passar um ID válido (ID dos dados pessoais na tabela `User_Data`), e estiver com um token e uma `role_id` válida, você consegue fazer a atualização de seus dados pessoais

Não é possível usar o metodo HTTP DELETE nessa rota. Caso o usuário deseja deletar o seu cadastro, os seus dados pessoais serão deletados automaticamente. Metodo CASCADE.
</details>

<details>
<summary>Endpoint <b>/data/:id</b></summary>

Este endpoit é a rota para ter acesso a dados pessoais específicos. 

Não é possível utilizar o metodo HTTP POST nesta rota.

Ao acessar essa rota utlizando o metodo GET passando como paramentro um ID válido e estando devidamente logado, com um token e uma `role_id` válida, que neste caso é a role de `manager` ou de `admin`, você terá como retorno, um objeto com os dados pessoais pertencentes à aquele ID.

Ao utilizar o metodo HTTP PUT nessa rota e você estiver devidamente logado, com um token e uma `role_id` válida, você consegue fazer a atualização desses dados. Desde que tenha uma role `admin` ou esses dados pertencer ao usuário que está logado.

Não é possivel utilizar o metodo HTTP DELETE nesta rota, os dados pessoais são deletada juntamente com os dados de usuários. Metodo CASCADE
</details>