import Subscribe from "./Subscribe"

describe("Subscribe", () => {

    beforeEach(() => {

        cy.intercept("POST", "/api/subscribe", {

            //mock the  success response
            body: {
                message: "Success: tom@example.com has been sucessfully subscribed",
            },
            
        }).as('emailSubscribe');

    } )
 
   it("contains the correct placeholder text", () => {
    cy.mount(<Subscribe/>)
    cy.get("input").should("have.attr", "placeholder", "Subscribe for Updates")

})

it("contains the correct placeholder text", () => {
    cy.mount(<Subscribe/>)

    cy.getBySel("email-input").type("tom@example.com")
    cy.getBySel("submit-button").click()

    //wait for the intercept to complete
    cy.wait('@emailSubscribe')

    cy.getBySel("success-message").should("exist").contains("tom@example.com")

})

/*
 cy.intercept("POST", "/api/subscribe", {

            //mock the  success response
            body: {
                message: "Error: john@example.com already exists. Please use a different email address.",
            },
            
        }).as('unableSubscribe')

 it("does NOT allow already subscribed email addresses", () => {
        cy.mount(<Subscribe/>)
  
        cy.getBySel("email-input").type("john@example.com")
        cy.getBySel("submit-button").click()

         //wait for the intercept to complete
       cy.wait('@unableSubscribe')
     
     cy.getBySel("server-error-message")
     .should("exist")
     .contains(
         "Error : john@example.com already exists. Please use a different email address."
     )

     cy.getBySel("success-message").should("exist").contains("tom@example.com")

    })

*/

})