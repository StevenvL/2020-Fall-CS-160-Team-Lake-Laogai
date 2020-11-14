const findStorePage = 'http://localhost:3000/findStore'
const testInput = {
    input0: 'Tiger',
    input1: 'Tiger Bo',
    input2: 'Tiger Boba',
    input3: 'I am a random name'
}
describe('Testing Add a New Store Page', () => {
    before(() => {
        cy.visit(findStorePage);
    })
    
    context('Test if the user input box correctly taking user inputs', () => {    
        it('should accepts store name input', () => {   
            cy.get('.storeNameInput')
              .type(testInput.input0)
              .should('have.value', testInput.input0)
        })
    })
})