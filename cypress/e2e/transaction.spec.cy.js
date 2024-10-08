import LoginPage from '../pages/loginPage.js'
import TransactionPage from '../pages/transactionPage.js'
import { defaultUser, registerUser } from '../fixtures/user-data.json'

const loginPage = new LoginPage()
const transactionPage = new TransactionPage()

describe('Money Transaction Real World App (RWA)', () => {

    beforeEach(() => {
        loginPage.accessLoginPage()
        loginPage.loginWithAnyUser(defaultUser.username, defaultUser.password)
        transactionPage.accessTransactionPage()
    })

    describe('Enviar dinheiro com saldo suficiente.', () => {
        it('Verifique se é possível enviar dinheiro para um amigo quando o saldo da conta é suficiente.', () => {
            transactionPage.moneyTransaction(registerUser.username, '2', 'Payment')
            transactionPage.verifySuccessBarIsVisible()
        })
    })

    describe('Enviar dinheiro com saldo insuficiente.', () => {
        it('Garanta que o sistema exiba uma mensagem de erro ao tentar enviar dinheiro sem saldo suficiente.', () => {
            transactionPage.moneyTransaction(registerUser.username, '5000', 'Payment')
            transactionPage.verifySuccessBarIsHidden()
        })
    })

    describe('Enviar dinheiro com valor negativo.', () => {
        it('Garanta que o sistema exiba uma mensagem de erro ao tentar enviar dinheiro com valor negativo.', () => {
            transactionPage.moneyTransaction(registerUser.username, '-5000', 'Payment')
            transactionPage.verifySuccessBarIsHidden()
        })
    })
})