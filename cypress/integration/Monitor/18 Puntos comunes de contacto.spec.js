describe('Puntos comunes de contacto', () => {
    
    it('Puntos comunes de contacto', () => {
        cy.LogIn()
        //..Constantes
        const MTE = 'Puntos comunes de contacto'
        const Nombre = 'MPAT_Puntos comunes de contacto 1'
        const Tener = '7'
        const Meses = '18'
        const Descripcion = 'Desc. MPAT_Puntos comunes de contacto 1'

        cy.MTESearch(MTE,0)

        cy.wait(28000)
        cy.log('Click en Botón "Agregar"')
        //cy.ObjectSearchDebug('a[id^=button-]') //8,10
        cy.ObjectSearch('a[id^=button-]',8)
        .click()
        
        cy.wait(3000)
        cy.log('Nombre')
        cy.get('input[name="mp_lcc_configuration-NAME"]')
        .type(Nombre)

        cy.wait(3000)
        cy.log('Tener')
        cy.get('input[name="mp_lcc_configuration-HAVING"]')
        .type(Tener)

        cy.wait(3000)
        cy.log('Meses')
        cy.get('input[name="mp_lcc_configuration-TIMEMONTHS"]')
        .type(Meses)

        cy.wait(3000)
        cy.log('Descripción')
        cy.get('textarea[name="mp_lcc_configuration-DESCRIPTION"]')
        .type(Descripcion)


        cy.wait(2000)
        cy.log('Save and Close')
        cy.SaveAndClose()
    })
    
})