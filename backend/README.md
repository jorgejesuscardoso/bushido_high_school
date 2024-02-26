# Visão geral
Este é o backend do projeto Bushido School, uma plataforma que visa facilitar o acesso dos alunos e pais à escola.
# Tecnologias utilizadas
## Banco de dados - MySQL
O banco de dados do projeto conta com um sistema ORM para uma consulta segura e prática dos dados nele armazenados. Além disso, dados sensíveis como informações pessoais e senhas são criptografados por meio da ferramenta de hashing prática e eficiente, bcrypt.

Outro fator que contribui significativamente para a segurança do projeto é a adoção do modelo MSC (Model, Service, Controller).

#### Camada Controller
 - A camada de controle (Controller) realiza uma verificação do tipo de solicitação que está sendo feita e, se não houver um token válido e uma 'role' associada, o acesso é bloqueado. Nesse caso, é enviada uma mensagem de erro com o status HTTP 400 (Bad Request), explicando que os dados não são válidos. Se houver muitas tentativas inválidas de acesso (5 vezes), a conexão é bloqueada por 5 minutos, e um e-mail é enviado para o usuário registrado naquele login, alertando-o sobre as tentativas de acesso inválidas.

#### Camada Service
- A camada de serviços (Service) fica responsavél para lidar com as regras de negócios

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