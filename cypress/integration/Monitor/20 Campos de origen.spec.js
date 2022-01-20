describe('Registros de origen de información', () => {
    
    it('Campos de Origen', () => {
        cy.LogIn()
        //..Constantes
        const MTE = 'Puntos comunes de contacto'
        const registroDeOrigenDeInformacion = 'MPAT_Puntos comunes de contacto 1'
        const Registro = '2550'
        const Campo = 'Clase de Cliente'
        const funcionDeCampo = 'PIVOT'

        cy.MTESearch(MTE,0)

        cy.wait(28000)
        
        //..Búsqueda de Registros de Origen de información
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
        //..Búsqueda de Registros de Origen de Información
        cy.log('Búsqueda de Registros de origen de información')
        cy.ObjectSearch('input[id^=textfield-]',0)
        .type(Registro)

        cy.wait(2000)
        cy.log('Click Derecho en el primer valor de la Grid')
        cy.ObjectSearch('div[class="x-grid-cell-inner "]',0)
        .rightclick()

        cy.log('Click en Porgramas Relacionados')
        cy.ObjectSearch('[class="x-menu-item-link"]',3)
        .click()

        cy.log('Click en Porgramas Relacionados: Campos de origen')
        cy.ObjectSearch('[class="x-menu-item-link"]',4)
        .click({force:true})


        cy.wait(6000)
        cy.log('Click Botón "Agregar"')
        //cy.ObjectSearchDebug('a[id^=button-][class="x-btn x-unselectable x-box-item x-toolbar-item x-btn-soft-base-small"]')
        //cy.ObjectSearchDebug('a[id^=button-]')
        cy.ObjectSearch('a[id^=button-]',8)
        .click()

        //..Campo
        cy.wait(2000)
        cy.log('Tipo de registro: Click en el botón de búsqueda avanzada')
        cy.ObjectSearch('div[id$=-trigger-search]',1)
        .click()
        
        cy.wait(2000)
        cy.log('Campo')
        cy.ObjectSearch('input[id^=textfield-]',0)
        .type(Campo)

        cy.log('Seleccionar primer resultado de la grid')
        cy.ObjectSearch('div[class="x-grid-cell-inner "]',0)
        .click()

        cy.wait(1000)
        cy.log('Click en el botón "Aceptar"')
        cy.ObjectSearch('a[id^=button-]',7)
        .click()


        //..Función de Campo
        cy.wait(2000)
        cy.log('Función de campo: Click en el botón de búsqueda avanzada')
        cy.ObjectSearch('div[id$=-trigger-search]',2)
        .click()
        
        cy.wait(2000)
        cy.log('Función de Campo')
        cy.ObjectSearch('input[id^=textfield-]',0)
        .type(funcionDeCampo)

        cy.log('Seleccionar primer resultado de la grid')
        cy.ObjectSearch('div[class="x-grid-cell-inner "]',0)
        .click()

        cy.wait(1000)
        cy.log('Click en el botón "Aceptar"')
        cy.ObjectSearch('a[id^=button-]',7)
        .click()


        //..Checkbox Historia
        cy.wait(6000)
        cy.log('Click en Checkbox Historia')
        cy.get('input[name="mp_lcc_fields-HISTORY"]')
        .click()


        //..Checkbox Origen
        cy.wait(2000)
        cy.log('Click en Checkbox Origen')
        cy.get('input[name="mp_lcc_fields-ORIGIN"]')
        .click()



        cy.wait(2000)
        cy.log('Save Comment and Close')
        cy.SaveCommentAndClose()
    })
    
})