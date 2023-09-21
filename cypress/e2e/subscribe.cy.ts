describe('template sp', () => {
    beforeEach(()=> {
      cy.visit('http://localhost:3001')
  
    })


    it("allows users to subscribe to the email list", () => {
      cy.getByData("email-input").type ("aotest123hoot@yahoo.com")
      cy.getByData("submit-button").click()
      cy.getByData("success-message").should("exist").contains("aotest123hoot@yahoo.com")
    })


    it("does NOT allow an invalid email address", () => {
      cy.getByData("email-input").type ("invalidEmail")
      cy.getByData("submit-button").click()
      cy.getByData("success-message").should("not.exist")
    })

    it("deny users already subscribed from sign up", () => {
      cy.getByData("email-input").type ("john@example.com")
      cy.getByData("submit-button").click()
      cy.getByData("server-error-message").should("exist")
   
  
    })


    })