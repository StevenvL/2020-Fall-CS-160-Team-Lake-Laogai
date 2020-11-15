const addStorePage = 'http://localhost:3000/addStore'
const findStorePage = 'http://localhost:3000/findStore'
const addStoreAPI = 'http://localhost:8000/stores'

const testStore = {
    storeName: 'Boba Test Store',
    address: '888 abc street', 
    city: 'San Francisco', 
    state: 'CA', 
    zip: 9999, 
    sugarLevel: '50 75', 
    iceLevel: '50 75', 
    menu: 'Salted Cheese Black Milk Tea'
}

describe('Testing Add a New Store Page', () => {
    before(() => {
        cy.visit(addStorePage)
    })
    
    context('Test if the inputs correctly accept user inputs ', () => {    
        it('accepts store name input', () => {   
            cy.get('.storeNameInput')
              .type(testStore.storeName)
              .should('have.value', testStore.storeName)
        })
        it('accepts store street input', () => {  
            cy.get('.storeAddressInput')
              .type(testStore.address)
              .should('have.value', testStore.address)
        })
        it('accepts store city input', () => {  
            cy.get('.storeCityInput')
              .type(testStore.city)
              .should('have.value', testStore.city)
        })
        it('accepts store state input', () => {  
            cy.get('.storeStateInput')
              .type(testStore.state)
              .should('have.value', testStore.state)
        })
        it('accepts store zip input', () => {  
            cy.get('.storeZipInput')
              .type(testStore.zip)
              .should('have.value', testStore.zip)
        })

        it('accepts store menu input', () => {
            cy.get('.storeMenuInput')
              .type(testStore.menu)
              .should('have.value', testStore.menu)
        })
        it('accepts store sugar level input', () => {   
            cy.get('.storeSugarInput')
              .type(testStore.sugarLevel)
              .should('have.value', testStore.sugarLevel)
        })
        it('accepts store ice level input', () => {  
            cy.get('.storeIceInput')
              .type(testStore.iceLevel)
              .should('have.value', testStore.iceLevel)
        })   
    })

    context("Store Add Form submission", () => {          
        it("Add a new store on submit and return to find store page", () =>{ 
            cy.get('.storeAddButton').click()
            cy.url().should('eq', findStorePage)            
        })

        it("Test if the new store shows up", () => {
            cy.get('.singleStoreDiv .storeName').last().contains(testStore.storeName)
        })
    })

    context("Not submitting form with invalid inputs", () => {
        beforeEach(() => cy.visit(addStorePage))
        it('zip is empty', () => {
            cy.get('.storeAddButton').click()
            cy.get('.zipError').contains('Enter Zip')
            cy.url().should('eq', addStorePage)
        })
        it('zip is string', () => {
            cy.get('.storeZipInput').type('dfjksdj')
            cy.get('.storeAddButton').click()
            cy.get('.zipError').contains('Zip must be number')
            cy.url().should('eq', addStorePage)
        })
        it('zip is sepcial characters', () => {
            cy.get('.storeZipInput').type('$%^$')
            cy.get('.storeAddButton').click()
            cy.get('.zipError').contains('Zip must be number')
            cy.url().should('eq', addStorePage)
        })
        it('zip has speical character and number', () => {
            cy.get('.storeZipInput').type('#888')
            cy.get('.storeAddButton').click()
            cy.get('.zipError').contains('Zip must be number')
            cy.url().should('eq', addStorePage)
        })
        it('zip is alphanuemric', () => {
            cy.get('.storeZipInput').type('9OOOO')
            cy.get('.storeAddButton').click()
            cy.get('.zipError').contains('Zip must be number')
            cy.url().should('eq', addStorePage)
        })
    })
    context("Cancel store adding" , () => {   
        it("Return to Store Find Page when cancel button is clicked", () => {
            cy.visit(addStorePage)
            cy.get('.storeCancelButton').click()
            cy.url().should('eq', findStorePage)
        })
    })

})