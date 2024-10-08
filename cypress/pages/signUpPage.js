export default class SignUpPage {
    selectorList() {
        return {
            accessSignup: '[data-test="signup"]',
            signupTitle: '[data-test="signup-title"]',
            blankSpace: '#root',

            // Form selectors
            firstNameInput: '#firstName',
            lastNameInput: '#lastName',
            usernameInput: '#username',
            passwordInput: '#password',
            confirmPasswordInput: '#confirmPassword',
            signupButton: '[data-test="signup-submit"]',

            // Error messages
            wrongFirstName: '#firstName-helper-text',
            wrongLastName: '#lastName-helper-text',
            wrongUsername: '#username-helper-text',
            wrongPassword: '#password-helper-text',
            wrongConfirmPassword: '#confirmPassword-helper-text',
        }
    }

    accessSignupPage() {
        cy.get(this.selectorList().accessSignup).click()
        cy.get(this.selectorList().signupTitle).should('be.visible')
    }

    submitForm(){
        cy.get(this.selectorList().signupButton).click()
        cy.location('pathname').should('equal', '/signin')
    }

    fillForm(firstName, lastName, username, password, confirmPassword) {
        cy.get(this.selectorList().firstNameInput).type(firstName)
        cy.get(this.selectorList().lastNameInput).type(lastName)
        cy.get(this.selectorList().usernameInput).type(username)
        cy.get(this.selectorList().passwordInput).type(password)
        cy.get(this.selectorList().confirmPasswordInput).type(confirmPassword)
    }

    emptyUserFields() {
        cy.get(this.selectorList().firstNameInput).click()
        cy.get(this.selectorList().lastNameInput).click()
        cy.get(this.selectorList().usernameInput).click()
        cy.get(this.selectorList().passwordInput).click()
        cy.get(this.selectorList().confirmPasswordInput).click()
        cy.get(this.selectorList().blankSpace).click()
    }

    checkTextFieldRequired() {
        cy.get(this.selectorList().wrongFirstName).should('be.visible')
        cy.get(this.selectorList().wrongLastName).should('be.visible')
        cy.get(this.selectorList().wrongUsername).should('be.visible')
        cy.get(this.selectorList().wrongPassword).should('be.visible')
        cy.get(this.selectorList().wrongConfirmPassword).should('be.visible')
    }
}
