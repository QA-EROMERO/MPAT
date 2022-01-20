describe('Puntos comunes de contacto', () => {
    
    it('Registros de origen de información', () => {
        cy.LogIn()
        //..Constantes
        const MTE = 'Puntos comunes de contacto'
        const registroDeOrigenDeInformacion = 'MPAT_Puntos comunes de contacto 1'
        const tipoDeRegistro = 'ORIGIN' //..Validar en que mantenimiento se alimenta este catálogo
        const Registro = '2550'

        cy.MTESearch(MTE,0)

        cy.wait(28000)
        

        cy.log('Búsqueda de Registros de origen de información')
        cy.ObjectSearch('input[id^=textfield-]',0)
        .type(registroDeOrigenDeInformacion)

        cy.wait(2000)
        cy.log('Click Derecho en el primer valor de la Grid')
        cy.ObjectSearch('div[class="x-grid-cell-inner "]',0)
        .rightclick()

        cy.log('Click en Porgramas Relacionados')
        cy.ObjectSearch('[class="x-menu-item-link"]',3)
        .click()

        cy.log('Click en Porgramas Relacionados: Registros de origen de información')
        cy.ObjectSearch('[class="x-menu-item-link"]',4)
        .click({force:true})


        cy.wait(6000)
        cy.log('Click Botón "Agregar"')
        //cy.ObjectSearchDebug('a[id^=button-][class="x-btn x-unselectable x-box-item x-toolbar-item x-btn-soft-base-small"]')
        //cy.ObjectSearchDebug('a[id^=button-]')
        cy.ObjectSearch('a[id^=button-]',8)
        .click()


        //..Tipo de Registro
        cy.wait(2000)
        cy.log('Tipo de registro: Click en el botón de búsqueda avanzada')
        cy.ObjectSearch('div[id$=-trigger-search]',1)
        .click()
        
        cy.wait(2000)
        cy.log('Registro')
        cy.ObjectSearch('input[id^=numberfield-]',0)
        .type(tipoDeRegistro)

        cy.log('Seleccionar primer resultado de la grid')
        cy.ObjectSearch('div[class="x-grid-cell-inner "]',0)
        .click()

        cy.wait(1000)
        cy.log('Click en el botón "Aceptar"')
        cy.ObjectSearch('a[id^=button-]',9)
        .click()


        //..Registro
        cy.wait(2000)
        cy.log('Registro: Click en el botón de búsqueda avanzada')
        cy.ObjectSearch('div[id$=-trigger-search]',2)
        .click()
        
        cy.wait(2000)
        cy.log('Registro')
        cy.ObjectSearch('input[id^=numberfield-]',0)
        .type(Registro)

        cy.log('Seleccionar primer resultado de la grid')
        cy.ObjectSearch('div[class="x-grid-cell-inner "]',0)
        .click()

        cy.wait(1000)
        cy.log('Click en el botón "Aceptar"')
        cy.ObjectSearch('a[id^=button-]',9)
        .click()



        cy.wait(2000)
        cy.log('Save Comment and Close')
        cy.SaveCommentAndClose()
    })
    
})