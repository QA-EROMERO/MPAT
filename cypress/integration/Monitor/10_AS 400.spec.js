describe('AS 400', () => {
    
    it('AS 400', () => {
        cy.LogIn()
        //..Constantes
        const MTE = 'AS 400'
        const Nombre = 'MPAT_AS 400'
        const driverODBC = 'MPAT_Driver ODBC'
        const libreria = 'MPAT_Librería'
        const sesionDeComunicacion = 'MPAT_Sesión de Comunicación'
        const colaDeDatos = 'MPAT_Cola de Datos'
        const usuario = 'MPAT_Usuario 1'
        const contraseña = '1234567890'
        const descripcion = 'MPAT_Descripción'

        cy.MTESearch(MTE,0)

        cy.wait(28000)
        cy.log('Click en Botón "Agregar"')
        //cy.ObjectSearchDebug('a[id^=button-]') //8,10
        cy.ObjectSearch('a[id^=button-]',8)
        .click()

        cy.wait(3000)
        cy.log('Nombre')
        cy.get('input[name="mp_as400queue-NAME"]')
        .type(Nombre)

        cy.wait(3000)
        cy.log('Driver ODBC')
        cy.get('input[name="mp_as400queue-DRIVERODBC"]')
        .type(driverODBC)

        cy.wait(3000)
        cy.log('Librería')
        cy.get('input[name="mp_as400queue-LIBRARY"]')
        .type(libreria)

        cy.wait(3000)
        cy.log('Sesión de comunicación')
        cy.get('input[name="mp_as400queue-COMMUNICATIONSESSION"]')
        .type(sesionDeComunicacion)

        cy.wait(3000)
        cy.log('Cola de Datos')
        cy.get('input[name="mp_as400queue-DATAQUEUE"]')
        .type(colaDeDatos)

        cy.wait(3000)
        cy.log('Usuario')
        cy.get('input[name="mp_as400queue-USERODBC"]')
        .type(usuario)

        cy.wait(3000)
        cy.log('Contraseña')
        cy.get('input[name="mp_as400queue-PASSWORD"]')
        .type(contraseña)

        cy.wait(3000)
        cy.log('Descripción')
        cy.get('textarea[name="mp_as400queue-DESCRIPTION"]')
        .type(descripcion)

        cy.wait(2000)
        cy.log('Save and Close')
        cy.SaveAndClose()
    })
    
})