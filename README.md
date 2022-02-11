![react-version](https://img.shields.io/badge/React-v17.0.2-yellow)

# Teste Previdenciarista

- Trata-se de o desenvolvimento de um exemplo de site onde os usuários podem acessar suas petições.

# Sumário

- [Tecnologias utilizadas](#tecnologias)
- [Instruções para rodar o projeto](#instrucoes)
- [Organização e estruturação do projeto](#organizacao)
- [Desenvolvimento](#desenvolvimento)
- [Testes](#testes)

# Tecnologias Utilizadas <a name="tecnologias"></a>

- [**React**](https://pt-br.reactjs.org/)
- [**React Hooks**](https://pt-br.reactjs.org/docs/hooks-intro.html)
- [**React Router Dom**](https://www.npmjs.com/package/react-router-dom)
- [**Styled Components**](https://styled-components.com/)
- [**React Paginate**](https://www.npmjs.com/package/react-paginate)
- [**React Modal**](https://github.com/reactjs/react-modal)
- [**Json Web Token**](https://www.npmjs.com/package/jsonwebtoken)
- [**Axios**](https://axios-http.com/docs/intro)
- [**React Testing Library**](https://testing-library.com/docs/react-testing-library/intro/)
- [**React Mock LocalStorage**](https://www.npmjs.com/package/@react-mock/localstorage)
- [**Json Server**](https://www.npmjs.com/package/json-server)

# Instruções para rodar o projeto <a name="instrucoes"></a>

### Será necessário ter instalado na sua máquina:

```
Git
React
Node v6.0.0^
```

- Clone o repositório com o comando **git clone**:

```
git clone https://danielbped@bitbucket.org/danielbped/test-frontend.git
```

- Entre no diretório que acabou de ser criado:

```
cd test-frontend
```

- Para o projeto funcionar na sua máquina, será necessário instalar suas dependências, para isso, utilize o comando **npm install**:

```
npm install
```

- Para rodar o servidor de teste será necessário, também, instalar o **Json Server**, para isso, utilize o seguinte comando:

```
npm install -g json-server
```

- Agora, com o **Json Server** instalado, utilize o seguinte comando, para rodar o servidor de teste:

```
json-server --watch db.json -p 8080 -m lmd.js --routes routes.json
```

> ⚠️ ATENÇÃO: Este comando deve ser utilizado na raiz do projeto ⚠️

- Pronto, agora o projeto está pronto para ser rodado localmente, utilizando o comando **npm start**:

```
npm start
```

# Organização e estruturação do projeto <a name="organizacao"></a>

O projeto está organizado e estruturado da seguinte forma:

```
      ├── README.md
      ├── db.json
      ├── routes.json
      ├── lmd.js
      ├── public
      ├── src
      |     ├── components
      |     |       ├── Dashboard
      |     |       |     ├── Info.jsx
      |     |       |     ├── InfoCard.jsx
      |     |       |     ├── NoPetitions.jsx
      |     |       |     ├── Paginate.jsx
      |     |       |     ├── PetitionCard.jsx
      |     |       |     ├── Petitions.jsx
      |     |       ├── Login
      |     |       |     ├── Input.jsx
      |     |       |     ├── LoginForm.jsx
      |     |       ├── Modal
      |     |       |     ├── PetitionModal.jsx
      |     |       |     ├── PetitionModalDetails.jsx
      |     |       |     ├── ProfileModal.jsx
      |     |       |     ├── ProfileModalDetails.jsx
      |     |       ├── Header.jsx
      |     |       ├── Loading.jsx
      |     ├── context
      |     |       ├── DataContext.jsx
      |     |       ├── UserProvider.jsx
      |     ├── pages
      |     |       ├── Dashboard.jsx
      |     |       ├── Login.jsx
      |     ├── Style
      |     |       ├── Dashboard.jsx
      |     |       ├── Header.jsx
      |     |       ├── Info.jsx
      |     |       ├── Login.jsx
      |     |       ├── Logo.jsx
      |     |       ├── PetitionModal.jsx
      |     |       ├── ProfileModal.jsx
      |     ├── svg
      |     |       ├── Eye.svg
      |     |       ├── Logo.svg
      |     ├── tests
      |     |       ├── Dashboard.test.js
      |     |       ├── Login.test.js
      |     ├── utils
      |     |       ├── stringHandler.jsx
```

# Desenvolvimento <a name="desenvolvimento" ></a>

## Fetch

Para realizar o fetch no banco de dados fictício, foi utilizado o client HTTP [**Axios**](https://axios-http.com/docs/intro).

## Estilização

Para realizar a estilização, foi utilizado o framework [**Styled Components**](https://styled-components.com/).

## Modais

Para desenvolver os modais, foi utilizada a biblioteca [**React Modal**](https://github.com/reactjs/react-modal)

## Paginação

Para desenvolver a paginação, foi utilizada a biblioteca [**React Paginate**](https://www.npmjs.com/package/react-paginate)

# Testes

Para o desenvolvimento dos teste, foram utilizadas as bibliotecas [**React Testing Library**](https://testing-library.com/docs/react-testing-library/intro/) e [**React Mock LocalStorage**](https://www.npmjs.com/package/@react-mock/localstorage). A segunda, para mockar o token no localStorage do navegador. Tendo um total de 87.42% de cobertura.

```
---------------------------|---------|----------|---------|---------|-------------------
File                       | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
---------------------------|---------|----------|---------|---------|-------------------
All files                  |   87.42 |    94.44 |   76.19 |   88.75 |                   
 src                       |      75 |      100 |     100 |      75 |                   
  App.jsx                  |     100 |      100 |     100 |     100 |                   
  Routes.jsx               |     100 |      100 |     100 |     100 |                   
  index.jsx                |       0 |      100 |     100 |       0 | 6                 
 src/Style                 |     100 |      100 |     100 |     100 |                   
  Dashboard.jsx            |     100 |      100 |     100 |     100 |                   
  Header.jsx               |     100 |      100 |     100 |     100 |                   
  Info.jsx                 |     100 |      100 |     100 |     100 |                   
  Login.jsx                |     100 |      100 |     100 |     100 |                   
  Logo.jsx                 |     100 |      100 |     100 |     100 |                   
  PetitionModal.jsx        |     100 |      100 |     100 |     100 |                   
  ProfileModal.jsx         |     100 |      100 |     100 |     100 |                   
 src/components            |    87.5 |      100 |   66.66 |    87.5 |                   
  Header.jsx               |   83.33 |      100 |      50 |   83.33 | 17                
  Loading.jsx              |     100 |      100 |     100 |     100 |                   
 src/components/Dashboard  |   97.61 |      100 |   93.33 |   97.43 |                   
  Info.jsx                 |     100 |      100 |     100 |     100 |                   
  InfoCard.jsx             |     100 |      100 |     100 |     100 |                   
  NoPetitions.jsx          |     100 |      100 |     100 |     100 |                   
  Paginate.jsx             |     100 |      100 |     100 |     100 |                   
  PetitionCard.jsx         |   83.33 |      100 |   66.66 |   83.33 | 42                
  Petitions.jsx            |     100 |      100 |     100 |     100 |                   
 src/components/Login      |   85.71 |      100 |      80 |      90 |                   
  Input.jsx                |     100 |      100 |     100 |     100 |                   
  LoginForm.jsx            |   83.33 |      100 |      75 |   88.23 | 29-30             
 src/components/Modal      |      44 |      100 |      25 |      44 |                   
  PetitionModal.jsx        |     100 |      100 |     100 |     100 |                   
  PetitionModalDetails.jsx |   33.33 |      100 |       0 |   33.33 | 17-52             
  ProfileModal.jsx         |     100 |      100 |     100 |     100 |                   
  ProfileModalDetails.jsx  |   16.66 |      100 |       0 |   16.66 | 15-57             
 src/context               |     100 |      100 |     100 |     100 |                   
  DataContext.jsx          |     100 |      100 |     100 |     100 |                   
  UserProvider.jsx         |     100 |      100 |     100 |     100 |                   
 src/pages                 |    87.5 |       50 |      80 |     100 |                   
  Dashboard.jsx            |   85.71 |       50 |      75 |     100 | 29                
  Login.jsx                |     100 |      100 |     100 |     100 |                   
 src/utils                 |     100 |      100 |     100 |     100 |                   
  stringHandler.jsx        |     100 |      100 |     100 |     100 |                   
---------------------------|---------|----------|---------|---------|-------------------
```
