describe('Cola de Datos', () => {
    
    it('Cola de Datos Default', () => {
        cy.LogIn()
        //..Constantes
        const MTE = 'Cola de Datos'
        const Nombre = 'MPAT_Cola de Datos Default'
        const Descripcion = 'Desc. MPAT_Cola de Datos Default'

        //..Función búsqueda de mantenimiento
        //..Se envía el nombre del mantenimiento
        //..y el número de Tarjeta que se desea dar click
        cy.MTESearch(MTE,0)


        cy.wait(28000)
        cy.log('Click en Botón "Agregar"')
        //cy.ObjectSearchDebug('a[id^=button-]')
        cy.ObjectSearch('a[id^=button-]',8)
        .click()
        cy.log('Nombre')

        //..Antes de cada type() hay que poner un wait de 3 seg.
        cy.wait(3000)
        cy.ObjectSearch('input[id^=ext-]',0)
        .type(Nombre)

        //..Antes de cada type() hay que poner un wait de 3 seg.
        cy.wait(3000)
        cy.log('Descripción')
        cy.ObjectSearch('textarea[id^=ext-]',0)
        .type(Descripcion)

        //..Invoca la función para Guardar y Cerrar el MTE
        cy.SaveAndClose()

    })
    
})