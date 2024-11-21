describe('Components Page', () => {

    before(() => {
      cy.visit('https://mind-wend-913065.framer.app'); 
      cy.get('.framer-15kr31b-container > .framer-WalAV > .framer-1892sln > .framer-1gmmtpa > .framer-styles-preset-kqguaa > span')
      .should('be.visible')
      .click(); 

    })

    beforeEach(() => {
        cy.reload();
    });

    it('Should display visit button on each card', () => {
      cy.get('span').contains('Many types of components to customize')
      .scrollIntoView({duration: 2000})
      .should('be.visible')
      cy.get('[name="Section"]').scrollIntoView({duration: 1000}) // just so the buttons show up
      cy.get('.visit-button').each((visitButton) =>  {cy.get(visitButton).should('be.visible')})
    });
    it('Should display "Sing Up" buttons color as rgb(255,82,79)',() => {
        cy.scrollTo('bottom',{ duration: 1000 })
        cy.get('[data-framer-name="Footer"] [method="POST"] [type="submit"]')
        .should('be.visible')
        .should('have.css', 'background-color', 'rgb(255, 82, 79)');
    })
    
  });