import LoginPage from '../pages/loginPage.js'
import SignUpPage from '../pages/signUpPage.js'

const loginPage = new LoginPage()
const signUpPage = new SignUpPage

describe('SignUp Real World App (RWA)', () => {

  beforeEach(() => {
    loginPage.accessLoginPage()
  })
  
  describe('Registration - Success', () => {
    it('Deve permitir o registro de um novo usuário com dados válidos', () => {
      signUpPage.accessSignupPage()
      signUpPage.fillForm('usertest', 'usertest', 'usertest', 's3cret', 's3cret')
      signUpPage.submitForm()
    })
  })

  describe('Registration - Failure', () => {
    it('Deve exibir uma mensagem de erro ao tentar registro com campos obrigatórios vazios', () => {
      signUpPage.accessSignupPage()
      signUpPage.emptyUserFields()
      signUpPage.checkTextFieldRequired()
    })
  })
})
