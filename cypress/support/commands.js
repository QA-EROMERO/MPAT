// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//import '@4tw/cypress-drag-drop'


// Comando LogIn de Monitor v5.0.3
Cypress.Commands.add('LogIn', () => {  
    // Constantes
    const URL = 'https://plustilab3:50002/launcher/production/index.html'
    const user = 'revisor1'
    const password = 'Andromeda7/'
    const monitorModule = 'ACRM'
    const rol = 'ADMINISTRATOR'
    
    // Load login page
    cy.log('Se carga el Sitio de Monitor V5.0.7')
    cy.visit(URL)
    
    //..Se Ingresa el Nombre del Usuario
    cy.wait(2000)
    cy.log('Ingreso de Usuario')
    cy.get('[name="userid"]', { timeout: 240000 }).type(user)

    /*
    cy.get('[name="userid"]')
    .invoke('attr', 'id').then(Id => {
        cy.log('Id : ', Id);
        console.log('Id: ' + Id)
    });
    */


    //..Se Ingresa Contraseña del Usuario
    cy.wait(2000)
    cy.log('Ingreso de Contraseña')
    cy.get('[name="password"]').type(password)

    //..Esperamos a que aparezca el mensaje verde, que indica la conexión a la BD
    //cy.wait(3000)

    // Click en el botón "Verificar"
    //console.log(cy.ObjectSearchReturnID('a[id^=button-]',0))
    cy.ObjectSearch('a[id^=button-]',0).click()

    

    //..FUNCIÓN IMPORTANTISIMA
    //..Después de hacer click en el botón Guardar se genera un error
    //..que esta función lo detecta y lo ignora, esto hace que no se
    //..interrumpa la ejecución del Script.
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })


    //cy.ObjectSearchDebug('a[id^=button-]')
    //..Click en el popup de confirmación
    //cy.ObjectSearch('a[id^=button-]',0).click()
    cy.wait(6000)
    //..IMPORTANTISIMO
    //..Query Condicional, si ya se encuentra autenticado se cierra el cuadro de diálogo
    //..y se vuelve a presionar el botón "Verificar"
    cy.get('body').then((body) => {
        //console.log(body.find('div[class="x-component x-message-box-icon x-box-item x-component-default x-dlg-icon x-message-box-question"]'))
        if(body.find('div[class="x-component x-message-box-icon x-box-item x-component-default x-dlg-icon x-message-box-question"]').length > 0){
            //console.log('MENSAJE EMERGENTE')
            //..Click en el popup de confirmación
            cy.wait(4000)
            cy.ObjectSearch('a[id^=button-]',0).click()

            cy.wait(4000)
            // Click en el botón "Verificar" 
            cy.ObjectSearch('a[id^=button-]',0).click()

        }
    })

    //.. Los siguientes 4 click se inhabilitan debido a que el usuario EROMERO
    //.. solo tiene un módulo asignado, por lo que al presionar click en el botón
    //.. verificar ingresa de una vez al módulo.  NO BORRARLOS
    cy.wait(2000)
    //..Click para elegir módulo
    cy.get('div[id^=auth-module-component-trigger-picker]')
    .click()

    //..Click en el ódulo
    cy.get('div[id=auth-module-component-picker]')
    .contains(monitorModule)
    .click()

    //..Click para seleccionar el Rol
    cy.ObjectSearch('div[id=auth-role-component-trigger-picker]',0)
    .click()

    cy.ObjectSearch('ul[id=auth-role-component-picker-listEl]',0)
    .contains(rol)
    .click()

    cy.wait(1000)
    cy.ObjectSearch('a[id^="button-"]',0).click()

    cy.wait(5000)

})

