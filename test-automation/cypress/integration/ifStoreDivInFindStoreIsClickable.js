const findStorePage = 'http://localhost:3000/findStore'

const testStore = {
    storeName: 'Tiger Boba',
}

describe('Testing if Tiger Boba is clickable in Find Store Page', () => {
    before(() => {
        cy.visit(findStorePage)
    })

    context("In Tiger Boba div", () => {          
        it("is clickable and go to the Tiger Boba store detail page", () =>{ 
            cy.get('.store0').click()
            cy.url().should('eq', `http://localhost:3000/stores/Tiger%20Boba`)         
        })
    })

})