export default class TransactionPage {
    selectorList() {
        return {
            newTransactionButton: '[data-testid="AttachMoneyIcon"]',
            inputSearch: '[placeholder="Search..."]',
            userList: '[data-test="users-list"] .MuiListItem-root',
            inputAmount: '#amount',
            inputDescription: '#transaction-create-description-input',
            paymentSubmitButton: '[data-test="transaction-create-submit-payment"]',
            successAlert: '[data-test="alert-bar-success"]'
        }
    }

    accessTransactionPage() {
        cy.get(this.selectorList().newTransactionButton).click()
    }

    moneyTransaction(userName, amount, description) {
        cy.get(this.selectorList().inputSearch).type(userName)
        cy.get(this.selectorList().userList).eq(0).click()
        cy.get(this.selectorList().inputAmount).type(amount)
        cy.get(this.selectorList().inputDescription).type(description)
        cy.get(this.selectorList().paymentSubmitButton).click()
    }

    verifySuccessBarIsVisible() {
        cy.get(this.selectorList().successAlert).should('be.visible')
    }

    verifySuccessBarIsHidden() {
        cy.get(this.selectorList().successAlert).should('be.hidden')
    }
}