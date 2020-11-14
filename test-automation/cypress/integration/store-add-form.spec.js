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
            cy.server()
            cy.route('POST', addStoreAPI, testStore).as('addNewStore')
            cy.get('.storeAddButton').click()
            cy.url().should('eq', findStorePage)            
        })

        it("Test if the new store information was added", () => {
            cy.request(addStoreAPI).as('backEndInformation')
            cy.get('@backEndInformation').should((response) => {
                let newestInputIndex = response.body.length;
                expect(response.body[newestInputIndex-1]).to.have.property('storeName', testStore.storeName );
                expect(response.body[newestInputIndex-1]).to.have.property('street', testStore.address );
                expect(response.body[newestInputIndex-1]).to.have.property('menu', testStore.menu );
            })
         });
    })

    context("Cancel store adding" , () => {   
        it("Return to Store Find Page when cancel button is clicked", () => {
            cy.visit(addStorePage)
            cy.get('.storeCancelButton').click()
            cy.url().should('eq', findStorePage)
        })
    })

})