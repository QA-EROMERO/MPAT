describe('TC021.02 Eventos a Futuro - Configuración de Llaves', () => {
    
    it('Configuración de Llaves', () => {
        cy.LogIn()
        //..Constantes
        const MTE = 'Eventos a Futuro'
        const eventoAFuturo = 'MPAT_Eventos a Futuro 1'
        const Nombre = 'MPAT_Configuración de Llave 1'
        const Descripcion = 'Desc. MPAT_Configuración de Llave 1'
        const Codigo = '2550'
        const codigoCampoLlave = '75016'

        
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

        cy.log('Click en Porgramas Relacionados: Configuración de Llaves')
        cy.ObjectSearch('[class="x-menu-item-link"]',6)
        .click({force:true})


        cy.wait(6000)
        cy.log('Click Botón "Agregar"')
        cy.ObjectSearch('a[id^=button-]',8)
        .click()


        //..Nombre
        cy.wait(3000)
        cy.log('Nombre')
        cy.get('input[name="name"]')
        .type(Nombre)

        //..Descripción
        cy.wait(3000)
        cy.log('Nombre')
        cy.get('input[name="description"]')
        .type(Descripcion)


        //..Registro
        cy.wait(3000)
        cy.log('Registro: Click en el botón de búsqueda avanzada')
        cy.ObjectSearch('div[id$=-trigger-foo]',0)
        .click()
        
    
        cy.wait(3000)
        cy.log('Código')
        cy.ObjectSearch('input[id^=textfield-]',0)
        .type(Codigo)

        cy.log('Seleccionar primer resultado de la grid')
        cy.ObjectSearch('div[class="x-grid-cell-inner "]',0)
        .click()

        cy.wait(1000)
        cy.log('Click en el botón "Aceptar"')
        cy.ObjectSearch('a[id^=button-]',5)
        .click()


        //..Click() en la grid para que aparezca el botón de búsqueda avanzada
        cy.wait(3000)
        cy.ObjectSearch('div[class="x-grid-cell-inner "]',2)
        .click()

        //..Click() Busqueda avanzada
        cy.wait(3000)
        cy.ObjectSearch('div[id$=-trigger-foo]',1)
        .click()

        //..Código
        cy.wait(3000)
        cy.ObjectSearch('input[id^=textfield-]',0)
        .type(codigoCampoLlave)

        //..Click en el primer resultado de la grid
        cy.wait(3000)
        cy.ObjectSearch('div[class="x-grid-cell-inner "]',0)
        .click()

        //..Click en el botón Aceptar
        cy.ObjectSearch('a[id^=button-]',9)
        .click()


        //..Guardar, comentar y cerrar
        cy.wait(2000)
        cy.log('Save and Close')
        cy.SaveAndClose()
    })
    
})