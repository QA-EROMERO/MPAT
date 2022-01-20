describe('Extensión de archivo', () => {
    
    it('Extensión de archivo', () => {
        cy.LogIn()
        //..Constantes
        const MTE = 'Extensión de archivo'
        const nombreDeExtension = '.MPAT'
        const descripcionDeExtension = 'Desc. .MPAT'

        cy.MTESearch(MTE,0)

        cy.wait(28000)
        cy.log('Click en Botón "Agregar"')
        cy.ObjectSearch('a[id^=button-]',8)
        .click()

        cy.wait(4000)
        cy.log('Nombre')
        cy.get('input[name="Extension-NAME"]')
        .type(nombreDeExtension)

        cy.wait(2000)
        cy.log('Descripción')
        cy.get('textarea[name="Extension-DESCRIPTION"]')
        .type(descripcionDeExtension)

        cy.wait(2000)
        cy.log('Save and Close')
        cy.SaveAndClose()
    })
    
})