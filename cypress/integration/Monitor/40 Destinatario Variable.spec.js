describe('TC024.01 Destinatario Variable', () => {

    //..Mantenimiento registro - Destinatario Variable
    it('Destinatario Variable', () =>{
        cy.LogIn()
        
        //..Constantes
        const MTE = 'Registros'
        const Registro = 'MPAT_Registro 3783'
        const Nombre = 'MPAT_Alerta manual'
        const Descripcion = 'Desc. ' + Nombre
        const tiempoACompletar = 30
        const nombreDeUsuario = 'Erick'
        const colaDeDatos = 'MPAT_Cola de Datos Default'
        const mensajeES = 'MPAT_Mensaje en Español'
        const mensajeEN = 'MPAT_Mensaje en Inglés'
        const gruposColaDeDatos = 'MPAT_Grupos de colas de datos 1'
        const Prioridad = 'Alta'
        
        cy.MTESearch(MTE,1)

        cy.wait(28000)

        //..Búsqueda del Registro
        cy.log('Búsqueda de Registros de Registros')
        cy.ObjectSearch('input[id^=textfield-]',0)
        .type(Registro)

        cy.wait(2000)
        cy.log('Click Derecho en el primer valor de la Grid')
        cy.ObjectSearch('div[class="x-grid-cell-inner "]',0)
        .rightclick()

        cy.wait(2000)
        cy.log('Click en Porgramas Relacionados')
        cy.ObjectSearch('[class="x-menu-item-link"]',4)
        .click()

        cy.wait(2000)
        cy.log('Click en Porgramas Relacionados: Destinatario Variable')
        cy.ObjectSearch('[class="x-menu-item-link"]',10)
        .click({force:true})


        cy.wait(6000)
        cy.log('Click Botón "Agregar"')
        cy.ObjectSearch('a[id^=button-]',8)
        .click()

    })

    it('Información General', () =>{
        //..Constantes
        const Codigo = 1
        const Nombre = 'MPAT_Destinatario Variable 1'
        const Descripcion = 'Desc. ' + Nombre

        //..Código
        cy.log('Código')
        cy.wait(3000)
        cy.ObjectSearch('input[id^=numberfield-]',0)
        .type(Codigo)

        //..Nombre
        cy.wait(3000)
        cy.log('Nombre')
        cy.ObjectSearch('input[id^=M5StandardTextfield-]',0)
        .type(Nombre)

        //..Descripción
        cy.wait(3000)
        cy.log('Descripción')
        cy.ObjectSearch('textarea[id^=M5StandardTextarea-]',0)
        .type(Descripcion)
    })

    it('Fórmula', () => {
        //..Constantes
        const tipoDeDato = 'Alfanumérico'
        const Formula = 'ER1234567890'

        //..Click en pestaña de Fórmula
        cy.wait(2000)
        cy.log('Click en pestaña Fórmula')
        cy.ObjectSearch('a[id^=tab-]',1)
        .click()

        //..Tipo de Dato
        cy.wait(18000)
        cy.log('Tipo de Dato')
        cy.ObjectSearch('div[id$=-trigger-picker]',0)
        .click()

        cy.wait(2000)
        cy.log('Click en el tipo de Dato Alfanumérico')
        cy.ObjectSearch('div[id$=picker-listWrap]',0)
        .contains(tipoDeDato)
        .click()

        cy.wait(2000)
        cy.log('iFrame de Fórmula')
        cy.switchToIframeVisible('iframe',0)
        .clear()
        .type(Formula)

        cy.wait(3000)
        cy.SaveAndClose()

    })

})