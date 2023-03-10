//here is adding the cypress reference to understand the vscode 

// unit testing is the smallest test of feature  
// integration is the combination of many small feature 
// e2e means the bigger picture of feature set of end user 


///<reference types="cypress"/> 

describe("Counter Tests", () => {
 
    beforeEach(()=>{cy.visit("http://localhost:5173")})

    it("is should be open browser",()=> {
        cy.visit("http://localhost:5173")
    })

    it("working the plus button",()=> {
        // cy.visit("http://localhost:5173")
        cy.get("button#plus")
        .type("{enter}")//else we can use click also
        cy.get(".counterHeader").should('exist')  //should is most powerfull part to check assertion
        .should("have.text","count is 1")

        // cy.get('button#plus').click()
        // cy.get('h3.counterHeader').contains(2)
    })

    it("working the minus button",()=> {
        // cy.visit("http://localhost:5173")
        cy.get("button#minus")
        .type("{enter}")
        cy.get(".counterHeader")
        .should("have.text","count is -1")
    });

    it("should have the green color in positive button",()=>{
        // cy.get('button#plus').should('have.css','background-color','rgb(0, 128, 0)')
        cy.get('button#plus').should('have.css',{backgroundColor:'green'})
        //if you want the many css field then use .and 
        // ex==> {
        //     cy.get('.ex').should('have.css','color','jfljlk')
        //     .and(have.css,width,67676px)
        //     .and(have.css,padding,6px)
        // }
    });

    it("should have the red color in minus button",()=>{
        cy.get('button#minus').should('have.css','background-color','rgb(255, 0, 0)')
        //if you check the color then use rgba format
        // cy.get('button#minus').should('have.css',{backgroundColor:'red'})
    });


 // to start the json-server user command --> npx json-server db.json --port 8080 --watch
 // if error then install json-server globally --> npm install -g json-server
 // and run -->  json-server db.json --port 8080 --watch

    it("Checking api Request Functionality" , () => {
        
        //checking get request of API
        cy.intercept("GET","http://localhost:8080/counter" , {
            value:"check Value",//added value to check function is working or not
        }).as("counterReq");
        cy.get('.dataValue').contains('check Value')


        // checking post request of API
        cy.intercept("POST","http://localhost:8080/counter").as("counterReq")
        cy.get(".dataValue").click();
        cy.wait('@counterReq')

        cy.end();
        //end is use to ending these particular test Cases
    });

});