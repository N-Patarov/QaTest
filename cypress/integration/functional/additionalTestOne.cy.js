describe('Aditional Test One', () => {

    before(() => {
      cy.visit('https://mind-wend-913065.framer.app'); 
    })

    it('Should display the logos of "Trusted by" companies in the Homepage',() => {
      cy.get('.framer-es2yhr > .framer-1ds12ux').scrollIntoView({duration: 1000})
      cy.get('.framer-kz79j9 img').each((logo) =>  {cy.get(logo).should('be.visible')})
      })
  });