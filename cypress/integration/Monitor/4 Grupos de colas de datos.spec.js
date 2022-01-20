describe('Grupos de colas de datos', () => {
    
    it('Grupos de colas de datos', () => {
        cy.LogIn()
        //..Constantes
        const MTE = 'Grupos de colas de datos'
        const Nombre = 'MPAT_Grupos de colas de datos 1'
        const Descripcion = 'Desc. ' + Nombre
        
        //..Función búsqueda de mantenimiento
        //..Se envía el nombre del mantenimiento
        //..y el número de Tarjeta que se desea dar click
        cy.MTESearch(MTE,0)


        cy.wait(18000)
        cy.log('Click en Botón "Agregar"')
        //cy.ObjectSearchDebug('a[id^=button-]')
        cy.ObjectSearch('a[id^=button-]',8)
        .click()


        cy.log('Nombre')
        //..Antes de cada type() hay que poner un wait de 3 seg.
        cy.wait(3000)
        cy.get('input[name="mp_groupdataqueue-NAME"]')
        .type(Nombre)

        //..Antes de cada type() hay que poner un wait de 3 seg.
        cy.wait(3000)
        cy.log('Descripción')
        cy.get('textarea[name="mp_groupdataqueue-DESCRIPTION"]')
        .type(Descripcion)

        //..Invoca la función para Guardar y Cerrar el MTE
        cy.SaveAndClose()

    })
    
})