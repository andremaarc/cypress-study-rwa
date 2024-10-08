export default class HomePage {
    selectorList() {
        return {
            sideNav: "[data-test='sidenav']",
            mineHistoryButton: "[href='/personal']",
            transactionList: "[data-test='transaction-list']",
            emptyListHeader: "[data-test='empty-list-header']"
        }
    }

    checkHomePage() {
        cy.location('pathname').should('equal', '/')
        cy.get(this.selectorList().sideNav).should('be.visible')
    }

    accessPersonalTransactionHistory(){
        cy.get(this.selectorList().mineHistoryButton).click()
        cy.location('pathname').should('equal', '/personal')
    }

    checkTransactionList(){
        cy.get(this.selectorList().transactionList).should('be.visible')
    }

    checkEmptyTransactionList(){
        cy.get(this.selectorList().emptyListHeader).should('be.visible')
    }

}