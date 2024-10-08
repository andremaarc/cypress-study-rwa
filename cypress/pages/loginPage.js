export default class LoginPage {
    selectorList() {
        return {
            usernameInput: '#username',
            passwordInput: '#password',
            rememberMeCheckbox: "[name='remember']",
            loginButton: '[data-test="signin-submit"]',
            wrongCredentialAlert: '[data-test="signin-error"]'
        }
    }

    accessLoginPage() {
        cy.visit('/')
    }

    loginWithAnyUser(username, password) {
        cy.get(this.selectorList().usernameInput).type(username)
        cy.get(this.selectorList().passwordInput).type(password)
        cy.get(this.selectorList().rememberMeCheckbox).check()
        cy.get(this.selectorList().loginButton).click()
    }

    verifyErrorMessage() {
        cy.get(this.selectorList().wrongCredentialAlert).should('be.visible')
    }
}