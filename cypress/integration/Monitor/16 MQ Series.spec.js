describe('MQ Series', () => {
    
    it('MQ Series', () => {
        cy.LogIn()
        //..Constantes
        const MTE = 'MQ Series'
        const Nombre = 'MPAT_MQ Series 1'
        const nombreDeCola = 'MPAT_Cola MQ Series 1'
        const nombreAdministradorDeCola = 'MPAT_Administrador de Cola 1'
        const Descripcion = 'Desc. MPAT_MQ Series 1'
        const tipoDeConexion = 'Client' //..Validar cuál es el mantenimiento
        const nombreDelHost = 'MPAT_Host 1'
        const nombreDelCanal = 'MPAT_Canal 1'
        const complemento1 = 'MPAT_Complemento 1'
        const complemento2 = 'MPAT_Complemento 2'

        cy.MTESearch(MTE,0)

        cy.wait(28000)
        cy.log('Click en Botón "Agregar"')
        //cy.ObjectSearchDebug('a[id^=button-]') //8,10
        cy.ObjectSearch('a[id^=button-]',8)
        .click()

        cy.wait(6000)
        cy.log('Nombre')
        cy.get('input[name="mp_mqseries-NAME"]')
        .type(Nombre)


        cy.wait(3000)
        cy.log('Nombre de Cola')
        cy.get('input[name="mp_mqseries-QUEUENAME"]')
        .type(nombreDeCola)


        cy.wait(3000)
        cy.log('Nombre Administrador de Cola')
        cy.get('input[name="mp_mqseries-QUEUEMANAGER"]')
        .type(nombreAdministradorDeCola)

        cy.wait(3000)
        cy.log('Descripción')
        cy.get('textarea[name="mp_mqseries-DESCRIPTION"]')
        .type(Descripcion)

        //..Tipo de conexión
        //.. Hace falta Investigar cuál es el mantenimiento
        cy.wait(2000)
        cy.log('Tipo de conexión: Click en el botón de búsqueda avanzada')
        cy.ObjectSearch('div[id$=-trigger-search]',1)
        .click()
        
        cy.wait(2000)
        cy.log('Campo de agrupamiento')
        cy.ObjectSearch('input[id^=numberfield-]',0)
        .type(tipoDeConexion)

        cy.log('Seleccionar primer resultado de la grid')
        cy.ObjectSearch('div[class="x-grid-cell-inner "]',0)
        .click()

        cy.wait(1000)
        cy.log('Click en el botón "Aceptar"')
        cy.ObjectSearch('a[id^=button-]',9)
        .click()

        cy.wait(3000)
        cy.log('Nombre del host')
        cy.get('input[name="mp_mqseries-HOSTNAME"]')
        .type(nombreDelHost)
        

        cy.wait(3000)
        cy.log('Nombre del Canal')
        cy.get('input[name="mp_mqseries-CHANNELNAME"]')
        .type(nombreDelCanal)


        cy.wait(3000)
        cy.log('Nombre del Canal')
        cy.get('input[name="mp_mqseries-COMPLEMENT1"]')
        .type(complemento1)

        cy.wait(3000)
        cy.log('Nombre del Canal')
        cy.get('input[name="mp_mqseries-COMPLEMENT2"]')
        .type(complemento2)
        

        cy.wait(2000)
        cy.log('Save and Close')
        cy.SaveAndClose()
    })
    
})