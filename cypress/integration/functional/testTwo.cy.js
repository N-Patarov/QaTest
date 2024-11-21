describe('Test Two', () => {

    before(() => {
      cy.visit('https://mind-wend-913065.framer.app'); 
    })

    it('Should contain 4 questions', () => {
        cy.get('.framer-1g3amks-container > .framer-WalAV > .framer-1892sln > .framer-1gmmtpa > .framer-styles-preset-kqguaa > span')
        .click(); 
        cy.url().should('include', '/pricing')

        cy.get('div.framer-eabl6y').scrollIntoView().should("be.visible")
        cy.get('div.framer-eabl6y > div')
        .its('length').then((count) => {
            expect(count).to.equal(4); 
        })
    })
  });