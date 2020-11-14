let comment="This is a very very very very long comment that is about this really super duper awesome post.";
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
		cy.get(".comment-field").type(comment).should('have.value', comment);
		cy.get(".comment-submit").click();
	})
	it("check comment is added", ()=>{
		cy.get(".comment-display").last().contains(comment)
	})
})
describe("Go back to main forum", ()=>{
	it("Click the button and redirect to main", ()=>{
		cy.contains("Read other forum").click()
		cy.url().should("eq", "http://localhost:3000/forums")
	})
})