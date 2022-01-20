describe('Identificador de búsqueda datos relacionados', () => {
    
    it('ERROR! - Configuración de búsqueda', () => {
        cy.LogIn()
        //..Constantes
        const MTE = 'Identificador de búsqueda datos relacionados'
        const identificadorDeBusqueda = 'MPAT_Identificador de búsqueda de datos relacionados 1'
        const Registro = '2550'
        const campoDeAgrupamiento = '75083'
        const valorPorDefecto = '75009'

        cy.MTESearch(MTE,0)

        cy.wait(28000)
        
        cy.log('Búsqueda del Identificador de búsqueda')
        cy.ObjectSearch('input[id^=textfield-]',0)
        .type(identificadorDeBusqueda)

        cy.wait(2000)
        cy.log('Click Derecho en el primer valor de la Grid')
        cy.ObjectSearch('div[class="x-grid-cell-inner "]',0)
        .rightclick()

        cy.log('Click en Porgramas Relacionados')
        cy.ObjectSearch('[class="x-menu-item-link"]',3)
        .click()

        cy.log('Click en Porgramas Relacionados: Usuarios por cola')
        cy.ObjectSearch('[class="x-menu-item-link"]',4)
        .click({force:true})


        cy.wait(6000)
        cy.log('Click Botón "Agregar"')
        //cy.ObjectSearchDebug('a[id^=button-][class="x-btn x-unselectable x-box-item x-toolbar-item x-btn-soft-base-small"]')
        //cy.ObjectSearchDebug('a[id^=button-]')
        cy.ObjectSearch('a[id^=button-]',8)
        .click()


        //..Registro
        cy.wait(2000)
        cy.log('Registro: Click en el botón de búsqueda avanzada')
        cy.ObjectSearch('div[id$=-trigger-search]',1)
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

        //..Click en el campo Registro para que se quite el mensaje
        cy.get('input[name="mp_identifiersearcheventfield-UUIDEVENT"]')
        .dblclick()


        


        //..Campo de agrupamiento
        cy.log('Campo de agrupamiento: Click en el botón de búsqueda avanzada')
        cy.ObjectSearch('div[id$=-trigger-search]',2)
        .click()
        


        cy.wait(2000)
        cy.log('Campo de agrupamiento')
        cy.ObjectSearch('input[id^=numberfield-]',0)
        .type(campoDeAgrupamiento)


        cy.wait(2000)
        cy.log('Seleccionar primer resultado de la grid')
        cy.ObjectSearch('div[class="x-grid-cell-inner "]',0)
        .click()

        cy.wait(1000)
        cy.log('Click en el botón "Aceptar"')
        cy.ObjectSearch('a[id^=button-]',9)
        .click()

        //..Click para que se quite el mensaje de color rojo
        cy.wait(3000)
        cy.get('input[name="mp_identifiersearcheventfield-UUIDDEFAULTVALUE"]')
        .dblclick()

        cy.pause()




        //..Valor por defecto
        cy.log('Valor por defecto: Click en el botón de búsqueda avanzada')
        //..Se coloca 2 en lugar de 3 porque se activa el Scrollbar que oculta
        //..la primera búsqueda avanzada del mantenimiento.
        //..cy.ObjectSearch('div[id$=-trigger-search]',3)
        cy.ObjectSearch('div[id$=-trigger-search]',3)
        .click()
        

        cy.wait(2000)
        cy.log('Valor por defecto')
        cy.ObjectSearch('input[id^=numberfield-]',0)
        .type(valorPorDefecto)

        cy.wait(2000)
        cy.log('Seleccionar primer resultado de la grid')
        cy.ObjectSearch('div[class="x-grid-cell-inner "]',0)
        .click()

        cy.wait(1000)
        cy.log('Click en el botón "Aceptar"')
        cy.ObjectSearch('a[id^=button-]',9)
        .click()

        //..Click en el campo para que se quite el mensaje de color rojo
        cy.wait(3000)
        cy.get('input[name="mp_identifiersearcheventfield-UUIDDEFAULTVALUE"]')
        .click()


        cy.wait(2000)
        cy.log('Save Comment and Close')
        cy.SaveCommentAndClose()
        
    })
    
})