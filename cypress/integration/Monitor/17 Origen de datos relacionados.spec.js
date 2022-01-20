describe('Origen de datos relacionados', () => {
    
    it('Origen de datos relacionados', () => {
        cy.LogIn()
        //..Constantes
        const MTE = 'Origen de datos relacionados'
        const Codigo = '378'
        const Nombre = 'MPAT_Origen de datos relacionados 1'
        const Descripcion = 'Desc. MPAT_Origen de datos relacionados 1'

        cy.MTESearch(MTE,0)

        cy.wait(28000)
        cy.log('Click en Botón "Agregar"')
        //cy.ObjectSearchDebug('a[id^=button-]') //8,10
        cy.ObjectSearch('a[id^=button-]',8)
        .click()
        
        cy.wait(3000)
        cy.log('Código')
        cy.get('input[name="mp_relateddatasource-CODE"]')
        .type(Codigo)

        cy.wait(3000)
        cy.log('Nombre')
        cy.get('input[name="mp_relateddatasource-NAME"]')
        .type(Nombre)

        cy.wait(3000)
        cy.log('Descripción')
        cy.get('textarea[name="mp_relateddatasource-DESCRIPTION"]')
        .type(Descripcion)


        cy.wait(2000)
        cy.log('Save and Close')
        cy.SaveAndClose()
    })
    
})