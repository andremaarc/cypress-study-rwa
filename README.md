# Cypress Real World App - Testes Automatizados

Este projeto contém testes automatizados desenvolvidos como parte de meus estudos de automação de testes utilizando o Cypress. Os testes são baseados no projeto [Cypress Real World App](https://github.com/cypress-io/cypress-realworld-app), uma aplicação moderna de simulação de banco online que permite realizar transações financeiras, acessar o histórico de transações e realizar cadastro e login de usuários.

## Documentação de Casos de Teste e Bug Reports

Além dos testes automatizados no projeto, há um arquivo _Cypress_Test_Cases_and_Bug_Reports.pdf_ disponível que contém todos os **casos de teste** detalhados, bem como **relatórios de bugs** encontrados durante o processo de execução dos testes. Esse documento pode ser útil para entender melhor o processo de teste, os cenários validados e qualquer comportamento inesperado identificado.

## Funcionalidades Testadas

Este repositório contém os testes que eu desenvolvi, focados nas seguintes funcionalidades:

### 1. **Login e Cadastro**
- **Caso de Teste 1**: Verificar login com credenciais válidas.
- **Caso de Teste 2**: Verificar login com credenciais inválidas.
- **Caso de Teste 3**: Registro de novo usuário com sucesso.
- **Caso de Teste 4**: Registro de novo usuário com campos em branco.

### 2. **Enviar Dinheiro**
- **Caso de Teste 1**: Enviar dinheiro com saldo suficiente.
- **Caso de Teste 2**: Enviar dinheiro com saldo insuficiente.

### 3. **Visualizar Histórico de Transações**
- **Caso de Teste 1**: Visualizar histórico de transações com sucesso.
- **Caso de Teste 2**: Tentar visualizar o histórico de transações de um usuário sem transações anteriores.

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

```
├── cypress
│   ├── fixtures
│   │   └── user-data.json          # Arquivo de dados para simular o comportamento da aplicação
│   ├── e2e
│   │   ├── login.spec.js           # Testes relacionados à funcionalidade de login
│   │   ├── signUp.spec.js          # Testes relacionados à funcionalidade de cadastro
│   │   ├── transaction.spec.js     # Testes para envio de dinheiro
│   │   └── home.spec.js            # Testes para visualização do histórico de transações
│   ├── support                     # Suporte para custom commands e inicialização
│   └── pages
│       ├── loginPage.js            # Page Object para os testes de login
│       ├── signUpPage.js           # Page Object para os testes de cadastro
│       ├── transactionPage.js      # Page Object para os testes de transações
│       └── homePage.js             # Page Object para os testes de histórico de transações
├── README.md                       # Documentação do projeto
├── Cypress_Test_Cases_and_Bug_Reports.pdf  # Arquivo PDF contendo casos de testes e relatórios de bugs
└── package.json                    # Configurações do projeto e dependências
```
## Observações sobre a Execução dos Testes

- **Ordem de execução**: O teste de **signUp** deve ser executado antes do teste de **home**, pois ele cria um novo usuário que será utilizado na funcionalidade de visualização do histórico de transações. Isso garante que os testes de histórico rodem corretamente com um usuário existente e ativo.

## Pré-requisitos

- Node.js (v12 ou superior)

## Como Executar os Testes

1. Instale as dependências do projeto:
   ```bash
   npm i
   ```

2. Para executar os testes em modo interativo via Test Runner do Cypress:
   ```bash
   npx cypress open
   ```
3. Para executar todos os testes em modo headless (sem interface gráfica):
   ```bash
   npx cypress run
   ```

### Observação:
Antes de rodar os testes, certifique-se de que o **Cypress Real World App** está rodando localmente. Para isso, siga as instruções no [repositório oficial](https://github.com/cypress-io/cypress-realworld-app) do projeto.

## Contato

Este projeto é parte dos meus estudos na área de automação de testes. Se tiver sugestões ou feedback, entre em contato:

- [LinkedIn](https://www.linkedin.com/in/andremarcdias)
- [GitHub](https://github.com/andremaarc)
