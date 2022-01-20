describe('Usuarios por Cola', () => {

    it('Usuarios por Cola', () =>{
        cy.LogIn()
        //..Constantes
        const colaCondicionada = 'MPAT_Cola de Datos Condicionada'
        const usuario = 'EROMERO'
        const MTE = 'Cola de Datos'

        //..Búsqueda del mantenimiento
        cy.MTESearch(MTE,0)
        cy.wait(28000)


        cy.log('Búsqueda de la Cola Condicionada')
        cy.ObjectSearch('input[id^=textfield-]',0)
        .type(colaCondicionada)

        cy.wait(2000)
        cy.log('Click Derecho en el primer valor de la Grid')
        cy.ObjectSearch('div[class="x-grid-cell-inner "]',0)
        .rightclick()

        cy.log('Click en Porgramas Relacionados')
        cy.ObjectSearch('[class="x-menu-item-link"]',3)
        .click()

        cy.log('Click en Porgramas Relacionados: Usuarios por cola')
        cy.ObjectSearch('[class="x-menu-item-link"]',5)
        .click({force:true})


        cy.wait(6000)
        cy.log('Click Botón "Agregar" Condición de colas de datos')
        //cy.ObjectSearchDebug('a[id^=button-][class="x-btn x-unselectable x-box-item x-toolbar-item x-btn-soft-base-small"]')
        //cy.ObjectSearchDebug('a[id^=button-]')
        cy.ObjectSearch('a[id^=button-]',8)
        .click()

        cy.wait(6000)

        cy.log('Usuario: Click en el botón de búsqueda avanzada')
        cy.ObjectSearch('div[id$=-trigger-search]',1)
        .click()

        cy.wait(3000)
        cy.log('Nombre de Usuario: Digitar Nombre')
        cy.ObjectSearch('input[id^=textfield-]',1)
        .type(usuario)

        cy.log('Seleccionar primer resultado de la grid')
        cy.ObjectSearch('div[class="x-grid-cell-inner "]',0)
        .click()

        cy.wait(1000)
        cy.log('Click en el botón "Aceptar"')
        cy.ObjectSearch('a[id^=button-]',9)
        .click()

        cy.wait(3000)
        cy.log('Recibe Alertas: Click en el checkbox')
        cy.get('input[name=mp_userbydataqueue-RECEIVEALERTS]')
        .click()

        cy.log('Ver resultados de investigación: Click en el checkbox')
        cy.get('input[name=mp_userbydataqueue-RESEARCHRESULTS]')
        .click()

        cy.log('Mostrar condiciones:')
        cy.get('input[name=mp_userbydataqueue-DONOTSHOWCONDITIONS]')
        .click()

        cy.log('Calificar resultado de investigación:')
        cy.get('input[name=mp_userbydataqueue-QUALIFY]')
        .click()

        cy.SaveCommentAndClose()
    })

})