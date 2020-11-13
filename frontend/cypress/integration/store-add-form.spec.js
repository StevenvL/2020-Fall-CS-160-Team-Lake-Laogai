describe('Input form', () => {
    before(() => {
        cy.visit('http://localhost:3000/addStore')
    })

    const storeName = 'Tiger Sugar'
    const storeAddress = '888 abc street'
    const storeCity = 'San Francisco'  
    const storeState = 'CA'
    const storeZip = 9999
    const storeMenu = 'Salted Cheese Black Milk Tea'  
    const storeSugar = '50 75' 
    const storeIce = '50 75' 
    context('All Input Tests', () => {    
        it('accepts store name input', () => {   
            cy.get('.storeNameInput')
              .type(storeName)
              .should('have.value', storeName)
        })
        it('accepts store street input', () => {  
            cy.get('.storeAddressInput')
              .type(storeAddress)
              .should('have.value', storeAddress)
        })
        it('accepts store city input', () => {  
            cy.get('.storeCityInput')
              .type(storeCity)
              .should('have.value', storeCity)
        })
        it('accepts store state input', () => {  
            cy.get('.storeStateInput')
              .type(storeState)
              .should('have.value', storeState)
        })
        it('accepts store zip input', () => {  
            cy.get('.storeZipInput')
              .type(storeZip)
              .should('have.value', storeZip)
        })
        it('accepts store menu input', () => {
            cy.get('.storeMenuInput')
              .type(storeMenu)
              .should('have.value', storeMenu)
        })
        it('accepts store sugar level input', () => {   
            cy.get('.storeSugarInput')
              .type(storeSugar)
              .should('have.value', storeSugar)
        })
        it('accepts store ice level input', () => {  
            cy.get('.storeIceInput')
              .type(storeIce)
              .should('have.value', storeIce)
        })   
    })

    context("Store Add Form submission", () => {       
        it("Add a new store on submit", () =>{
            const newStore = {
                storeName: storeName,
                address: storeAddress, 
                city: storeCity, 
                state: storeState, 
                zip: storeZip, 
                sugarLevel: storeSugar, 
                iceLevel: storeIce, 
                menu: storeMenu
            }
            cy.get('.storeAddButton').click()
            cy.server()
            cy.route('POST', 'http://localhost:8000/stores', newStore)
        })
    })

})