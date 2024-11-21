describe('Test Eight', () => {

    before(() => {
      cy.visit('https://mind-wend-913065.framer.app'); 
      cy.viewport(1920,1080);
    })

    it('Should display 3d animations after clicking on "click ot view in 3d" button',() => {
        cy.wait(1000); 
        cy.get('.framer-c1p3py-container.hidden-1wv4xmw.hidden-1o9hupe')
        .realHover()
        cy.get('span').contains('Click to view in 3D').should('be.visible').click()
        cy.get('iframe').should('be.visible')
       
      })
  });