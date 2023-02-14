// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("login",(email,password) => {
    cy.visit("http://www.google.com")
    cy.get("input[type=Email]").type(email)
    cy.get("input[type=Password]").type(password)
    cy.get("input[type=Submit]").click()
    
})

// then after adding the commands we can user these for actual testing 
// if you are needed the again and again login in these condition you can use this.

// is use as ==> cy.login(enter email value,enter password value)
 