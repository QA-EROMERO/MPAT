describe('TC025 Diseño de reportes de alertas', () => {

    //..Mantenimiento Expiracion de registro
    it.only('Diseño de reportes de alertas', () =>{
        cy.LogIn()
        
        //..Constantes
        const MTE = 'Diseño de reportes de alertas'
        const Codigo = 7777
        const Nombre = 'MPAT_Diseño de reporte 1'
        const Descripcion = 'Desc. ' + Nombre
        const codigoDeRegistro = 3783

        cy.MTESearch(MTE,0)
        //cy.wait(28000)
        cy.wait(18000)


        cy.log('Click Botón "Agregar" Diseño de reportes de alertas')
        cy.ObjectSearch('a[id^=button-]',8)
        .click()

        cy.wait(6000)
        
        

    })

    it('Propiedades', () => {
        //..Constantes
        
        //..Código
        cy.log('Código')
        cy.wait(3000)
        cy.get('input[name="code"]')
        .type(Codigo)

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

        //..Tipo de envío
        cy.log('Tipo de envío: Texto')
        cy.NoVisibleObjectSearch('input[id^=radio-]',0)
        .click()

        //..Click en el tab Diario
        cy.log('Click en el tab Diario')
        cy.ObjectSearch('span[id^=tab-]',9)
        .click()
        

        //..Click en el botón de agregar
        cy.log('Click en el botón agregar')
        cy.ObjectSearch('a[id^=button-]',4)
        .click()


        //..Mover el Slide a las 14 horas
        //.. .move es una función del Plugin cypress-drag-drop
        //.. https://github.com/4teamwork/cypress-drag-drop
        cy.log('Mover el Slide a las 14 horas')
        cy.wait(2000)
        cy.ObjectSearch('div[id^=slider-]',5)
        .move({x: 238}) //..17 por nivel
        //.trigger('mousedown', { which: 1, pageX: 6000, pageY: 0 })
        /*.invoke('attr',"style","left: 52.1739%; touch-action: pan-y pinch-zoom; z-index: 10000;")
        .trigger("change")
        .click({force:true})*/

        //..Mover los minutos a 35
        cy.log('Mover el Slide a los 35 minutos')
        cy.wait(2000)
        cy.ObjectSearch('div[id^=slider-]',11)
        .move({x: 354}) //.. 6 por minuto
        //.invoke('attr',"style","left: 59.322%; touch-action: pan-y pinch-zoom; z-index: 10000;")
        //.trigger("change")
        //.click({force:true})
    })

    it.only('Detalle de reporte', () => {
        //..Constantes
        const codigoDeRegistro = 3783

         //..Tab Detalle del reporte
         cy.log('Tab Detalle del reporte')
         cy.wait(2000)
         cy.ObjectSearchDebug('span[id^=tab-]')
         cy.ObjectSearch('span[id^=tab-]',1)
         .click()
 
         //..Click en el botón de búsqueda avanzada de Registro
         cy.log('Click en búsqueda avanzada de Registro')
         cy.wait(2000)
         cy.ObjectSearch('div[id$=-trigger-foo]',0)
         .click()
 
         //..Búsqueda por Código
         cy.log('Código')
         cy.wait(2000)
         cy.ObjectSearch('input[id^=textfield-]',0)
         .type(codigoDeRegistro)
 
         //..Click en el primer registro
         cy.wait(2000)
         cy.ObjectSearch('div[class="x-grid-cell-inner "]',0)
         .click()
 
         //..Click en el botón "Aceptar"
         cy.log('Click en el botón Aceptar')
         cy.wait(2000)
         cy.ObjectSearch('a[id^=button-]',5)
         .click()
 
         //..Búsqueda de Campos
         cy.log('Búsqueda de Campos')
         cy.wait(3000)
         cy.ObjectSearch('input[id^=M5Searchfield-]',1)
         .type('MPAT')
 
         //..Click en el botón de búsqueda para filtrar los campos
         cy.log('Click en el botón para filtrar campos')
         cy.wait(4000)
         cy.ObjectSearch('div[id$=-trigger-search]',1)
         .click()
 
         //..Agregar el primer campo
         //cy.ObjectSearchDebug('div[id^=panel-]')
         //let ID1 = "'#" + cy.ObjectSearchReturnID('div[class="shadow"]',0) + "'"
         //let ID2 = "'#" + cy.ObjectSearchReturnID('div[id^=panel-]',10) + "'"
         //console.log('ID del Panel: ' + String(ID1))
         //console.log('ID del Panel: ' + String(ID2))
         cy.log('Agregar primer campo')
         cy.wait(2000)
         //cy.get('.shadow').eq(1).drag('#panel-1556-innerCt')
         //cy.get('[data-recordindex="0"]').drag('#panel-1556-innerCt')
         //cy.ObjectSearch('div[class="shadow"]',0)
 
         //cy.get('div[class="shadow"]').eq(0).move({ x: 200, y: -400 },{force: true})
         //.move({y: -800})
         //cy.ObjectSearch('div[class="shadow"]',0)
         //.drag(ID)
         
         /*cy.wait(2000)
         cy.get('#panel-1556-innerCt')
         .invoke('attr','visibility','visible')
 
         cy.wait(2000)
         cy.get('[data-recordindex="0"]')
         .invoke('attr','visibility','visible')
         */
        
         //cy.ObjectSearchDebug('[data-recordindex="0"]')
         //cy.ObjectSearch('div[id^=panel-]',10)
 
         /*cy.wait(2000)
         cy.ObjectSearch('[data-recordindex="0"]',0)
         //.drag('#panel-1556-innerCt')
         .drag('#panel-1555')
         //.move({x: 100, y: -2200})
 
         cy.pause()
         cy.wait(2000)
         cy.ObjectSearch('[data-recordindex="0"]',0)
         .drag('#panel-1555-bodyWrap')
 
         cy.pause()
         cy.wait(2000)
         cy.ObjectSearch('[data-recordindex="0"]',0)
         .drag('#panel-1555-body')
 
         cy.pause()
         cy.wait(2000)
         cy.ObjectSearch('[data-recordindex="0"]',0)
         .drag('#panel-1556')
 
         cy.pause()
         cy.wait(2000)
         cy.ObjectSearch('[data-recordindex="0"]',0)
         .drag('#panel-1556-bodyWrap')
 
         cy.pause()
         cy.wait(2000)
         cy.ObjectSearch('[data-recordindex="0"]',0)
         .drag('#panel-1556-body')*/
 
         const dataTransfer = new DataTransfer;
 
         cy.ObjectSearch('[data-recordindex="0"]',0)
         .trigger('dragstart', { dataTransfer });
 
         cy.get('#panel-1556-innerCt')
         .trigger('drop', { bubble : 'green' , dataTransfer });
 
         //cy.ObjectSearch('[data-recordindex="0"]',0)
         //.trigger('dragend');   
         
         //.... DRAG AND DROP NO FUNCIONA EN MONITOR V5
         cy.pause()
         cy.get('#panel-1556-innerCt')
         .invoke('attr','draggable','true')
 
         cy.pause()
         cy.wait(2000)
         cy.ObjectSearch('[data-recordindex="0"]',0)
         .drag('#panel-1556-innerCt')
 
         cy.pause()
         cy.wait(2000)
         cy.ObjectSearch('[data-recordindex="0"]',0)
         .drag('#panel-1556-targetEl')
 
         //cy.log('Panel !!!')
         //cy.ObjectSearchDebug('div[id^=panel-]')
 
 
 
         cy.wait(3000)
         cy.SaveAndClose()
    })
})
