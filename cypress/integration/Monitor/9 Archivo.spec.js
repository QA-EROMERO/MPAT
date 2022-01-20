describe('Archivo', () => {
    
    it('Archivo', () => {
        cy.LogIn()
        //..Constantes
        const MTE = 'Archivo'
        const nombreDeArchivo = 'MPAT_Archivo 1'
        const rutaDeAcceso = 'C:\\MONITOR5\\Tools\\Herramientas'
        const descripcionDeArchivo = 'Desc. MPAT_Archivo 1'
        const nombreDeExtension = '.MPAT'

        cy.MTESearch(MTE,0)

        cy.wait(28000)
        cy.log('Click en Botón "Agregar"')
        //cy.ObjectSearchDebug('a[id^=button-]') //8,10
        cy.ObjectSearch('a[id^=button-]',8)
        .click()

        cy.wait(2000)
        cy.log('Nombre')
        cy.get('[name=mp_file-NAME]')
        .type(nombreDeArchivo)

        cy.wait(2000)
        cy.log('Ruta de Acceso')
        cy.get('[name=mp_file-PATH]')
        .type(rutaDeAcceso)

        cy.log('Extensión: Click en búsqueda avanzada')
        cy.ObjectSearch('div[id$=-trigger-search]',1)
        .click()

        cy.wait(2000)
        cy.log('Nombre de Extensión')
        cy.ObjectSearch('input[id^=textfield-]',0)
        .type(nombreDeExtension)

        cy.wait(2000)
        cy.log('Click en el primer resultado de la grid')
        cy.ObjectSearch('div[class="x-grid-cell-inner "]',0)
        .click()

        cy.wait(1000)
        cy.log('Click en el botón "Aceptar"')
        cy.ObjectSearch('a[id^=button-]',9)
        .click()

        cy.wait(2000)
        cy.get('[name=mp_file-DESCRIPTION]')
        .type(descripcionDeArchivo)

        cy.wait(2000)
        cy.log('Save and Close')
        cy.SaveAndClose()
    })
    
})