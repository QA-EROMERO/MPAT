describe('TC023 Expiracion de registro', () => {

    //..Mantenimiento Expiracion de registro
    it('Expiracion de registro', () =>{
        cy.LogIn()
        
        //..Constantes
        const MTE = 'Expiracion de registro'
        const Registro = '2550'
        const Descripcion = 'Desc. MPAT_Expiracion de registro'
        const diaMes = '6'
        const hora = '15'
        const totalDias = '31'

        cy.MTESearch(MTE,0)
        cy.wait(28000)

        cy.log('Click Botón "Agregar" Expiracion de registro')
        cy.ObjectSearch('a[id^=button-]',8)
        .click()

        cy.wait(6000)

        cy.wait(3000)
        cy.log('Registro: Click en el botón de búsqueda avanzada')
        cy.ObjectSearch('div[id$=-trigger-search]',1)
        .click()

        cy.wait(3000)
        cy.log('Digitar codigo de Registro')
        cy.ObjectSearch('input[id^=numberfield-]',0)
        .type(Registro)

        cy.log('Seleccionar primer resultado de la grid')
        cy.ObjectSearch('div[class="x-grid-cell-inner "]',0)
        .click()

        cy.wait(1000)
        cy.log('Click en el botón "Aceptar"')
        cy.ObjectSearch('span[id^=button-]',29)
        .click()
        
        cy.wait(3000)
        cy.log('Digitar Descripcion')
        cy.get('textarea[name="mp_recordexpire-DESCRIPTION"]')
        .type(Descripcion)

        cy.wait(3000)
        cy.log('Digitar dia del mes')
        cy.get('input[name="mp_recordexpire-DAYOFMONTH"]')
        .type(diaMes)
        
        cy.wait(3000)
        cy.log('Digitar hora a ejecutar')
        cy.get('input[name="mp_recordexpire-TIMETOEXECUTE"]')
        .type(hora)

        cy.wait(3000)
        cy.log('Digitar total de dias')
        cy.get('input[name="mp_recordexpire-TOTALDAYS"]')
        .type(totalDias)

        cy.wait(3000)
        cy.SaveAndClose()
    })
})