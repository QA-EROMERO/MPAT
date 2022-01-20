describe('Rutinas especiales', () => {

    it('TC014.01 Funciones', () =>{
        cy.LogIn()
        //..Constantes        
        const MTE = 'Rutinas especiales'
        const rutinaEspecial = 'MPAT_Rutina especial 1'
        const Nombre = 'MPAT_Funcion 1'
        const Descripcion = 'Desc. MPAT_Funcion 1'
        const Conexion = 'MPAT_Conexion 1'

        //..Búsqueda del mantenimiento
        cy.MTESearch(MTE,0)
        cy.wait(28000)

        //..Búsqueda Avanzada: Rutina Especial
        cy.log('Búsqueda de la rutina especial')
        cy.ObjectSearch('input[id^=textfield-]',0)
        .type(rutinaEspecial)

        cy.wait(2000)
        cy.log('Click Derecho en el primer valor de la Grid')
        cy.ObjectSearch('div[class="x-grid-cell-inner "]',0)
        .rightclick()

        cy.log('Click en Porgramas Relacionados')
        cy.ObjectSearch('[class="x-menu-item-link"]',3)
        .click()

        cy.log('Click en Porgramas Relacionados: Funciones')
        cy.ObjectSearch('[class="x-menu-item-link"]',4)
        .click({force:true})


        cy.wait(6000)
        cy.log('Click Botón "Agregar" Fucniones')
        //cy.ObjectSearchDebug('a[id^=button-][class="x-btn x-unselectable x-box-item x-toolbar-item x-btn-soft-base-small"]')
        //cy.ObjectSearchDebug('a[id^=button-]')
        cy.ObjectSearch('a[id^=button-]',8)
        .click()

        cy.wait(6000)

        //..Ingreso de nombre de la funcion 
        cy.wait(3000)
        cy.log('Nombre')
        cy.get('input[name="mp_functioncustomplugin-NAME"]')
        .type(Nombre)
        
        cy.wait(3000)
        cy.log('Descripcion')
        cy.get('textarea[name="mp_functioncustomplugin-DESCRIPTION"]')
        .type(Descripcion)

        //..Busqueda avanzada de la conexion 
        cy.wait(3000)
        cy.log('Conexion: Click en el botón de búsqueda avanzada')
        cy.ObjectSearch('div[id$=-trigger-search]',1)
        .click()

        cy.wait(3000)
        cy.log('Conexion: Digitar Nombre de la conexion')
        cy.ObjectSearch('input[id^=textfield-]',0)
        .type(Conexion)

        cy.log('Seleccionar primer resultado de la grid')
        cy.ObjectSearch('div[class="x-grid-cell-inner "]',0)
        .click()

        cy.wait(1000)
        cy.log('Click en el botón "Aceptar"')
        cy.ObjectSearch('a[id^=button-]',9)
        .click()

        cy.wait(3000)
        cy.SaveAndClose()
    })

})