# Teste front-end truckpad

## Instalação:

## pré-requisitos

Primeiramente é preciso ter o [nodejs](https://nodejs.org/en/download/). e o [git](https://git-scm.com/downloads) instalados em sua maquina. além disso temos como instalação opcional o [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable), ele é um substituo para algumas funções que já vem no nodejs, a instalação do node continua obrigatoria mesmo caso opte por usar o yarn.

<br/>

## Como Iniciar o projeto ?

```bash
# abra o terminal/cmd e clone o repositorio do projeto usando o git
$ git clone https://github.com/carlos0406/nlw6-react nlw6

# Acesse a pasta do projeto no terminal/cmd com o comando
$ cd truckpad

# Em Seguida é preciso fazer a instalação das dependencias, para isso use o comando
$ npm install
# ou
$ yarn

# Execute a aplicação em modo de desenvolvimento
$ npm run dev
#ou
$ yarn dev
# O servidor inciará na porta:3000 - caso nao abra automaticamente acesse <http://localhost:3000>
```

<br/>

# Ferrmantes usadas no desenvolvimento:

## Framework:

o Framework usado foi o [NextJS](https://nextjs.org/), um framework que usa o React,
o projeto foi criado a partir de um projeto padrão que pode ser obtido ao usar os comandos:

```
npx create-next-app@latest
# ou
yarn create next-app
```

## Bibliotecas

O projeto foi desenvolvida usando várias bibliotecas para que não fosse preciso desenvolver várias funcionalidades do completo zero, assim facilitando o desenvolvimento.

### chakra-ui:

Para a estilização do site foi usada a biblioteca [chakra-ui](https://chakra-ui.com/), é um biblioteca que se baseia em fazer interface declarativa, onde podemos criar interfaces de maneira mais rapida sem precisar fazer escrita de css do zero.

### MirageJS

Já que não existia uma API consumir e enviar os dados foi usado a biblioteca
[MirageJS](https://miragejs.com/), onde em desenvolvimento podemos criar rotas falsas de uma api e ter um banco de dados em memória, onde podemos facilmente criar modelos e gerar registros falsos, adicionar novos registros e editar os registros.

### Axios & React-query

Para fazer a comunicação com a API foi usado a biblioteca [axios](https://axios-http.com/ptbr/docs/intro), um http client simples de usar para fazer nossas requisições, além disso também foi usado o [react-query](https://tanstack.com/query/v4/docs/overview), para que fosse possível ter um melhor controle dos dados além de um melhor armazenamento, o react query permite que ao fazer uma requisição seja possível armazenar os dados e renovar eles de maneira automatica baseado em um tempo configuravel.

### react-hook-form & yup

para os formulários foi usado o [react-hook-form](https://react-hook-form.com/) para gerenciar o estado do formulario, essa biblioteca possibilita um controle maior dos campos, dos erros relacionados além de ter uma boa integração com o [yup](https://github.com/jquense/yup), que é usado para fazer a validação dos campos, possibilitando validações padrões além das validações personalizadas.

<br/>

# Testes Automatizados

Foram feitos testes unitários em alguns componentes.

Os testes automitzados foram feitos usando [jest](https://jestjs.io/pt-BR/), e [react-testing-library](https://testing-library.com/).

para rodar os testes basta usar um dos comandos a baixo no terminal dentro da pasta do projeto e ele retornara uma analise dos arquivos do projeto que foram testados e dos que precisam ser testados.

```
npm test
# ou
yarn test
```
