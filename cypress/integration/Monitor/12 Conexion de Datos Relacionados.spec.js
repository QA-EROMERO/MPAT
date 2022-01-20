describe('Conexión de Datos Relacionados', () => {
    
    it('Conexión de Datos Relacionados', () => {
        cy.LogIn()
        //..Constantes
        const MTE = 'Conexión de Datos Relacionados'
        const Nombre = 'MPAT_Conexión de Datos Relacionados 1'
        const Descripcion = 'Desc. MPAT_Conexión de Datos Relacionados 1'

        cy.MTESearch(MTE,0)

        cy.wait(28000)
        cy.log('Click en Botón "Agregar"')
        //cy.ObjectSearchDebug('a[id^=button-]') //8,10
        cy.ObjectSearch('a[id^=button-]',8)
        .click()

        cy.wait(3000)
        cy.log('Nombre')
        cy.get('input[name="mp_labelconnection-NAME"]')
        .type(Nombre)

        cy.wait(3000)
        cy.log('Descripción')
        cy.get('textarea[name="mp_labelconnection-DESCRIPTION"]')
        .type(Descripcion)

        cy.wait(2000)
        cy.log('Save and Close')
        cy.SaveAndClose()
    })
    
})