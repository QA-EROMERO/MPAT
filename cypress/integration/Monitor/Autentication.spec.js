//..Comando que se debe ejecutar
//..npm run cypress:open

describe('Autenticación', () => {
    it('LogIn', () => {
        
        //.. Se invoca la función LogIn que se encuentra en el archivo
        //..commands.js
        cy.LogIn()
    })

})