describe('TC021.01 Eventos a Futuro - Campos Llave', () => {
    
    it('Campos Llave', () => {
        cy.LogIn()
        //..Constantes
        const MTE = 'Eventos a Futuro'
        const eventoAFuturo = 'MPAT_Eventos a Futuro 1'
        const Nombre = 'MPAT_Campo Llave 1'
        const tipoDeDato = 'Alfanumérico'
        const Descripcion = 'Desc. MPAT_Campo Llave 1'
        
        cy.MTESearch(MTE,0)

        cy.wait(28000)
        
        //..Búsqueda del Evento a Futuro
        cy.log('Búsqueda de Registros de Evento a Futuro')
        cy.ObjectSearch('input[id^=textfield-]',0)
        .type(eventoAFuturo)

        cy.wait(2000)
        cy.log('Click Derecho en el primer valor de la Grid')
        cy.ObjectSearch('div[class="x-grid-cell-inner "]',0)
        .rightclick()

        cy.log('Click en Porgramas Relacionados')
        cy.ObjectSearch('[class="x-menu-item-link"]',3)
        .click()

        cy.log('Click en Porgramas Relacionados: Campos Llave')
        cy.ObjectSearch('[class="x-menu-item-link"]',5)
        .click({force:true})


        cy.wait(6000)
        cy.log('Click Botón "Agregar"')
        cy.ObjectSearch('a[id^=button-]',8)
        .click()


        //..Nombre
        cy.wait(3000)
        cy.log('Nombre')
        cy.get('input[name="mp_futureeventskeyfield-NAME"]')
        .type(Nombre)


        //..Tipo de Dato
        cy.wait(3000)
        cy.log('Tipo de dato: Click en el botón de búsqueda avanzada')
        cy.ObjectSearch('div[id$=-trigger-search]',1)
        .click()
        
    
        cy.wait(3000)
        cy.log('Tipo de Dato')
        cy.ObjectSearch('input[id^=textfield-]',0)
        .type(tipoDeDato)

        cy.log('Seleccionar primer resultado de la grid')
        cy.ObjectSearch('div[class="x-grid-cell-inner "]',0)
        .click()

        cy.wait(1000)
        cy.log('Click en el botón "Aceptar"')
        cy.ObjectSearch('a[id^=button-]',9)
        .click()

        //..Nombre
        cy.wait(3000)
        cy.log('Nombre')
        cy.get('textarea[name="mp_futureeventskeyfield-DESCRIPTION"]')
        .type(Descripcion)



        //..Guardar, comentar y cerrar
        cy.wait(2000)
        cy.log('Save Comment and Close')
        cy.SaveCommentAndClose()
    })
    
})