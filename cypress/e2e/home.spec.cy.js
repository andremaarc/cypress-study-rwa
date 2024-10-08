import LoginPage from '../pages/loginPage.js'
import HomePage from '../pages/homePage.js'
import { defaultUser, newUser } from '../fixtures/user-data.json'

const loginPage = new LoginPage()
const homePage = new HomePage()

describe('Transaction History Real World App (RWA)', () => {

  beforeEach(() => {
    loginPage.accessLoginPage()
  })

  describe('Verifique se é possível visualizar o histórico de transações de um usuário com suas transações anteriores exibidas corretamente.', () => {
    it('Visualizar histórico de transações com sucesso.', () => {
      loginPage.loginWithAnyUser(defaultUser.username, defaultUser.password)

      homePage.accessPersonalTransactionHistory()
      homePage.checkTransactionList()
    })
  })

  describe('Garanta que o sistema exiba uma mensagem indicando que o usuário não possui transações anteriores caso tente visualizar o histórico sem transações registradas.', () => {
    it('Tentar visualizar o histórico de transações de um usuário sem transações anteriores.', () => {
      loginPage.loginWithAnyUser(newUser.username, newUser.password)
      
      homePage.accessPersonalTransactionHistory()
      homePage.checkEmptyTransactionList()
    })
  })
  
})