Cypress.Commands.add('customLogIn', (Modulo) => {  
    // Constantes
    const URL = 'https://plustilab3:50002/launcher/production/index.html'
    const user = 'revisor1'
    const password = 'Andromeda7/'
    const monitorModule = Modulo
    const rol = 'ADMINISTRATOR'
    
    // Load login page
    cy.log('Se carga el Sitio de Monitor V5.0.3')
    cy.visit(URL)
    
    //..Se Ingresa el Nombre del Usuario
    cy.wait(2000)
    cy.log('Ingreso de Usuario')
    cy.get('[name="userid"]', { timeout: 240000 }).type(user)

    /*
    cy.get('[name="userid"]')
    .invoke('attr', 'id').then(Id => {
        cy.log('Id : ', Id);
        console.log('Id: ' + Id)
    });
    */


    //..Se Ingresa Contraseña del Usuario
    cy.wait(2000)
    cy.log('Ingreso de Contraseña')
    cy.get('[name="password"]').type(password)

    //..Esperamos a que aparezca el mensaje verde, que indica la conexión a la BD
    //cy.wait(3000)

    // Click en el botón "Verificar"
    cy.ObjectSearch('a[id^=button-]',0).click()
    

    //..FUNCIÓN IMPORTANTISIMA
    //..Después de hacer click en el botón Guardar se genera un error
    //..que esta función lo detecta y lo ignora, esto hace que no se
    //..interrumpa la ejecución del Script.
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })


    //cy.ObjectSearchDebug('a[id^=button-]')
    //..Click en el popup de confirmación
    //cy.ObjectSearch('a[id^=button-]',0).click()
    cy.wait(6000)
    //..IMPORTANTISIMO
    //..Query Condicional, si ya se encuentra autenticado se cierra el cuadro de diálogo
    //..y se vuelve a presionar el botón "Verificar"
    cy.get('body').then((body) => {
        //console.log(body.find('div[class="x-component x-message-box-icon x-box-item x-component-default x-dlg-icon x-message-box-question"]'))
        if(body.find('div[class="x-component x-message-box-icon x-box-item x-component-default x-dlg-icon x-message-box-question"]').length > 0){
            //console.log('MENSAJE EMERGENTE')
            //..Click en el popup de confirmación
            cy.wait(4000)
            cy.ObjectSearch('a[id^=button-]',0).click()

            cy.wait(4000)
            // Click en el botón "Verificar"
            cy.ObjectSearch('a[id^=button-]',0).click()
        }
    })
      
    //cy.wait(2000)
    //..Click para elegir módulo
    cy.get('div[id^=auth-module-component-trigger-picker]')
    .click()

    //..Click en el ódulo
    cy.get('div[id=auth-module-component-picker]')
    .contains(monitorModule)
    .click()

    //..Click para seleccionar el Rol
    cy.ObjectSearch('div[id=auth-role-component-trigger-picker]',0)
    .click()

    cy.ObjectSearch('ul[id=auth-role-component-picker-listEl]',0)
    .contains(rol)
    .click()

    //cy.wait(1000)
    cy.ObjectSearch('a[id^="button-"]',0).click()

    cy.wait(5000)

})

/* Función que identifica los objetos visibles. 
 Recibe 2 parámetros:
    1. Locator
    2. Número de Objeto Visible: Es el ID del Arreglo

    cy.ObjectSearch('a[id^="button-"]',0).click()
*/
Cypress.Commands.add('ObjectSearch', (Locator, objectNumber) => {

    // Se declara un arreglo para guardar los index de los objetos visibles
    let visibleItems = [];
    let ObjectN = objectNumber;
    // Se recorren todos los objetos Visibles en ese momento y se guardan
    // los index en un arreglo
    cy.wait(3000) //.. Se debe dejar este Wait para que no falle en los Scripts
    cy.get(Locator,{timeout:60000})
    .each(($el, index, $list) =>{
        //cy.log(index)
        if($el.is(':visible')){
            //cy.log('eq(' + index + ') es Visible')
            visibleItems.push(index)
        }
    }).as("myvisibleItems")

    // Devuelve un get object, por lo que se debe concatenar un
    // .click() o .type('') al final de la invocación
    //cy.wait(2000)
    cy.get("@myvisibleItems").then(() => {
        //ObjectN = visibleItems[objectNumber];
        cy.get(Locator,{timeout:240000}).eq(visibleItems[ObjectN])
    })
})

