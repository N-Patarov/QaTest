describe('Test Four', () => {

    before(() => {
      cy.visit('https://mind-wend-913065.framer.app'); 
      
    })

    it('Should display visit button on each card', () => {
        cy.get('.framer-15kr31b-container > .framer-WalAV > .framer-1892sln > .framer-1gmmtpa > .framer-styles-preset-kqguaa > span')
        .click(); 
        cy.url().should('include', '/components')

        cy.scrollTo('bottom',{ duration: 1000 })
        cy.get('[data-framer-name="Footer"] [method="POST"] [type="submit"]')
        .should('be.visible')
        .should('have.css', 'background-color', 'rgb(255, 82, 79)');
      });
  });