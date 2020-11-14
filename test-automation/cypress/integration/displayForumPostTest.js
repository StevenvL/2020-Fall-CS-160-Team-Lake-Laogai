describe("Enter Health Forum", ()=>{
	it("forum main successfully loaded", ()=>{
		cy.visit("http://localhost:3000/forums");
	})
	it("category Health successfully loaded", ()=>{
		cy.get('.Health').click();
		cy.url().should("eq", "http://localhost:3000/forums/Health");
	})
})

describe("Post Display", ()=>{
	it("click on first read more", ()=>{
		cy.contains("Read more").click();
	})
	it("check components", ()=>{
		cy.get(".user-info");
		cy.get(".post-info");
		cy.contains("Read other forums");
		cy.contains("Read other posts");
		cy.get(".comment")
	})
}) 

describe("Comment", ()=>{
	before(()=>{
		cy.get(".comment").click();
	})
	it("add comment", ()=>{
		cy.get(".commentForm")
		cy.get(".comment-field");
		cy.get(".comment-submit");
	})
})
describe("Go back to main", ()=>{
	it("go back to other post display in Health", ()=>{
		cy.contains("Read other posts").click();
		cy.url().should("eq", "http://localhost:3000/forums/Health");
	})
	it("check if read another forum button exist", ()=>{
		cy.get(".readAnotherForum").should("exist");
	})
	it("Click the button and redirect to main", ()=>{
		cy.contains("Read another forum").click()
		cy.url().should("eq", "http://localhost:3000/forums")
	})
})
