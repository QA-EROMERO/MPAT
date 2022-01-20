describe('TC013 Conexiones', () => {

    it('Conexion', () =>{
        cy.LogIn()
        //..Constantes
        const MTE = 'Conexiones'
        const Nombre = 'MPAT_Conexion 1'
        const Usuario = 'MPAT_Usuario'
        const Password = 'MPAT_Password'
        const Servidor = 'MPAT_Servidor'
        const Descripcion = 'Desc. MPAT_Conexion 1'
        const tipoConexion = 'SQL'
        const cadenaConexion = 'cadena.MPAT_Conexion 1'
        
        cy.MTESearch(MTE,0)
        cy.wait(28000)

        cy.log('Click Botón "Agregar" Conexiones')
        cy.ObjectSearch('a[id^=button-]',8)
        .click()

        cy.wait(6000)

        //..Ingreso de nombre de la conexion 
        cy.wait(3000)
        cy.log('Digitar Nombre')
        cy.get('input[name="mp_dataconnectionstore-NAME"]')
        .type(Nombre)
        
        //..Ingreso de usuario de la conexion
        cy.wait(3000)
        cy.log('Digitar Usuario')
        cy.get('input[name="mp_dataconnectionstore-DBUSER"]')
        .type(Usuario)

        //..Ingreso de contraseña de la conexion
        cy.wait(3000)
        cy.log('Digitar Contraseña')
        cy.get('input[name="mp_dataconnectionstore-DBPASSWORD"]')
        .type(Password)

        //..Ingreso de nombre del servidor
        cy.wait(3000)
        cy.log('Digitar Servidor')
        cy.get('input[name="mp_dataconnectionstore-SERVER"]')
        .type(Servidor)

        //..Ingreso de descripcion
        cy.wait(3000)
        cy.log('Digitar Descripcion')
        cy.get('textarea[name="mp_dataconnectionstore-DESCRIPTION"]')
        .type(Descripcion)

        //..Tipo de conexion
        //..Busqueda avanzada de la conexion 
        cy.wait(3000)
        cy.log('Conexion: Click en el botón de búsqueda avanzada')
        cy.ObjectSearch('div[id$=-trigger-search]',1)
        .click()

        cy.wait(3000)
        cy.log('Conexion: Digitar tipo de la conexion')
        cy.ObjectSearch('input[id^=textfield-]',0)
        .type(tipoConexion)

        cy.log('Seleccionar primer resultado de la grid')
        cy.ObjectSearch('div[class="x-grid-cell-inner "]',0)
        .click()

        cy.wait(1000)
        cy.log('Click en el botón "Aceptar"')
        cy.ObjectSearch('a[id^=button-]',9)
        .click()

        //..Ingreso de la cadena de conexion
        cy.wait(3000)
        cy.log('Digitar Cadena de la conexion')
        cy.get('textarea[name="mp_dataconnectionstore-CONNECTIONSTRING"]')
        .type(cadenaConexion)

        cy.wait(3000)
        cy.SaveAndClose()
    })

})