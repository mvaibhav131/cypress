 
/// <reference types="cypress" />
  

 describe("Todo TestCases",()=>{
    beforeEach(()=> {
        cy.visit("https://example.cypress.io/todo")
    });

    it("Should check the basic stricture",()=>{
        cy.get('.new-todo').should('exist');
        cy.get('.todo-count').should('exist');
        cy.get('.filters').should('exist');
    });

   
    it("Check number of item is already in todo list",()=>{
        cy.get('ul.todo-list li').should('have.length',2)
        // cy.get('.todo-list').children().should('have.length',2) //by using the children word
    })

    it("Check first and last in the list",()=>{
        cy.get('ul.todo-list li').first().should('have.text','Pay electric bill');
        cy.get('ul.todo-list li').last().should('have.text',"Walk the dog")

    })


   it('Should have add new todo and after addding new todo check is in the last and increase length' ,()=> {
    cy.get('.new-todo').type("Vaibhav{enter}")
    cy.get('ul.todo-list li').last().should('have.text',"Vaibhav");
    cy.get('ul.todo-list li').should('have.length',3);
    // cy.get('.todo-list').children().should('have.length',3);
  });

  it('checking the delete of task',()=>{
    cy.contains('Pay electric bill').parent().find('input[type=checkbox]').check()
    cy.get('.todo-count').should('have.text',"1 item left")
  })

 })