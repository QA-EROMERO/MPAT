describe('Identificador de búsqueda datos relacionados', () => {
    
    it('Identificador de búsqueda datos relacionados', () => {
        cy.LogIn()
        //..Constantes
        const MTE = 'Identificador de búsqueda datos relacionados'
        const Nombre = 'MPAT_Identificador de búsqueda de datos relacionados 1'
        const Descripcion = 'Desc. MPAT_Identificador de búsqueda de datos relacionados 1'
        const Perfil = ''

        cy.MTESearch(MTE,0)

        cy.wait(28000)
        cy.log('Click en Botón "Agregar"')
        //cy.ObjectSearchDebug('a[id^=button-]') //8,10
        cy.ObjectSearch('a[id^=button-]',8)
        .click()

        //.. Presionar el botón Guardar para que no de error
        cy.log('Click Botón Guardar')
        cy.ObjectSearch('a[id^=floatingbutton-]',1)
        .click()
    



        cy.wait(3000)
        cy.log('Nombre')
        cy.get('input[name="mp_identifiersearch-NAME"]')
        .type(Nombre)

        cy.wait(3000)
        cy.log('Descripción')
        cy.get('textarea[name="mp_identifiersearch-DESCRIPTION"]')
        .type(Descripcion)

        //.. FALTA SELECCIONAR EL PERFIL
        //.. Este perfil se crea desde el FormManager

        cy.wait(2000)
        cy.log('Save and Close')
        cy.SaveAndClose()
    })
    
})