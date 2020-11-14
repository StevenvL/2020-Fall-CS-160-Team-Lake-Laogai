let categories=["Health", "Recipe", "Random", "Memes"];

describe("Enter Forum", ()=>{
	it("successfully loaded", ()=>{
		cy.visit("http://localhost:3000/forums");
	})
	it("Check categories elements mounted", ()=>{
		cy.get(".forumCard").each((value, index, collection)=>{
			cy.get(`\.${categories[index]}`).should("exist");
		})
	})
	it("Check if all category links are working", ()=>{
		cy.get(".forumCard").each((value, index, collection)=>{
			cy.get(`\.${categories[index]}`).click();
			cy.url().should("eq", `http://localhost:3000/forums/${categories[index]}`);
			cy.go("back");
		})
	})
})