Cypress.Commands.add('ObjectSearchReturnID', (Locator, objectNumber) => {

    // Se declara un arreglo para guardar los index de los objetos visibles
    let visibleItems = [];
    let ObjectN = objectNumber;
    // Se recorren todos los objetos Visibles en ese momento y se guardan
    // los index en un arreglo
    cy.wait(3000) //.. Se debe dejar este Wait para que no falle en los Scripts
    cy.get(Locator,{timeout:60000})
    .each(($el, index, $list) =>{
        //cy.log(index)
        if($el.is(':visible')){
            //cy.log('eq(' + index + ') es Visible')
            visibleItems.push($el.attr('id'))
            //console.log($el.attr('id'))
        }
    }).as("myvisibleItems")

    // Devuelve un get object, por lo que se debe concatenar un
    // .click() o .type('') al final de la invocación
    //cy.wait(2000)
    cy.get("@myvisibleItems").then(() => {
        //ObjectN = visibleItems[objectNumber];
        //cy.get(Locator,{timeout:240000}).eq(visibleItems[ObjectN])
        console.log(visibleItems[ObjectN])
        return visibleItems[ObjectN];
        //.invoke('attr',"id")
    })
})
/*
Función que se utiliza para identificar el objeto visible a seleccionar
Al utilizar la función solo se envía el string a localizar en el DOM
cy.ObjectSearchDebug('a[id^="button-"]')
*/
Cypress.Commands.add('ObjectSearchDebug', (Locator) => {
    console.log('||-------------- NEW ELEMENT --------------||')
    console.log('');
    // Se declara un arreglo para guardar los index de los objetos visibles
    let visibleItems = [];
    let cont = 0;
    // Se recorren todos los objetos Visibles en ese momento y se guardan
    // los index en un arreglo llamado visibleItems
    cy.wait(4000) //..Es necesario colocar un wait para garantizar que haya cargado los objetos.
    cy.get(Locator,{timeout:60000})
    .each(($el, index, $list) =>{
        //..Se valida si el objeto es Visible o no
        if($el.is(':visible')){
            
            //..Si es visible se guarda en el Arreglo
            visibleItems.push(index);
            //..Imprime en la consola del Navegador el elemento
            //..Se debe desplegar y colocar el puntero sobre el elemento y quedará
            //..marcada sobre la pantalla.
            console.log('visibleItems[' + cont + '] = ' + index + ' => ')
            console.log($el)
            cont = cont + 1;
        }
        
        /*
        visibleItems.forEach(function(item, index, array){
            console.log(item, index)
        })
        */
    }).as("myvisibleItems") //..El resultado de este cy.get se guarda con el alias @myvisibleItems

    
    // SI FUNCIONA NO BORRAR - NO BORRAR
    /*
    cy.get("@myvisibleItems").then(() => {
        // Se impren en la consola los IDs del Arreglo donde se encuentran
        // Los objetos que son visibles
        var i;
        var longitudDeArray = visibleItems.length; //..Variable que contiene la longitud del Arreglo (Número de objetos visibles encontrados)
        console.log('Longitud del Array: ' + longitudDeArray)

        for (i = 0; i < longitudDeArray; i++) {
            //cy.log('Item Visible ' + i + ' en el DOM: ' + visibleItems[0])
            console.log('visibleItems[' + i + '] = ' + visibleItems[i])

            cy.log('visibleItems[' + i + '] = ' + visibleItems[i])
        }
    }) //..Fin del recorrido del resultado del get (Arreglo)
    */
   
    // Se coloca la función cy.pause() para que se detenga la ejecución y así
    // poder indicarle a la función ObjectSearch el número de objeto que
    // necesitamos como Target

    console.log('')
    console.log('')
    console.log('')
    cy.pause()
})

//..La siguiente función se utiliza para los objetos no visibles.
//..Por ejemplo, los iFrames
//..Esta función se utiliza dentro de la función switchToIframe
Cypress.Commands.add('NoVisibleObjectSearch', (Locator, objectNumber) => {

    // Se declara un arreglo para guardar los index de los objetos visibles
    let NovisibleItems = [];
    let ObjectN = objectNumber;
    // Se recorren todos los objetos Visibles en ese momento y se guardan
    // los index en un arreglo
    cy.wait(3000) //.. Se debe dejar este Wait para que no falle en los Scripts
    cy.get(Locator,{timeout:60000})
    .each(($el, index, $list) =>{
        //cy.log(index)
        if($el.is(':hidden')){
            //cy.log('eq(' + index + ') es Visible')
            NovisibleItems.push(index)
        }
    }).as("myNovisibleItems")

    // Devuelve un get object, por lo que se debe concatenar un
    // .click() o .type('') al final de la invocación
    //cy.wait(2000)
    cy.get("@myNovisibleItems").then(() => {
        //ObjectN = visibleItems[objectNumber];
        cy.get(Locator,{timeout:240000}).eq(NovisibleItems[ObjectN])
    })
})

