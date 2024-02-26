# Bushido School

## Instalação
Para rodar localmente esse projeto, você deve primeiramente fazer o clone desse repositório. Lembre-se de ter o git, node package manager(NodeJs), ou o yarn(macOS) e o docker devidamente instalado e configurado.

Você pode aprender a instalar o GIT  [aqui](https://git-scm.com/book/pt-br/v2/Come%C3%A7ando-Instalando-o-Git) e o yarn [aqui](https://www.maiconschmitz.com.br/blog/2020/08/28/instalando-o-gerenciador-de-pacotes-yarn-no-macos/), o NodeJs [aqui](https://www.alura.com.br/artigos/como-instalar-node-js-windows-linux-macos?utm_term=&utm_campaign=%5BSearch%5D+%5BPerformance%5D+-+Dynamic+Search+Ads+-+Artigos+e+Conte%C3%BAdos&utm_source=adwords&utm_medium=ppc&hsa_acc=7964138385&hsa_cam=11384329873&hsa_grp=111087461203&hsa_ad=687448474447&hsa_src=g&hsa_tgt=dsa-2276348409543&hsa_kw=&hsa_mt=&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=Cj0KCQiA5-uuBhDzARIsAAa21T_3JzhzPzv3G8_UjI89O_SGI57KnN3wclMJ0k6bDs1iFdiFWDVx7IgaAvmBEALw_wcB) e o docker [aqui](https://www.hostinger.com.br/tutoriais/install-docker-ubuntu?ppc_campaign=google_search_generic_hosting_all&bidkw=defaultkeyword&lo=1001528&gad_source=1&gclid=Cj0KCQiA5-uuBhDzARIsAAa21T9l77J32mezgxbD3NJ-uaaGPKqZJ0OnnpE9XDiZxMoOzpYZRXbWioAaAkvSEALw_wcB). 
Se não tiver o docker, o GIT ou um dos gerênciados de pacotes(NodeJs ou Yarn), não será possível rodar os comandos CLI essênciais para o projeto, nem usar os container do docker.

Exemplo dos comandos CLI: `npm start`, `npm run dev`, `npm run test`, `npm run coverage`, `git clone`,`git add .`, `git status`, `git push`, `git checkout`,`docker container ls`,` docker-compose up`,`docker-compose down`,`docker system prune -af`, etc.

### Iniciando a instalação
Primeiro, é necessário clonar o projeto. Copie o link para o clone, clicando no botão verde `<>CODE` logo a cima, no topo da página, e escolha o tipo de chave(aconselho SSH). Feito isso, abra o terminal no caminho que deseja armazenar o repositório. Você pode conferir o caminho digitando no terminal, `pwd`, irá exibir o caminho relátivo.

Com o terminal aberto, digite `git clone` e cole a link do clone que você copiou anteriormente.

Exemplo: `git clone git@github.com:jorgejesuscardoso/bushido_school.git`. É assim que deve ficar após colar o link do clone.

Após o clone, entre no repositório digitando `cd bushido_school` e instale as dependências, digitando `npm install` ou `yarn install`. Feito isso, você pode rodar localmente o projeto digitando no terminal `docker-compose up -d`, aguarde a crianção dos container e o banco de dados. 

Após a chencagem "health" do banco de dados, garantindo que ele ta rodando corretamente, entre no diretório frontend com `cd frontend` e digite `npm run dev`. Feito isso, abrirá uma página web no endereço `http://localhost:5173` no seu navegador padrão. Se tudo ocorrer, você verá a página inicial do projeto.

Está página: 

<img src="public/initialPage.png"/>

Se não houver nenhum erro na página, significa que as rotas e o banco de dados está ok. 

Pronto, o projeto está rodando perfeitamente bem no seu computador.