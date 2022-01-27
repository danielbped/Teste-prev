# Teste Front-end Previdenciarista

Estamos muito felizes em saber que você chegou até aqui. Realize o teste com calma, essa é a oportunidade de demonstrar suas habilidades e seus conhecimentos!

## O Desafio!

O desafio consiste em desenvolver uma página de Login e o carregamento do Dashboard, utilizando React, Styled-Components, ContextApi, Hooks, Controles de estado, chamadas RESTFul

### O que queremos que você demonstre

- ContextApi, Hooks, States etc..
- Requisições RESTFul
- Componentização e extensibilidade dos componentes Javascript
- Styled-Components
- Reutilização de componentes visuais
- Organização, semântica, estrutura, legibilidade, manutenibilidade do seu código
- Código limpo

### Diretrizes

- Deve ser utilizado o `creact-react-app` com a versão mais atual
- Seguir a implementação do Design [Figma](https://www.figma.com/file/RCZ9wWsHBet9dTQl6RIIHW/Teste-Prev-Front-end) chegando mais próximo possível.
- Utilizar o framework [AntD](https://ant.design/) para base dos componentes
- As chamadas aos serviços esta disponível no servidor mock `http://localhost:8080`

### Requisitos

- Login
  - Criar a tela e o fluxo de login
    - rota para login `POST` `/oauth` passando no request `{ "username": "teste", "password": "frontend" }`
  - Após logado com sucesso, enviar para página do Dashboard
- Dashboard
  - Carregar as informações do usuário logado
    - As informações do usuário são retornados no `access_token` no formato JWT
    - Clicar sobre o avatar do usuário abrir um Modal mostrando as informações do usuário logado
  - Mostrar os contadores das informações solicitadas
  - Carregar uma lista de petições
    - A lista deve ser página de 2 em 2 resultados, mostrando uma paginação
  #### Atenção:
  - Para realizar a paginação do serviço deve ser passado os QueryParams `?_page=1&_limit=2`
  - O total de item do serviço `/peticoes?_page=1&_limit=2` retorna no header `X-Total-Count` o total de petições cadastradas

### Diferenciais

- Testes unitários / funcionais
- Commits semanticos
- Adaptar a página para dispositivos móveis (torná-la responsiva).
- Boa documentação.

# Rodando o servidor mock

- Instalar o json-server `npm install -g json-server`
- Executar o seguinte comando `json-server --watch db.json -p 8080 -m lmd.js`, deve ser na pastar raiz do projeto
- O servidor roda no `http://localhost:8080`, se tudo estiver certo bastar realizar as chamadas

# Como realizar a entrega

- Faça um fork desse repositório.
- Resolva o desafio da melhor maneira que você puder.
- Envie um pull-request para análise do resultado.
