describe('Condición de colas de datos', () => {

    it('Condición de colas de datos', () => {
        cy.LogIn()
        //..Constantes
        const colaCondicionada = 'MPAT_Cola de Datos Condicionada'
        const nombreDeLaCondicion = 'MPAT_Condición 1'
        const descripcionDeLaCondicion = 'Desc. MPAT_Condición 1'
        const codigoDelRegistro = '2550'
        const nombreDelCampo = 'ACRM - Código de Empresa'
        const valorCondicion = 0
        const comentarioCriterio = 'Primer línea del Criterio de la Condición'
        const MTE = 'Cola de Datos'
        
        cy.MTESearch(MTE,0)
        cy.wait(28000)

        cy.log('Búsqueda de la Cola Condicionada')
        cy.ObjectSearch('input[id^=textfield-]',0)
        .clear()
        .type(colaCondicionada)

        cy.wait(6000)
        cy.log('Click Derecho en el primer valor de la Grid')
        cy.ObjectSearch('div[class="x-grid-cell-inner "]',0)
        .rightclick()

        cy.log('Click en Porgramas Relacionados')
        cy.ObjectSearch('[class="x-menu-item-link"]',3)
        .click()

        cy.log('Click en Porgramas Relacionados')
        cy.ObjectSearch('[class="x-menu-item-link"]',4).click({force:true})


        cy.wait(3000)
        cy.log('Click Botón "Agregar" Condición de colas de datos')
        cy.ObjectSearch('a[id^=button-]',8)
        .click()

        cy.wait(4000)

        cy.log('Nombre')
        cy.ObjectSearch('input[id^=M5StandardTextfield-]',0)
        .type(nombreDeLaCondicion)

        cy.wait(3000)
        cy.log('Descripción')
        cy.ObjectSearch('textarea[id^=M5StandardTextarea-]',0)
        .type(descripcionDeLaCondicion)


        cy.log('Click en el botón de búsqueda avanzada de Registro')
        cy.ObjectSearch('div[id^=combo-]',5)
        .click()

        cy.wait(2000)
        cy.log('Ingreso de código de Registro')
        cy.ObjectSearch('input[id^=textfield-]',0)
        .type(codigoDelRegistro)
        
        cy.wait(2000)
        cy.log('Click en el primer resultado')
        cy.ObjectSearch('div[class="x-grid-cell-inner "]',0)
        .click()


        cy.wait(2000)
        cy.log('Click en el botón "Aceptar"')
        cy.ObjectSearch('a[id^=button-]',5)
        .click()

        //..Estos segundos son para que carguen todas las opciones
        cy.wait(10000)

        cy.log('Click en botón "Todas las categorías"')
        cy.ObjectSearch('div[class="x-treelist-item-tool mpl-allcategory"]',0)
        .click()

        cy.wait(3000)
        cy.log('Digitar campo del Registro 2550')
        cy.ObjectSearch('input[id^=textfield-]',0)
        .type(nombreDelCampo)


        cy.wait(1000)
        cy.log('Doble Click en el primer resultado del campo')
        cy.ObjectSearch('div[class="x-grid-cell-inner x-grid-cell-inner-treecolumn"]',0)
        .dblclick()


        cy.wait(2000)
        cy.log('Agregar Operador')
        cy.ObjectSearch('div[class="x-grid-cell-inner "]',2)
        .click()

        cy.log('Click en el botón para desplegar los Operadores')
        cy.ObjectSearch('div[id$=-trigger-picker]',1)
        .click()

        cy.log('Seleccionar el Operador')
        cy.ObjectSearch('ul[id$="-picker-listEl"]',0)
        .contains('Diferente')
        .click()

        cy.wait(3000)
        cy.log('Digitar el Valor')
        cy.ObjectSearch('div[class="x-grid-cell-inner "]',2)
        .type(valorCondicion)

        cy.log('Ingreso de comentario en el criterio')
        cy.ObjectSearch('div[class="x-grid-cell-inner x-grid-cell-inner-action-col"]',2)
        .type(comentarioCriterio)

        
        cy.wait(3000)
        cy.log('Guardar con comentario')
        cy.ObjectSearch('a[id^=floatingbutton-]',1)
        .click()

        //..FUNCIÓN IMPORTANTISIMA
        //..Después de hacer click en el botón Guardar se genera un error
        //..que esta función lo detecta y lo ignora, esto hace que no se
        //..interrumpa la ejecución del Script.
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
        

        cy.wait(3000)
        cy.log('Ingresar Comentario')
        cy.ObjectSearch('textarea[id^=textarea-]',0)
        .type('MPAT')

        cy.wait(1000)
        cy.log('Click en el botón "Aceptar"')
        cy.ObjectSearch('span[id^=button-]',3)
        .click()

        
        cy.wait(3000)
        cy.log('Cerrar el mantenimiento de Condición')
        cy.ObjectSearch('a[id^=button-]',1)
        .click()


        cy.wait(3000)
        cy.log('Cerrar el mantenimiento')
        cy.ObjectSearch('a[id^=button-]',1)
        .click()

    })
    
})