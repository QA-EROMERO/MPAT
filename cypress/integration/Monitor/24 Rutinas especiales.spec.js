describe('TC014 Rutinas especiales', () => {
    
    it('Rutina especial', () => {
        cy.LogIn()
        //..Constantes
        const MTE = 'Rutinas especiales'
        const Nombre = 'MPAT_Rutina especial 1'
        const Descripcion = 'Desc. MPAT_Rutina especial 1'
        

        cy.MTESearch(MTE,0)

        cy.wait(28000)
        cy.log('Click en Botón "Agregar"')
        //cy.ObjectSearchDebug('a[id^=button-]') //8,10
        cy.ObjectSearch('a[id^=button-]',8)
        .click()

        //..MANERA SENCILLA
        cy.log('Nombre')
        cy.wait(3000)
        cy.ObjectSearch('input[id$=-inputEl]',1)
        .type(Nombre)


        cy.log('Descripción')
        cy.wait(3000)
        cy.ObjectSearch('textarea[id^=ext-]',0)
        .type(Descripcion)


        cy.wait(2000)
        cy.log('Save and Close')
        cy.SaveAndClose()
    })
    
})