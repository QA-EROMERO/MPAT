describe('TC024.01 Alertas Manuales', () => {

    //..Mantenimiento Expiracion de registro
    it('Alertas Manuales', () =>{
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
        cy.log('Click en Porgramas Relacionados: Alertas Manuales')
        cy.ObjectSearch('[class="x-menu-item-link"]',5)
        .click({force:true})


        cy.wait(6000)
        cy.log('Click Botón "Agregar"')
        cy.ObjectSearch('a[id^=button-]',8)
        .click()

        //..Nombre
        cy.log('Nombre')
        cy.wait(3000)
        cy.get('input[name="name"]')
        .type(Nombre)

        //..Descripción
        cy.log('Descripción')
        cy.wait(3000)
        cy.get('textarea[name="description"]')
        .type(Descripcion)
    })


    it('Visor', () =>{
        //..Constantes
        const tiempoACompletar = 30
        const nombreDeUsuario = 'Erick'
        const colaDeDatos = 'MPAT_Cola de Datos Default'
        const mensajeES = 'MPAT_Mensaje en Español'
        const mensajeEN = 'MPAT_Mensaje en Inglés'
        const gruposColaDeDatos = 'MPAT_Grupos de colas de datos 1'

        //------------------------------//
        //..          Visor
        //------------------------------//
        cy.log('Visor')
        cy.ObjectSearch('div[id^=ext-element-]',0)
        .click()

        //..Tiempo a completar (minutos)
        cy.wait(3000)
        cy.get('input[name="timeResearch"]')
        .type(tiempoACompletar)
        
        //..Expiración automática
        cy.wait(2000)
        cy.ObjectSearch('span[id^=radio-]',0)
        .click()

        //..Agregar usuario
        cy.wait(2000)
        cy.log('Agregar Usuario')
        cy.ObjectSearch('a[id^=button-]',4)
        .click()
        
        cy.wait(2000)
        cy.log('Click en botón de búsqueda avanzada')
        cy.ObjectSearch('div[id$=-trigger-picker]',0)
        .click()
        
        cy.log('Digitar el nombre del usuario')
        cy.wait(3000)
        cy.ObjectSearch('input[id^=textfield-]',0)
        .type(nombreDeUsuario)

        cy.wait(2000)
        cy.log('Click en checkbox para seleccionar usuario')
        cy.ObjectSearch('span[class="x-grid-checkcolumn"]',0)
        .click()

        cy.wait(2000)
        cy.log('Click en el botón "Aceptar"')
        cy.ObjectSearch('a[id^=button-]',12)
        .click()
        
        //..Agregar Cola de Datos
        cy.wait(2000)
        cy.log('Agregar Cola de Datos')
        cy.ObjectSearch('a[id^=button-]',4)
        .click()

        cy.log('Cola de Datos')
        cy.wait(2000)
        cy.ObjectSearch('div[id^=tagfield-]',11)
        .click()
        
        cy.wait(2000)
        cy.ObjectSearch('div[id$=picker-listWrap]',0)
        .contains(colaDeDatos)
        .click()

        //..Click en una etiqueta para que se oculten las opciones de Cola
        cy.wait(1000)
        cy.ObjectSearch('div[id^=tagfield-]',1)
        .click()

        //..Agregar Grupos de colas
        cy.wait(2000)
        cy.log('Agregar Grupos de cola')
        cy.ObjectSearch('a[id^=button-]',4)
        .click()

        cy.log('Grupos de cola')
        cy.wait(2000)
        cy.ObjectSearch('div[id^=tagfield-]',8)
        .click()

        cy.wait(2000)
        cy.ObjectSearch('div[id$=picker-listWrap]',0)
        .contains(gruposColaDeDatos)
        .click()

        //..Mensaje en Español
        //..Mostrar
        cy.wait(2000)
        cy.ObjectSearch('div[class="x-grid-cell-inner x-grid-cell-inner-row-expander"]',0)
        .click()

        cy.log('Escribir el mensaje en Español')
        cy.wait(2000)
        cy.switchToIframeNoVisible('iframe',1)
        .clear()
        .type(mensajeES)

        //..Ocultar
        cy.wait(2000)
        cy.NoVisibleObjectSearch('div[class="x-grid-cell-inner x-grid-cell-inner-row-expander"]',0)
        .click()

        
        //..Mensaje en Inglés
        cy.wait(2000)
        cy.log('Se abre el cuadro para el mensaje en Inglés')
        //..Mostrar
        cy.wait(2000)
        cy.ObjectSearch('div[class="x-grid-cell-inner x-grid-cell-inner-row-expander"]',1)
        .click()

        cy.log('Escribir el mensaje en Inglés')
        cy.wait(2000)
        cy.switchToIframeVisible('iframe',0)
        .clear()
        .type(mensajeEN)
        //..Ocultar
        cy.wait(2000)
        cy.NoVisibleObjectSearch('div[class="x-grid-cell-inner x-grid-cell-inner-row-expander"]',1)
        .click()
        
        //..Click en el Botón "Aceptar"
        cy.wait(2000)
        cy.ObjectSearch('a[id^=button-]',7)
        .click()
    })
    

    it('Correo electrónico', () =>{
        //..Constantes
        const nombreDeUsuario = 'Erick'
        const Prioridad = 'Alta'
        const gruposDeUsuarios = 'MPAT_Grupo de Usuarios 1'
        const gruposColaDeDatos = 'MPAT_Grupos de colas de datos 1'
        const destinatarioVariable = 'MPAT_Destinatario Variable 1'
        const colaDeDatos = 'MPAT_Cola de Datos Default'
        const asuntoES = 'MPAT_Asunto en Español'
        const mensajeES = 'MPAT_Mensaje en Español'
        const asuntoEN = 'MPAT_Asunto en Inglés'
        const mensajeEN = 'MPAT_Mensaje en Inglés'
        
        //------------------------------//
        //      Correo electrónico
        //------------------------------//
        //..Seleccionar la opción de Correo Electrónico
        cy.ObjectSearch('div[id^=ext-element-]',6)
        .click()

        //..Prioridad
        cy.wait(3000)
        cy.ObjectSearch('div[id$=-trigger-picker]',0)
        .click()

        cy.wait(2000)
        cy.ObjectSearch('div[id$=picker-listWrap]',0)
        .contains(Prioridad)
        .click()

        //..Agregar usuario
        cy.log('Agregar Usuario')
        cy.ObjectSearch('a[id^=button-]',4)
        .click()
        
        cy.log('Click en botón de búsqueda avanzada')
        cy.ObjectSearch('div[id$=-trigger-picker]',1)
        .click()
        
        cy.log('Digitar el nombre del usuario')
        cy.wait(3000)
        cy.ObjectSearch('input[id^=textfield-]',0)
        .type(nombreDeUsuario)

        cy.log('Click en checkbox para seleccionar usuario')
        cy.ObjectSearch('span[class="x-grid-checkcolumn"]',0)
        .click()

        cy.log('Click en el botón "Aceptar"')
        cy.ObjectSearch('a[id^=button-]',12)
        .click()



        //..Agregar Grupos de usuarios
        cy.log('Agregar Grupos de usuarios')
        cy.ObjectSearch('a[id^=button-]',4)
        .click()

        cy.log('Click para desplegar Grupos de usuarios')
        cy.ObjectSearch('div[id$=-trigger-picker]',2)
        .click()

        cy.log('Click en Grupos de Usuarios')
        cy.ObjectSearch('div[id$=picker-listWrap]',0)
        .contains(gruposDeUsuarios)
        .click()



        //..Agregar Cola de Datos
        cy.log('Agregar Cola de Datos')
        cy.ObjectSearch('a[id^=button-]',4)
        .click()

        cy.log('Cola de Datos')
        cy.ObjectSearch('div[id^=tagfield-]',17)
        .click()
        
        cy.ObjectSearch('div[id$=picker-listWrap]',0)
        .contains(colaDeDatos)
        .click()

        //..Click en una etiqueta para que se oculten las opciones de Cola
        cy.ObjectSearch('div[id^=tagfield-]',1)
        .click()


        //..Agregar Grupos de colas
        cy.log('Agregar Grupos de cola')
        cy.ObjectSearch('a[id^=button-]',4)
        .click()

        cy.log('Grupos de cola')
        cy.ObjectSearch('div[id^=tagfield-]',18)
        .click()

        cy.ObjectSearch('div[id$=picker-listWrap]',0)
        .contains(gruposColaDeDatos)
        .click()


        //..Agregar Destinatario Variable
        cy.log('Agregar Destinatario Variable')
        cy.ObjectSearch('a[id^=button-]',4)
        .click()

        cy.log('Destinatario Variable')
        cy.ObjectSearch('div[id^=tagfield-]',23)
        .click()

        cy.ObjectSearch('div[id$=picker-listWrap]',0)
        .contains(destinatarioVariable)
        .click()


        //..Mensaje en Español
        //..Mostrar
        cy.ObjectSearch('div[class="x-grid-cell-inner x-grid-cell-inner-row-expander"]',0)
        .click()

        cy.log('Asunto del correo: ')
        cy.wait(2000)
        cy.switchToIframeVisible('iframe',0)
        .clear()
        .type(asuntoES)

        cy.log('Mensaje del correo: ')
        cy.wait(2000)
        cy.switchToIframeNoVisible('iframe',0)
        .clear()
        .type(mensajeES)

        //..Ocultar
        cy.NoVisibleObjectSearch('div[class="x-grid-cell-inner x-grid-cell-inner-row-expander"]',0)
        .click()

        
        //..Mensaje en Inglés
        cy.wait(2000)
        cy.log('Se abre el cuadro para el mensaje en Inglés')
        //..Mostrar
        cy.ObjectSearch('div[class="x-grid-cell-inner x-grid-cell-inner-row-expander"]',1)
        .click()

        cy.log('Asunto del correo: ')
        cy.wait(2000)
        cy.switchToIframeVisible('iframe',0)
        .clear()
        .type(asuntoEN)

        cy.log('Mensaje del correo: ')
        cy.wait(2000)
        
        cy.switchToIframeNoVisible('iframe',2)
        .clear()
        .type(mensajeEN)
        //..Ocultar
        cy.NoVisibleObjectSearch('div[class="x-grid-cell-inner x-grid-cell-inner-row-expander"]',1)
        .click()
        
        //..Click en el Botón "Aceptar"
        cy.ObjectSearch('a[id^=button-]',9)
        .click()

        cy.wait(3000)
    })
    
    it('Texto', () =>{
        //..Constantes
        const nombreDeUsuario = 'Erick'
        const Prioridad = 'Alta'
        const gruposDeUsuarios = 'MPAT_Grupo de Usuarios 1'
        const gruposColaDeDatos = 'MPAT_Grupos de colas de datos 1'
        const destinatarioVariable = 'MPAT_Destinatario Variable 1'
        const colaDeDatos = 'MPAT_Cola de Datos Default'
        const asuntoES = 'MPAT_Asunto en Español'
        const mensajeES = 'MPAT_Mensaje en Español'
        const asuntoEN = 'MPAT_Asunto en Inglés'
        const mensajeEN = 'MPAT_Mensaje en Inglés'
        
        //------------------------------//
        //           Texto
        //------------------------------//
        //..Seleccionar la opción de Texto
        cy.ObjectSearch('div[id^=ext-element-]',12)
        .click()

        
        //..Agregar usuario
        cy.log('Agregar Usuario')
        cy.wait(3000)
        cy.ObjectSearch('a[id^=button-]',4)
        .click()
        
        cy.log('Click en botón de búsqueda avanzada')
        cy.ObjectSearch('div[id$=-trigger-picker]',0)
        .click()
        
        cy.log('Digitar el nombre del usuario')
        cy.wait(3000)
        cy.ObjectSearch('input[id^=textfield-]',0)
        .type(nombreDeUsuario)

        cy.log('Click en checkbox para seleccionar usuario')
        cy.ObjectSearch('span[class="x-grid-checkcolumn"]',0)
        .click()

        cy.log('Click en el botón "Aceptar"')
        cy.ObjectSearch('a[id^=button-]',12)
        .click()



        //..Agregar Grupos de usuarios
        cy.log('Agregar Grupos de usuarios')
        cy.ObjectSearch('a[id^=button-]',4)
        .click()

        cy.log('Click para desplegar Grupos de usuarios')
        cy.ObjectSearch('div[id$=-trigger-picker]',1)
        .click()

        cy.log('Click en Grupos de Usuarios')
        cy.ObjectSearch('div[id$=picker-listWrap]',0)
        .contains(gruposDeUsuarios)
        .click()

        //..Click para que desaparezca el combo
        cy.ObjectSearch('ul[id^=tagfield-]',1)
        .click()



        //..Agregar Cola de Datos
        cy.log('Agregar Cola de Datos')
        cy.ObjectSearch('a[id^=button-]',4)
        .click()

        cy.log('Cola de Datos')
        cy.ObjectSearch('div[id^=tagfield-]',17)
        .click()
        
        cy.ObjectSearch('div[id$=picker-listWrap]',0)
        .contains(colaDeDatos)
        .click()

        //..Click en una etiqueta para que se oculten las opciones de Cola
        cy.ObjectSearch('div[id^=tagfield-]',1)
        .click()


        //..Agregar Grupos de colas
        cy.log('Agregar Grupos de cola')
        cy.ObjectSearch('a[id^=button-]',4)
        .click()

        cy.log('Grupos de cola')
        cy.ObjectSearch('div[id^=tagfield-]',18)
        .click()

        cy.ObjectSearch('div[id$=picker-listWrap]',0)
        .contains(gruposColaDeDatos)
        .click()


        //..Agregar Destinatario Variable
        cy.log('Agregar Destinatario Variable')
        cy.ObjectSearch('a[id^=button-]',4)
        .click()

        cy.log('Destinatario Variable')
        cy.ObjectSearch('div[id^=tagfield-]',26)
        .click()

        cy.ObjectSearch('div[id$=picker-listWrap]',0)
        .contains(destinatarioVariable)
        .click()


        //..Mensaje en Español
        //..Mostrar
        cy.ObjectSearch('div[class="x-grid-cell-inner x-grid-cell-inner-row-expander"]',0)
        .click()

        cy.log('Mensaje en Español: ')
        cy.wait(2000)
        cy.switchToIframeNoVisible('iframe',1)
        .clear()
        .type(mensajeES)

        //..Ocultar
        cy.NoVisibleObjectSearch('div[class="x-grid-cell-inner x-grid-cell-inner-row-expander"]',0)
        .click()

        
        //..Mensaje en Inglés
        cy.wait(2000)
        cy.log('Se abre el cuadro para el mensaje en Inglés')
        //..Mostrar
        cy.ObjectSearch('div[class="x-grid-cell-inner x-grid-cell-inner-row-expander"]',1)
        .click()

        cy.log('Mensaje del correo: ')
        cy.wait(2000)
        
        cy.switchToIframeVisible('iframe',0)
        .clear()
        .type(mensajeEN)
        //..Ocultar
        cy.NoVisibleObjectSearch('div[class="x-grid-cell-inner x-grid-cell-inner-row-expander"]',1)
        .click()
        
        //..Click en el Botón "Aceptar"
        cy.ObjectSearch('a[id^=button-]',9)
        .click()

        cy.pause()
        cy.wait(3000)
        cy.SaveAndClose()
    })
})