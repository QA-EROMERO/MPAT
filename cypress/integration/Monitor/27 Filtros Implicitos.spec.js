describe('TC016 Filtros Implícitos', () => {
    
    it('Filtros Implícitos', () => {
        cy.LogIn()
        //..Constantes
        const MTE = 'Filtros Implícitos'
        const idiomaES = 'Español'
        const categoriaES = 'Acumuladores'
        const Valor = 'MPAT_Aacumulación Total Llaves con Promedio'
        
        cy.MTESearch(MTE,0)

        cy.wait(28000)
        
        //..Búsqueda de idioma
        cy.log('Búsqueda del idioma Español')
        cy.ObjectSearch('input[id^=textfield-]',0)
        .type(idiomaES)

        //..Búsqueda de categoría
        cy.wait(3000)
        cy.log('Búsqueda de Categoría en Español')
        cy.ObjectSearch('input[id^=textfield-]',1)
        .type(categoriaES)

        
        cy.wait(2000)
        cy.log('Click Derecho en el primer valor de la Grid')
        cy.ObjectSearch('div[class="x-grid-cell-inner "]',0)
        .rightclick()

        cy.log('Click en Porgramas Relacionados')
        cy.ObjectSearch('[class="x-menu-item-link"]',1)
        .click()

        cy.log('Click en Porgramas Relacionados: Sinónimo de filtros Implícitos')
        cy.ObjectSearch('[class="x-menu-item-link"]',2)
        .click({force:true})


        cy.wait(6000)
        cy.log('Click Botón "Agregar"')
        //cy.ObjectSearchDebug('a[id^=button-][class="x-btn x-unselectable x-box-item x-toolbar-item x-btn-soft-base-small"]')
        //cy.ObjectSearchDebug('a[id^=button-]')
        cy.ObjectSearch('a[id^=button-]',8)
        .click()


        //..Busqueda avanzada del Idioma
        cy.wait(3000)
        cy.log('Idioma: Click en el botón de búsqueda avanzada')
        cy.ObjectSearch('div[id$=-trigger-search]',1)
        .click()

        cy.wait(3000)
        cy.log('Conexion: Digitar Nombre de la conexion')
        cy.ObjectSearch('input[id^=textfield-]',0)
        .type(idiomaES)

        cy.log('Seleccionar primer resultado de la grid')
        cy.ObjectSearch('div[class="x-grid-cell-inner "]',0)
        .click()

        cy.wait(1000)
        cy.log('Click en el botón "Aceptar"')
        cy.ObjectSearch('a[id^=button-]',9)
        .click()
        

        //..Ingreso del Valor
        cy.wait(3000)
        cy.log('Valor')
        cy.get('input[name="mp_adavancedsearchcategorysyn-VALUE"]')
        .type(Valor)

        //..Guarda y cerrar el mantenimiento
        cy.wait(2000)
        cy.log('Save Comment and Close')
        cy.SaveCommentAndClose()
    })
    
})