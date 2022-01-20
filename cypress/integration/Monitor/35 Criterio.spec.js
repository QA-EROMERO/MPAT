describe('TC022 Criterio', () => {

    //..Mantenimiento Criterio
    it('Criterio', () =>{
        cy.LogIn()
        
        //..Constantes
        const MTE = 'Criterio'
        const Registro = '2550'
        const Nombre = 'MPAT_Criterio'
        const Descripcion = 'Desc. MPAT_Criterio'
        const campo = 'ACRM - Código de Empresa'
        const Operador = 'Igual'
        const Valor = '100'
        const comentarioCriterio = 'MPAT_Comentario Criterio'
        
        cy.MTESearch(MTE,0)
        cy.wait(28000)

        cy.log('Click Botón "Agregar" Criterio')
        cy.ObjectSearch('a[id^=button-]',8)
        .click()

        cy.wait(6000)

        cy.wait(3000)
        cy.log('Registro: Click en el botón de búsqueda avanzada')
        cy.ObjectSearch('div[id^=combo]',5)
        .click()

        cy.wait(3000)
        cy.log('Registro: Digitar codigo de Registro')
        cy.ObjectSearch('input[id^=textfield-]',0)
        .type(Registro)

        cy.log('Seleccionar primer resultado de la grid')
        cy.ObjectSearch('div[class="x-grid-cell-inner "]',0)
        .click()

        cy.wait(1000)
        cy.log('Click en el botón "Aceptar"')
        cy.ObjectSearch('span[id^=button-]',16)
        .click()

        cy.wait(3000)
        cy.log('Digitar Nombre')
        cy.get('input[name="name"]')
        .type(Nombre)

        cy.wait(3000)
        cy.log('Digitar Descripcion')
        cy.get('textarea[name="description"]')
        .type(Descripcion)

        cy.wait(3000)
        cy.log('Click en el botón "Agregar"')
        cy.ObjectSearch('span[id^=button-]',13)
        .click()

        cy.wait(3000)
        cy.log('Click en seleccion de Campos')
        cy.ObjectSearch('div[id^=ext-]',4)
        .click()

        cy.wait(3000)
        cy.log('Click en columna Campo')
        cy.ObjectSearch('td[class^=x-grid-cell]',4)
        .click()

        cy.wait(3000)
        cy.log('Digitar campo para busqueda')
        cy.get('input[name="searchField"]')
        .type(campo)

        cy.wait(3000)
        cy.log('Doble click en resultado de busqueda')
        cy.ObjectSearch('td[class^=x-grid-cell]',8)
        .dblclick()

        cy.wait(3000)
        cy.log('Seleccion de Operador')
        cy.ObjectSearch('td[class^=x-grid-cell]',5)
        .type(Operador).type('{enter}')

        cy.wait(3000)
        cy.log('Digitar Valor')
        cy.ObjectSearch('td[class^=x-grid-cell]',6)
        .type(Valor).type('{enter}')

        cy.wait(3000)
        cy.log('Ingreso de comentario en el criterio')
        cy.ObjectSearch('div[class="x-grid-cell-inner x-grid-cell-inner-action-col"]',2)
        .type(comentarioCriterio)

        
    })

     //..Pestaña Traducciones
     it('Traducciones', () =>{
       
        //..Constantes
        const español = 'MPAT_Criterio Español'
        const ingles = 'MPAT_Criterio Ingles'

        cy.log('Traducciones')
        cy.ObjectSearch('span[id^=tab-]',5)
        .click()

        cy.wait(3000)
        cy.log('Digitar Traduccion Español')
        cy.ObjectSearch('td[class^=x-grid-cell]',1)
        .type(español).type('{enter}')
      
        cy.wait(3000)
        cy.log('Digitar Traduccion Ingles')
        cy.ObjectSearch('td[class^=x-grid-cell]',3)
        .type(ingles).type('{enter}')

        cy.wait(3000)
        cy.SaveAndClose()
    })
})