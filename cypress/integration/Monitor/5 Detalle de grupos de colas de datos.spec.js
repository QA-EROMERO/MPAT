describe('Detalle de grupos de colas de datos', () => {

    it('Detalle de grupos de colas de datos', () =>{
        cy.LogIn()
        //..Constantes
        const MTE = 'Grupos de colas de datos'
        const grupoDeColasDeDatos = 'MPAT_Grupos de colas de datos 1'
        const colaDeDatos = 'MPAT_Cola de Datos Default'

        //..Búsqueda del mantenimiento
        cy.MTESearch(MTE,0)
        cy.wait(18000)


        cy.log('Búsqueda de la Cola Condicionada')
        cy.ObjectSearch('input[id^=textfield-]',0)
        .type(grupoDeColasDeDatos)

        cy.wait(2000)
        cy.log('Click Derecho en el primer valor de la Grid')
        cy.ObjectSearch('div[class="x-grid-cell-inner "]',0)
        .rightclick()

        cy.log('Click en Porgramas Relacionados')
        cy.ObjectSearch('[class="x-menu-item-link"]',3)
        .click()

        cy.log('Click en Porgramas Relacionados: Detalle de grupos de colas de datos')
        cy.ObjectSearch('[class="x-menu-item-link"]',4)
        .click({force:true})


        cy.wait(6000)
        cy.log('Click Botón "Agregar" Detalle de grupos de colas de datos')
        //cy.ObjectSearchDebug('a[id^=button-][class="x-btn x-unselectable x-box-item x-toolbar-item x-btn-soft-base-small"]')
        //cy.ObjectSearchDebug('a[id^=button-]')
        cy.ObjectSearch('a[id^=button-]',8)
        .click()

        cy.wait(6000)

        //..Agregar Cola
        cy.log('Usuario: Click en el botón de búsqueda avanzada')
        cy.ObjectSearch('div[id$=-trigger-search]',1)
        .click()

        cy.wait(3000)
        cy.log('Nombre de Usuario: Digitar Nombre')
        cy.ObjectSearch('input[id^=textfield-]',1)
        .type(colaDeDatos)

        cy.log('Seleccionar primer resultado de la grid')
        cy.ObjectSearch('div[class="x-grid-cell-inner "]',0)
        .click()

        cy.wait(1000)
        cy.log('Click en el botón "Aceptar"')
        cy.ObjectSearch('a[id^=button-]',9)
        .click()

        //..Checkbox Cola por defecto
        cy.wait(2000)
        cy.get('input[name="mp_dataqueuebygroup-DEFAULTQUEUE"]')
        .click()

        cy.SaveCommentAndClose()
    })

})