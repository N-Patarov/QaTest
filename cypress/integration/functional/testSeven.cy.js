describe('Test Seven', () => {

    before(() => {
      cy.visit('https://mind-wend-913065.framer.app'); 
      cy.viewport('iphone-6');
    })

    it('Should display "Get the App" and "Watch Video" one above the other',() => {
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
  });