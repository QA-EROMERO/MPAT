describe('TC024 Registros', () => {

    //..Mantenimiento Expiracion de registro
    it('Registros', () =>{
        cy.LogIn()
        
        //..Constantes
        const MTE = 'Registros'
        const Codigo = '3783'
        const Nombre = 'MPAT_Registro ' + Codigo
        const Descripcion = 'Desc. ' + Nombre
        const clasificacionDeRiesgo = 'ACRM+'
        const Temporizador = 'Tiempo más alto de investigación'
        

        cy.MTESearch(MTE,1)
        //cy.wait(28000)
        cy.wait(18000)


        cy.log('Click Botón "Agregar" Registros')
        cy.ObjectSearch('a[id^=button-]',8)
        .click()

        cy.wait(6000)

        //...Código de Registros
        cy.wait(3000)
        cy.ObjectSearch('input[id^=numberfield-]',0)
        .type(Codigo)
        
        //...Nombre
        cy.wait(3000)
        cy.ObjectSearch('input[id^=textfield-]',0)
        .type(Nombre)

        //...Descripción
        cy.wait(3000)
        cy.ObjectSearch('textarea[id^=textarea-]',0)
        .type(Descripcion)

        //...Clasificación de tipo de riesgo
        cy.wait(2000)
        cy.ObjectSearch('div[id$=-trigger-picker]',0)
        .click()

        cy.ObjectSearch('ul[id$=-picker-listEl]',0)
        .contains(clasificacionDeRiesgo)
        .click()

        //...Temporizador tipo de investigación
        cy.wait(2000)
        cy.ObjectSearch('div[id$=-trigger-picker]',1)
        .click()

        cy.wait(2000)
        cy.ObjectSearch('ul[id$=-picker-listEl]',0)
        .contains(Temporizador)
        .click()

        //..Opciones
        //..Disponible
        //..Guardar transacciones corruptas
        cy.log('Opciones:')
        cy.ObjectSearch('li[class="x-boundlist-item"]',0)
        .click()
        //..Agregar opción seleccionada
        //cy.wait(2000)
        cy.ObjectSearch('span[id^=button-]',12)
        .click()

        //..Almacena histórico que no genere alerta
        cy.log('Opciones:')
        cy.ObjectSearch('li[class="x-boundlist-item"]',0)
        .click()
        //..Agregar opción seleccionada
        //cy.wait(2000)
        cy.ObjectSearch('span[id^=button-]',12)
        .click()

        //..Considere campos del espacio del complemento
        cy.log('Opciones:')
        cy.ObjectSearch('li[class="x-boundlist-item"]',0)
        .click()
        //..Agregar opción seleccionada
        //cy.wait(2000)
        cy.ObjectSearch('span[id^=button-]',12)
        .click()

        //..Generar registro a futuro
        cy.log('Opciones:')
        cy.ObjectSearch('li[class="x-boundlist-item"]',0)
        .click()
        //..Agregar opción seleccionada
        //cy.wait(2000)
        cy.ObjectSearch('span[id^=button-]',12)
        .click()

        //..Sólo para informe
        cy.log('Opciones:')
        cy.ObjectSearch('li[class="x-boundlist-item"]',0)
        .click()
        //..Agregar opción seleccionada
        //cy.wait(2000)
        cy.ObjectSearch('span[id^=button-]',12)
        .click()

        //..Almacena histórico que no genere alerta
        cy.log('Opciones:')
        cy.ObjectSearch('li[class="x-boundlist-item"]',0)
        .click()
        //..Agregar opción seleccionada
        //cy.wait(2000)
        cy.ObjectSearch('span[id^=button-]',12)
        .click()

        //..Generar registro a futuro
        cy.log('Opciones:')
        cy.ObjectSearch('li[class="x-boundlist-item"]',0)
        .click()
        //..Agregar opción seleccionada
        //cy.wait(2000)
        cy.ObjectSearch('span[id^=button-]',12)
        .click()

        //..Activar relaciones
        cy.log('Opciones:')
        cy.ObjectSearch('li[class="x-boundlist-item"]',0)
        .click()
        //..Agregar opción seleccionada
        //cy.wait(2000)
        cy.ObjectSearch('span[id^=button-]',12)
        .click()



        //..Agregar un campo básico de tipo Numérico.
        //..Código de Campo, Nombre del Campo, longitud, Decimal
        cy.addBasicNumericField(1,'MPAT_Campo 1',8,2)

        //..Agregar un campo básico de tipo Alfanumérico.
        //..Código de Campo, Nombre del Campo, longitud
        cy.addBasicAlphanumericField(2,'MPAT_Campo 2',20)

        //..Agregar un campo básico de tipo Numérico.
        cy.addBasicNumericField(3,'MPAT_Campo 3',6,4)

        //..Agregar un campo básico de tipo Alfanumérico.
        cy.addBasicAlphanumericField(4,'MPAT_Campo 4',25)

        cy.wait(3000)
        cy.SaveAndClose()
    })
})