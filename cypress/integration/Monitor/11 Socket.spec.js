describe('Socket', () => {
    
    it('Socket', () => {
        cy.LogIn()
        //..Constantes
        const MTE = 'Socket'
        const Nombre = 'MPAT_Socket 1'
        const Host = 'MPAT_Host 1'
        const Puerto = '3783'
        const Descripcion = 'Desc. MPAT_Host 1'

        cy.MTESearch(MTE,0)

        cy.wait(28000)
        cy.log('Click en Botón "Agregar"')
        //cy.ObjectSearchDebug('a[id^=button-]') //8,10
        cy.ObjectSearch('a[id^=button-]',8)
        .click()

        cy.wait(3000)
        cy.log('Nombre')
        cy.get('input[name="mp_socket-NAME"]')
        .type(Nombre)

        cy.wait(3000)
        cy.log('Host')
        cy.get('input[name="mp_socket-HOST"]')
        .type(Host)

        cy.wait(3000)
        cy.log('Puerto')
        cy.get('input[name="mp_socket-PORT"]')
        .type(Puerto)

        cy.wait(3000)
        cy.log('ACK')
        cy.get('input[name="mp_socket-ACK"]')
        .click()

        cy.wait(3000)
        cy.log('Descripción')
        cy.get('textarea[name="mp_socket-DESCRIPTION"]')
        .type(Descripcion)



        cy.wait(2000)
        cy.log('Save and Close')
        cy.SaveAndClose()
    })
    
})