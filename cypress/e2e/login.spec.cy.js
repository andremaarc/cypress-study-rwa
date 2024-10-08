import HomePage from '../pages/homePage.js';
import LoginPage from '../pages/loginPage.js'
import { defaultUser, unregisteredUser } from '../fixtures/user-data.json'

const homePage = new HomePage()
const loginPage = new LoginPage()

describe('Login Real World App (RWA)', () => {

  beforeEach(() => {
    loginPage.accessLoginPage()
  })

  describe('Login - Success', () => {
    it('Deve permitir o login com credenciais válidas', () => {
      loginPage.loginWithAnyUser(defaultUser.username, defaultUser.password)
      homePage.checkHomePage()
    })
  })

  describe('Login - Failure', () => {
    it('Deve exibir uma mensagem de erro ao tentar login com credenciais inválidas.', () => {
      loginPage.loginWithAnyUser(unregisteredUser.username, unregisteredUser.password)
      loginPage.verifyErrorMessage()
    })
  })

})