const findStorePage = 'http://localhost:3000/findStore'
const testInput = 'Tiger Boba';
describe('Testing find a store page user input', () => {
    before(() => {
        cy.visit(findStorePage);
    });
    
    context('Test if the user input box correctly taking user inputs', () => {    
        
        it('should have the search boba store area', () => {   
            cy.get('.search-boba')
              .should('have.class', 'search-boba')
        });
        
        it('should have the search boba store input box', () => {   
            cy.get('.form-control')
              .should('have.class', 'form-control')
        });
        
        it('should accepts store name input', () => {   
            cy.get('.form-control')
              .type(testInput)
              .should('have.value', testInput);
        });
    });
});