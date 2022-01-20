describe('TC020 Palabras excluidas', () => {

    //..Clasificacion de riesgo seleccionando tipo de categoria Rango
    it('Palabras excluidas', () =>{
        cy.LogIn()
        
        //..Constantes
        const MTE = 'Palabras excluidas'
        const Valor = 'MPAT_Valor 1'
        const Lenguaje = 'Español'

        
        cy.MTESearch(MTE,0)
        cy.wait(28000)

        cy.log('Click Botón "Agregar" Normalizacion de Palabras')
        cy.ObjectSearch('a[id^=button-]',8)
        .click()

        cy.wait(3000)
        cy.log('Valor')
        cy.get('input[name="Narrativewordexcluded-VALUE"]')
        .type(Valor)

        //..Búsqueda del Idioma
        cy.wait(2000)
        cy.log('Idioma: Click en el botón de búsqueda avanzada')
        cy.ObjectSearch('div[id$=-trigger-search]',1)
        .click()
        
        cy.wait(2000)
        cy.log('Lenguaje')
        cy.ObjectSearch('input[id^=textfield-]',0)
        .type(Lenguaje)

        cy.wait(2000)
        cy.log('Seleccionar primer resultado de la grid')
        cy.ObjectSearch('div[class="x-grid-cell-inner "]',0)
        .click()

        cy.wait(1000)
        cy.log('Click en el botón "Aceptar"')
        cy.ObjectSearch('a[id^=button-]',9)
        .click()

        

        //..Guardar, agregar un comentario y Cerrar el mantenimiento
        cy.wait(3000)
        cy.SaveCommentAndClose()
    })

})