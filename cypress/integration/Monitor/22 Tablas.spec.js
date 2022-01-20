describe('TC013.01 Conexiones', () => {

    it('Tablas', () =>{
        cy.LogIn()
        
        //..Constantes
        const MTE = 'Conexiones'
        const Conexion = 'MPAT_Conexion 1'
        const Nombre = 'MPAT_Tabla 1'
        const Descripcion = 'Desc. MPAT_Tabla 1'
        
        //..Búsqueda del mantenimiento
        cy.MTESearch(MTE,0)
        cy.wait(28000)

        //..Busqueda de la conexion
        cy.log('Búsqueda de la conexion')
        cy.ObjectSearch('input[id^=textfield-]',0)
        .type(Conexion)

        //..Programas relacionados
        cy.wait(2000)
        cy.log('Click Derecho en el primer valor de la Grid')
        cy.ObjectSearch('div[class="x-grid-cell-inner "]',0)
        .rightclick()

        cy.log('Click en Programas Relacionados')
        cy.ObjectSearch('[class="x-menu-item-link"]',3)
        .click()

        //..Programas relacionados: Tablas
        cy.log('Click en Programas Relacionados: Tablas')
        cy.ObjectSearch('[class="x-menu-item-link"]',4)
        .click({force:true})

        //..Click en boton agregar
        cy.wait(6000)
        cy.log('Click Botón "Agregar" Tablas')
        cy.ObjectSearch('a[id^=button-]',8)
        .click()

        cy.wait(6000)

        //..Ingreso de nombre de la tabla 
        cy.wait(3000)
        cy.log('Ingreso de Nombre')
        cy.get('input[name="METADATATABLE-NAME"]')
        .type(Nombre)
        
        //..Ingreso de descripcion
        cy.wait(3000)
        cy.log('Ingreso de Descripcion')
        cy.get('textarea[name="METADATATABLE-DESCRIPTION"]')
        .type(Descripcion)

        //..Guardar y cerrar mantenimiento
        cy.wait(3000)
        cy.SaveAndClose()
    })

})