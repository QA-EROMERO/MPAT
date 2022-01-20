describe('TC015 Remitente', () => {

    it('Remitente', () =>{
        cy.LogIn()
        //..Constantes        
        const MTE = 'Remitente'
        const Remitente = 'MPAT_Remitente 1'
        const Descripcion = 'Desc. MPAT_Remitente 1'
        const Contraseña = 'P@ssw0rd'
        

        //..Búsqueda del mantenimiento
        cy.MTESearch(MTE,0)
        cy.wait(28000)

        cy.log('Click Botón "Agregar" Remitente')
        //cy.ObjectSearchDebug('a[id^=button-][class="x-btn x-unselectable x-box-item x-toolbar-item x-btn-soft-base-small"]')
        //cy.ObjectSearchDebug('a[id^=button-]')
        cy.ObjectSearch('a[id^=button-]',8)
        .click()

        cy.wait(6000)

        //..Ingreso del Remitente
        cy.wait(3000)
        cy.log('Remitente')
        cy.get('textarea[name="mp_emailsender-EMAIL"]')
        .type(Remitente)

        //..Ingreso de la Descripción
        cy.wait(3000)
        cy.log('Descripción')
        cy.get('textarea[name="mp_emailsender-DESCRIPTION"]')
        .type(Descripcion)

        //..Ingreso de la Descripción
        cy.wait(3000)
        cy.log('Contraseña')
        cy.get('input[name="mp_emailsender-PASS"]')
        .type(Contraseña)
        
       
        //..Guardar y cerrar el mantenimiento
        cy.wait(3000)
        cy.SaveAndClose()
    })

})