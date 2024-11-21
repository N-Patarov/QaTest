describe('Aditional Test One', () => {

    before(() => {
      cy.visit('https://mind-wend-913065.framer.app');
      cy.viewport('iphone-6')
    })

    it('Should display a hmburger menu in the header',() => {
        cy.get('[data-framer-name="Hamburger"]').should('be.visible')
    })
  });