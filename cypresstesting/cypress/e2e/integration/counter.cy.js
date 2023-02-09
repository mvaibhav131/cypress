
describe("Counter Tests", () => {
 
    beforeEach(()=>{cy.visit("http://localhost:5173")})

    it("is should be open browser",()=> {
        cy.visit("http://localhost:5173")
    })

    it("working the plus button",()=> {
        // cy.visit("http://localhost:5173")
        cy.get("#plus")
        .type("{enter}")
        cy.get(".counterHeader")
        .should("have.text","count is 1")
    })

    it("working the minus button",()=> {
        // cy.visit("http://localhost:5173")
        cy.get("#minus")
        .type("{enter}")
        cy.get(".counterHeader")
        .should("have.text","count is -1")
    })
})