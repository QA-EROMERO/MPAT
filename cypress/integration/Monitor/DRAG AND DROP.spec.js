describe('DRAG AND DROP', () => {
    
    it('DRAG AND DROP', () => {
        cy.visit('https://seleniumeasy.com/test/drag-and-drop-demo.html')

        cy.ObjectSearch('span',0)
        //.drag('div[id=mydropzone]')
        .move({x:20, y:20})
    })
    
})