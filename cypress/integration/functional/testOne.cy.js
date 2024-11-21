describe('Test One', () => {

    before(() => {
      cy.visit('https://mind-wend-913065.framer.app'); 
    })

    it('Should display products currency symbols as $ on the Pricing page', () => {

      cy.get('.framer-1g3amks-container > .framer-WalAV > .framer-1892sln > .framer-1gmmtpa > .framer-styles-preset-kqguaa > span')
      .click(); 
      cy.url().should('include', '/pricing')
      cy.get('div.framer-5fq1xp.price span') 
        .each(($price) => {
          cy.wrap($price).should('contain.text', '$').should('be.visible');
        });
    });

  });