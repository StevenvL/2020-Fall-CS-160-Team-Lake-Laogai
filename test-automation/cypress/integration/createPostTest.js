"use strict";

let inputData = {
    createPostLink : "http://localhost:3000/createpost",
    backEndLink: "http://localhost:8000/forums/posts",
    dropDownMenuChoice: 'Food',
    forumID: 2
};
let expetedData = {
    dropDownMenuLabelText: "Select Forum Category",
    forumTitleTextLabel: "Forum Title",
    forumBodyTextLabel: "Forum Body"
};

function createRandomData () {
    let addedVal = Math.floor(Math.random()*10000 + 1)
    inputData.forumTitle = "forumTitle " + addedVal;
    inputData.forumBody = "forumBody " + addedVal;
}


describe('Load createpost webpage', () => {
    before(() => {
        cy.visit(inputData.createPostLink);
    })

    context('Test if Labels Are Correct', () => {    

        it('Drop Down Menu Label', () => {   
            cy.get(":nth-child(1) > .form-label").should((textElement)=> {
                let text = textElement.get(0).innerText;
                expect(text).to.eq(expetedData.dropDownMenuLabelText);
            })
        })

        it('Forum Title Text Area Label', () => {   
            cy.get(":nth-child(2) > .form-label").should((textElement)=> {
                let text = textElement.get(0).innerText;
                expect(text).to.eq(expetedData.forumTitleTextLabel);
            })
        })

        it('Forum Title Text Area Label', () => {   
            cy.get(":nth-child(3) > .form-label").should((textElement)=> {
                let text = textElement.get(0).innerText;
                expect(text).to.eq(expetedData.forumBodyTextLabel);
            })
        })

    });

    context('Create a new post', () => {
        before(() => {
            createRandomData();
        });

        it('Drop Down Menu Exists and Insert Data', () => {   
            cy.get("#forumCategory").select(inputData.dropDownMenuChoice);
        });
        it('Forum Title Text Area exists and Insert Data', () => {   
            cy.get("#forumTitle")
            .type(inputData.forumTitle);
        });
        it('Forum Title Text Area exists and Insert Data', () => {   
            cy.get('#forumBodyGroup')
            .type(inputData.forumBody);
        });
    });

    context('Submit new post', () => {
        it('Click button', () => {
            cy.get('.form > .btn').click();
        });
    });

    context('Check backend to see if new data is there', () => {
        before(() => {
            cy.request(inputData.backEndLink).as('backEndInformation');
        });

        it('Check inputData is here', () => {
           cy.get('@backEndInformation').should((response) => {
               let newestInputIndex = response.body.length;
               expect(response.body[newestInputIndex-1]).to.have.property('postTitle', inputData.forumTitle);
               expect(response.body[newestInputIndex-1]).to.have.property('postDescriptioni', inputData.forumBody);
               expect(response.body[newestInputIndex-1]).to.have.property('forumID', inputData.forumID);
           })
        });
    });
})