Cypress.Commands.add('NoVisibleObjectSearchDebug', (Locator) => {
    console.log('||-------------- NEW ELEMENT --------------||')
    console.log('');
    // Se declara un arreglo para guardar los index de los objetos visibles
    let NovisibleItems = [];
    let cont = 0;
    // Se recorren todos los objetos Visibles en ese momento y se guardan
    // los index en un arreglo llamado visibleItems
    cy.wait(4000) //..Es necesario colocar un wait para garantizar que haya cargado los objetos.
    cy.get(Locator,{timeout:60000})
    .each(($el, index, $list) =>{
        //..Se valida si el objeto es Visible o no
        if($el.is(':hidden')){
            
            //..Si es visible se guarda en el Arreglo
            NovisibleItems.push(index);
            //..Imprime en la consola del Navegador el elemento
            //..Se debe desplegar y colocar el puntero sobre el elemento y quedará
            //..marcada sobre la pantalla.
            console.log('NovisibleItems[' + cont + '] = ' + index + ' => ')
            console.log($el)
            cont = cont + 1;
        }
        
        /*
        visibleItems.forEach(function(item, index, array){
            console.log(item, index)
        })
        */
    }).as("myNovisibleItems") //..El resultado de este cy.get se guarda con el alias @myvisibleItems

    
    // SI FUNCIONA NO BORRAR - NO BORRAR
    /*
    cy.get("@myvisibleItems").then(() => {
        // Se impren en la consola los IDs del Arreglo donde se encuentran
        // Los objetos que son visibles
        var i;
        var longitudDeArray = visibleItems.length; //..Variable que contiene la longitud del Arreglo (Número de objetos visibles encontrados)
        console.log('Longitud del Array: ' + longitudDeArray)

        for (i = 0; i < longitudDeArray; i++) {
            //cy.log('Item Visible ' + i + ' en el DOM: ' + visibleItems[0])
            console.log('visibleItems[' + i + '] = ' + visibleItems[i])

            cy.log('visibleItems[' + i + '] = ' + visibleItems[i])
        }
    }) //..Fin del recorrido del resultado del get (Arreglo)
    */
   
    // Se coloca la función cy.pause() para que se detenga la ejecución y así
    // poder indicarle a la función ObjectSearch el número de objeto que
    // necesitamos como Target

    console.log('')
    console.log('')
    console.log('')
    cy.pause()
})
//..Función que busca los mantenimientos y selecciona la tarjeta indicada
//..Esta función espera dos parámetros:
//..MTE => Nombre del Mantenimiento
//..CardNumber => Número de Tarjeta
Cypress.Commands.add('MTESearch', (MTE, CardNumber) => {
    //..Búsqueda de Mantenimiento
    //..Limpia el input por si había una búsqueda anteriormente
    cy.ObjectSearch('input[id^=M5Searchfield-]',0)
    .clear()

    cy.wait(2000) //..Antes de escribir siempre se esperan 2 seg.
    cy.ObjectSearch('input[id^=M5Searchfield-]',0)
    .type(MTE)

    //..Click en la tarjeta
    cy.ObjectSearch('div[class*= "card-global-menus-item card-global-menus info-card-item fullShadow"]',CardNumber)
    .click()
})


Cypress.Commands.add('Save', () => {
    cy.log('Click Botón Guardar')
    cy.ObjectSearch('a[id^=floatingbutton-]',1)
    .click()
    
    cy.log('Comentario')
    //..Antes de cada type() hay que poner un wait de 3 seg.
    cy.wait(3000)
    cy.get('textarea[name=commentValue]')
    .type('MPAT')

    cy.log('Nivel de Confidencialidad - PUBLICO')
    cy.ObjectSearch('[class="x-grid-cell-inner x-grid-cell-inner-treecolumn"]',2)
    .click()

    cy.log('Click en Botón Acetpar')
    cy.ObjectSearch('a[id^=button-]',1)
    .click()

    cy.wait(2000)
})


Cypress.Commands.add('SaveAndClose', () => {
    cy.log('Click Botón Guardar')
    cy.ObjectSearch('a[id^=floatingbutton-]',1)
    .click()
    
    cy.log('Comentario')
    //..Antes de cada type() hay que poner un wait de 3 seg.
    cy.wait(3000)
    cy.get('textarea[name=commentValue]')
    .type('MPAT')

    cy.log('Nivel de Confidencialidad - PUBLICO')
    cy.ObjectSearch('[class="x-grid-cell-inner x-grid-cell-inner-treecolumn"]',2)
    .click()

    cy.log('Click en Botón Acetpar')
    cy.ObjectSearch('a[id^=button-]',1)
    .click()

    //..Esperar a que guarde el registro
    cy.wait(18000)
    cy.log('Cerrar Mantenimiento')
    cy.ObjectSearch('a[id^=button-]',1)
    .click()

    cy.wait(3000)
})


