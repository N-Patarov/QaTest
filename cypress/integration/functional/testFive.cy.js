describe('Test Five', () => {

    before(() => {
      cy.visit('https://mind-wend-913065.framer.app'); 
      
    })

    it('Should blur the background after clicking "GET THE APP" button', () => {
        cy.get('.get-app-button')
        .should('be.visible')
        .click()
        cy.get('[id="overlay"]  .framer-vrqh0x')
        .should('have.css', 'backdrop-filter')
        .and('contain', 'blur');
      })
  });