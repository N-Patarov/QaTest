describe('Test Six', () => {

    before(() => {
      cy.visit('https://mind-wend-913065.framer.app'); 
      
    })

    it('Should display the Updates', () => {
        cy.get('.framer-7hrpx3-container > .framer-WalAV > .framer-1892sln > .framer-1gmmtpa > .framer-styles-preset-kqguaa > span')
        .click(); 
        cy.url().should('include', '/updates')
    })
  });