Cypress.Commands.add('SaveCommentAndClose', () => {
    cy.log('Click Botón Guardar')
    cy.ObjectSearch('a[id^=floatingbutton-]',1)
    .click()
    
    cy.log('Comentario')
    //..Antes de cada type() hay que poner un wait de 3 seg.
    cy.wait(3000)
    cy.get('textarea[name=commentValue]')
    .type('MPAT')

    cy.wait(1000)
    cy.log('Click en Botón Acetpar')
    cy.ObjectSearch('a[id^=button-]',1)
    .click()

    //..Esperar a que guarde el registro
    cy.wait(9000)
    cy.log('Cerrar Mantenimiento')
    cy.ObjectSearch('a[id^=button-]',1)
    .click()

    cy.wait(3000)
})


//..Funcion para tipo de categoria rango en clasificacion de riesgo
Cypress.Commands.add('AddRange', (Color,Desde,Hasta,nombreColumna) => {
    
    //..Ingreso de tipo de categoria 
    cy.wait(3000)
    cy.log('Digitar Tipo de categoria')
    cy.get('input[name="uuidDataCategoryType"]')
    .type("Rango").type('{enter}') 

    //..Agregando registro tipo rango
    cy.wait(3000)
	cy.log('Click en boton add')
    cy.ObjectSearch('a[id^="button"]',4)
    .click()

    //..Seleccionando color
    cy.wait(3000)
    cy.log('Click en seleccion de color')
    cy.get('input[name="color"]')
    .click()
            
    cy.wait(3000)
    cy.log('Seleccion de color')
    cy.ObjectSearch('input[name^="textfield"]',0)
    .clear()
    .type(Color)

    cy.wait(3000)
    cy.log('Click en Ok seleccion de color')
    cy.ObjectSearch('span[id^=button]',23)
    .click()

    //..Ingreso de valores
    cy.wait(3000)
    cy.log('Digitar Desde')
    cy.get('input[name="fromRange"]')
    .type(Desde)

    cy.wait(3000)
    cy.log('Digitar Hasta')
    cy.get('input[name="thruRange"]')
    .type(Hasta)

    cy.wait(3000)
    cy.log('Digitar nombreColumna')
    cy.get('input[name="nameColumn"]')
    .type(nombreColumna).type('{enter}') 
    
})

//..Funcion para tipo de categoria igual a en clasificacion de riesgo 
Cypress.Commands.add('addEqualTo', (Color,nombreColumna,Valor) => {
    
    //..Ingreso de tipo de categoria 
    cy.wait(3000)
    cy.log('Digitar Tipo de categoria')
    cy.get('input[name="uuidDataCategoryType"]')
    .type("Igual a").type('{enter}') 

    //..Agregando registro tipo rango
    cy.wait(3000)
    cy.log('Click en boton add')
    cy.ObjectSearch('a[id^="button"]',4)
    .click()

    //..Seleccionando color
    cy.wait(3000)
    cy.log('Click en seleccion de color')
    cy.get('input[name="color"]')
    .click()
            
    cy.wait(3000)
    cy.log('Seleccion de color')
    cy.ObjectSearch('input[name^="textfield"]',0)
    .clear()
    .type(Color)

    cy.wait(3000)
    cy.log('Click en Ok seleccion de color')
    cy.ObjectSearch('span[id^="button"]',23)
    .click()

    //..Ingreso de valores
    cy.wait(3000)
    cy.log('Digitar nombreColumna')
    cy.get('input[name="nameColumn"]')
    .type(nombreColumna)

    cy.wait(3000)
    cy.log('Digitar Valor')
    cy.get('input[name="valueEqual"]')
    .type(Valor).type('{enter}') 
    
})


