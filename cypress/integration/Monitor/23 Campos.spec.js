describe('TC013.01.01 Conexiones', () => {

    it('Campos', () =>{
        cy.LogIn()
        
        //..Constantes
        const MTE = 'Conexiones'
        const Conexion = 'MPAT_Conexion 1'
        const tipoDato = 'alphanumeric'
        const Longitud = '10'
        const cifrado = 'AES-256'
        const Nombre = 'MPAT_Campo 1'
        const Descripcion = 'Desc. MPAT_Campo 1'
        const Tabla = 'MPAT_Tabla 1'
        
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

        cy.wait(6000)
        //..Busqueda de la tabla
        cy.log('Búsqueda de la tabla')
        cy.ObjectSearch('input[id^=textfield-]',0)
        .type(Tabla)

        //..Programas relacionados
        cy.wait(2000)
        cy.log('Click Derecho en el primer valor de la Grid')
        cy.ObjectSearch('div[class="x-grid-cell-inner "]',0)
        .rightclick()

        cy.log('Click en Programas Relacionados')
        cy.ObjectSearch('[class="x-menu-item-link"]',3)
        .click()

        //..Programas relacionados: Campos
        cy.log('Click en Programas Relacionados: Campos')
        cy.ObjectSearch('[class="x-menu-item-link"]',4)
        .click({force:true})

        //..Click en boton agregar
        cy.wait(6000)
        cy.log('Click Botón "Agregar" Campos')
        cy.ObjectSearch('a[id^=button-]',8)
        .click()

        cy.wait(6000)

        //..Ingreso de nombre del campo 
        cy.wait(3000)
        cy.log('Ingreso de Nombre')
        cy.get('input[name="mp_metadatafield-NAME"]')
        .type(Nombre)
        
        //..Ingreso de descripcion
        cy.wait(3000)
        cy.log('Ingreso de Descripcion')
        cy.get('textarea[name="mp_metadatafield-DESCRIPTION"]')
        .type(Descripcion)

        //..Tipo de Dato
        //..Busqueda avanzada del tipo de Dato 
        cy.wait(3000)
        cy.log('Conexion: Click en el botón de búsqueda avanzada')
        cy.ObjectSearch('div[id$=-trigger-search]',1)
        .click()

        cy.wait(3000)
        cy.log('Conexion: Digitar tipo de Dato')
        cy.ObjectSearch('input[id^=textfield-]',0)
        .type(tipoDato)

        cy.log('Seleccionar primer resultado de la grid')
        cy.ObjectSearch('div[class="x-grid-cell-inner "]',0)
        .click()

        cy.wait(1000)
        cy.log('Click en el botón "Aceptar"')
        cy.ObjectSearch('a[id^=button-]',9)
        .click()

        //..Ingreso de longitud 
        cy.wait(3000)
        cy.log('Ingreso de Longitud')
        cy.get('input[name="mp_metadatafield-LENGTH"]')
        .type(Longitud)

        //..Click en checkbox
        cy.wait(3000)
        cy.log('Click en "Checkbox"')
        cy.get('input[name="mp_metadatafield-PKFIELD"]')
        .click()
        
       
        //..Tipo de cifrado
        //..Busqueda avanzada del tipo de cifrado 
        cy.wait(3000)
        cy.log('Conexion: Click en el botón de búsqueda avanzada')
        cy.ObjectSearch('div[id$=-trigger-search]',2)
        .click()

        cy.wait(3000)
        cy.log('Conexion: Digitar cifrado de la conexion')
        cy.ObjectSearch('input[id^=textfield-]',0)
        .type(cifrado)

        cy.log('Seleccionar primer resultado de la grid')
        cy.ObjectSearch('div[class="x-grid-cell-inner "]',0)
        .click()

        cy.wait(1000)
        cy.log('Click en el botón "Aceptar"')
        cy.ObjectSearch('a[id^=button-]',9)
        .click()

        //..Guardar y cerrar mantenimiento
        cy.wait(3000)
        cy.SaveCommentAndClose()
    })

})