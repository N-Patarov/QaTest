describe('Home Page', () => {
    before(() => {
        cy.visit('https://mind-wend-913065.framer.app'); 
        
      })
  
      beforeEach(() => {
        cy.viewport(1920, 1080);
          cy.reload()
      });

     
      it('Should blur the background after clicking "GET THE APP" button', () => {
        cy.scrollTo('top',{duration: 1000})
        cy.get('.get-app-button')
        .should('be.visible')
        .click()
        cy.get('[id="overlay"]  .framer-vrqh0x')
        .should('have.css', 'backdrop-filter')
        .and('contain', 'blur');
      })

      it('Should display "Get the App" and "Watch Video" one above the other',() => {
        cy.viewport('iphone-6');
        cy.get('.get-app-button').should('be.visible')
        cy.get('.watch-video-button').should('be.visible')
  
        cy.get('.get-app-button').then(($getAppButton)=>{
            const getAppTop =  $getAppButton[0].getBoundingClientRect().top;
        
            cy.get('.watch-video-button').then(($watchVideoButton)=>{
                const watchVideoTop =  $watchVideoButton[0].getBoundingClientRect().top;
                expect(getAppTop).to.be.lessThan(watchVideoTop);
            })
        })
      })

    it('Should display 3d animations after clicking on "click ot view in 3d" button',() => {
      cy.wait(1000); 
      cy.get('.framer-c1p3py-container.hidden-1wv4xmw.hidden-1o9hupe')
      .realHover()
      cy.get('span').contains('Click to view in 3D').should('be.visible').click()
      cy.get('iframe').should('be.visible')
     
    })
})