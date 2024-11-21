describe('Test Three', () => {

    before(() => {
      cy.visit('https://mind-wend-913065.framer.app'); 
      
    })

    it('Should display visit button on each card', () => {
        cy.get('.framer-15kr31b-container > .framer-WalAV > .framer-1892sln > .framer-1gmmtpa > .framer-styles-preset-kqguaa > span')
        .click(); 
        cy.url().should('include', '/components')

        cy.get('span').contains('Many types of components to customize')
        .scrollIntoView({duration: 2000})
        .should('be.visible')
        cy.get('[name="Section"]').scrollIntoView({duration: 1000}) // just so the buttons show up
        cy.get('.visit-button').each((visitButton) =>  {cy.get(visitButton).should('be.visible')})
      });
  });