# Teste Front-end Previdenciarista
Estamos muito felizes em saber que você chegou até aqui. Realize o teste com calma, essa é a oportunidade de demonstrar suas habilidades e seus conhecimentos!

## O Desafio!
O desafio consiste em desenvolver uma página de Login e o carregamento do Dashboard baseado nas informações do usuário logado.

### O que gostariamos de ver
- ContextApi, Hooks, States, Routes etc..
- Requisições RESTFul
- Styled-Components para customização
- Componentização, reutilização e extensibilidade dos componentes visuais
- Organização, semântica, estrutura, legibilidade, manutenibilidade do seu código
- Código limpo

### Diferenciais
- Testes unitários / funcionais
- Commits semanticos
- Adaptar a página para dispositivos móveis (torná-la responsiva).
- Boa documentação.

### Diretrizes
- Deve ser utilizado o `creact-react-app` com a versão mais atual
- Seguir a implementação do Design [Figma](https://www.figma.com/file/RCZ9wWsHBet9dTQl6RIIHW/Teste-Prev-Front-end) chegando mais próximo possível.
- Utilizar o framework [AntD](https://ant.design/) para base dos componentes
- As chamadas aos serviços esta disponível no servidor mock `http://localhost:8080`

### Requisitos
- Login
  - Criar a tela e o fluxo de login
    - rota para login `POST` `http://localhost:8080/oauth` passando no request `{ "username": "teste", "password": "frontend" }`
  - Redirecionar para rota `/dashboard`
- Dashboard 
    - Acessível somente para usuário logado, se não retornar ao login
    - Carregar as informações do usuário logado
    - As informações do usuário são retornados no `access_token` no formato JWT
    - Clicar sobre o avatar do usuário abrir um Modal mostrando as informações do usuário logado
  - Mostrar os contadores com base na info do usuário logado
    - rota para os contadores `GET` `/counter?tipo={tipoModulo}`
  - Carregar uma lista de petições
    - A lista deve ser páginada de 2 em 2 resultados, mostrando uma paginação
    - Ao clicar em "Pré-visualizar petição", abrir uma modal para mostrar as informações detalhadas da petição, esta tela você esta livre para mostrar os detalhes da petição como achar melhor!
  #### Atenção:
  - Para realizar a paginação do serviço deve ser passado os QueryParams `?_page=1&_limit=2`
  - O total de item do serviço `/peticoes?_page=1&_limit=2` retorna no header `X-Total-Count` o total de petições cadastradas
   - `https://github.com/typicode/json-server#paginate`

### Rodando o servidor mock para request
- Instalar o json-server
    -   `npm install -g json-server`
- Executar o seguinte comando:
    -  `json-server --watch db.json -p 8080 -m lmd.js --routes routes.json`
    _OBS_: deve ser na pastar raiz do projeto
- O servidor roda no `http://localhost:8080`, se tudo estiver certo bastar realizar as chamadas


# Como realizar a entrega
- Faça um fork desse repositório.
- Resolva o desafio da melhor maneira que você puder.
- Envie um pull-request para análise do resultado.