//..Función para agregar campos básicos de tipo Numérico a un Registro
Cypress.Commands.add('addBasicNumericField',(Codigo,Nombre,Longitud,Decimal) =>{
    const nombreCorto = 'MPAT'
    const Descripcion = 'Desc. ' + Nombre

    //..Tab de Estructura
    cy.wait(2000)
    cy.ObjectSearch('a[id^=tab-]',1)
    .click()

    //..Click en el botón Agregar
    cy.wait(2000)
    cy.ObjectSearch('a[id^=button-]',4)
    .click()

    //..Código del Campo
    cy.wait(3000)
    cy.ObjectSearch('input[id^=numberfield-]',0)
    .type(Codigo)

    //..Nombre del Campo
    cy.wait(3000)
    cy.ObjectSearch('input[id^=textfield-]',0)
    .type(Nombre)

    //..Descripción
    cy.wait(3000)
    cy.ObjectSearch('textarea[id^=textarea-]',0)
    .type(Descripcion)

    //..Clasificador de campo
    cy.ObjectSearch('div[id$=-trigger-picker]',0)
    .click()

    cy.ObjectSearch('div[id$=-picker-listWrap]',0)
    .contains('MPAT_Clasificacion de Campos 1')
    .click()

    //..Nombre Corto
    cy.wait(3000)
    cy.ObjectSearch('input[id^=textfield-]',0)
    .type(nombreCorto)

    //..Tipo de Campo
    cy.ObjectSearch('div[id$=-trigger-picker]',1)
    .click()

    cy.ObjectSearch('div[id$=-picker-listWrap]',0)
    .contains('Numérico')
    .click()

    //..Longitud
    cy.ObjectSearch('input[id^=numberfield-]',0)
    .clear()
    .type(Longitud)

    //..Decimal
    cy.ObjectSearch('input[id^=numberfield-]',1)
    .clear()
    .type(Decimal)

    //..Guardar en Journal
    cy.get('input[name="journalSaved"]').check()

    //..Presionar botón "Aceptar"
    cy.ObjectSearch('span[id^=button-]',12)
    .click()

})


//..Función para agregar campos básicos de tipo Alfanumérico a un Registro
Cypress.Commands.add('addBasicAlphanumericField',(Codigo,Nombre,Longitud) =>{
    const nombreCorto = 'MPAT'
    const Descripcion = 'Desc. ' + Nombre

    //..Tab de Estructura
    cy.wait(2000)
    cy.ObjectSearch('a[id^=tab-]',1)
    .click()

    //..Click en el botón Agregar
    cy.wait(2000)
    cy.ObjectSearch('a[id^=button-]',4)
    .click()

    //..Código del Campo
    cy.wait(3000)
    cy.ObjectSearch('input[id^=numberfield-]',0)
    .type(Codigo)

    //..Nombre del Campo
    cy.wait(3000)
    cy.ObjectSearch('input[id^=textfield-]',0)
    .type(Nombre)

    //..Descripción
    cy.wait(3000)
    cy.ObjectSearch('textarea[id^=textarea-]',0)
    .type(Descripcion)

    //..Clasificador de campo
    cy.ObjectSearch('div[id$=-trigger-picker]',0)
    .click()

    cy.ObjectSearch('div[id$=-picker-listWrap]',0)
    .contains('MPAT_Clasificacion de Campos 1')
    .click()

    //..Nombre Corto
    cy.wait(3000)
    cy.ObjectSearch('input[id^=textfield-]',0)
    .type(nombreCorto)

    //..Tipo de Campo
    cy.ObjectSearch('div[id$=-trigger-picker]',1)
    .click()

    cy.ObjectSearch('div[id$=-picker-listWrap]',0)
    .contains('Alfanumérico')
    .click()

    //..Longitud
    cy.ObjectSearch('input[id^=numberfield-]',0)
    .clear()
    .type(Longitud)

    //..Guardar en Journal
    cy.get('input[name="journalSaved"]').check()

    //..Presionar botón "Aceptar"
    cy.ObjectSearch('span[id^=button-]',12)
    .click()

})

//..Función para escribir sobre otro iFrame
//.. cy.switchToIframe('#mce_0_ifr').clear().type('hello')
Cypress.Commands.add('switchToIframeNoVisible',(iframe,index) => {
    return cy
    .NoVisibleObjectSearch(iframe,index)
    .its('0.contentDocument.body')
    .should('be.visible')
    .then(cy.wrap);
})

//..Se utiliza cuando e iFrame sí es visible, como en el caso de Alertas Manuales
//..En el cuadro de texto Mensajes en Inglés.
Cypress.Commands.add('switchToIframeVisible',(iframe,index) => {
    return cy
    .ObjectSearch(iframe,index)
    .its('0.contentDocument.body')
    .should('be.visible')
    .then(cy.wrap);
})


