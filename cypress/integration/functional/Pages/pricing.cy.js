describe('Pricing Page', () => {

    before(() => {
      cy.visit('https://mind-wend-913065.framer.app'); 
      
      cy.get('.framer-1g3amks-container > .framer-WalAV > .framer-1892sln > .framer-1gmmtpa > .framer-styles-preset-kqguaa > span')
      .should('be.visible')
      .click(); 

    })

    beforeEach(() => {
        cy.reload();
    });

    it('Should display products currency symbols as $ on the Pricing page', () => {
      cy.get('div.framer-5fq1xp.price span') 
        .each(($price) => {
          cy.wrap($price).should('contain.text', '$').should('be.visible');
        });
    });

    it('Should contain 4 questions', () => {
        cy.get('div.framer-eabl6y').scrollIntoView().should("be.visible")
        cy.get('div.framer-eabl6y > div')
        .its('length').then((count) => {
            expect(count).to.equal(4); 
        })
    })
  });