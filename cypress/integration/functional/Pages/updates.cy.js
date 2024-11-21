describe('Updates Page', () => {

    before(() => {
      cy.visit('https://mind-wend-913065.framer.app'); 
      
      cy.get('.framer-7hrpx3-container > .framer-WalAV > .framer-1892sln > .framer-1gmmtpa > .framer-styles-preset-kqguaa > span')
      .should('be.visible')
      .click(); 

    })

    beforeEach(() => {
        cy.reload();
    });

    it('Should display the Updates', () => {
        cy.url().should('include', '/updates')
    })
  });