const findStorePage = 'http://localhost:3000/findStore'

const testStore = {
    storeName: 'Tiger Boba',
}

describe('Testing the search button in Find Store Page', () => {
    before(() => {
        cy.visit(findStorePage)
    })
    
    context('Test if the inputs correctly accept user inputs ', () => {    
        it('accepts find store name input', () => {   
            cy.get('.findStoreInput')
              .type(testStore.storeName)
              .should('have.value', testStore.storeName)
        })
    })

    context("Search a store submission", () => {          
        it("go to the specific store page that the user searches for", () =>{ 
            cy.get('.theSearchButton').click()
            cy.url().should('eq', `http://localhost:3000/stores/Tiger%20Boba`)         
        })
    })

})