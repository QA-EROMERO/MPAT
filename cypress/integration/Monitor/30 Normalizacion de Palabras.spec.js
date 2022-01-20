describe('TC019 Normalizacion de Palabras', () => {

    //..Clasificacion de riesgo seleccionando tipo de categoria Rango
    it('Normalizacion de Palabras', () =>{
        cy.LogIn()
        
        //..Constantes
        const MTE = 'Normalizacion de Palabras'
        const Idioma = 'Español'
        const Palabra = 'MPAT_Palabra 1'
        const SustituirlaPor = 'MPAT_Palabra 2'
      
        
        cy.MTESearch(MTE,0)
        cy.wait(28000)

        cy.log('Click Botón "Agregar" Normalizacion de Palabras')
        cy.ObjectSearch('a[id^=button-]',8)
        .click()

        //..Búsqueda del Idioma
        cy.wait(2000)
        cy.log('Idioma: Click en el botón de búsqueda avanzada')
        cy.ObjectSearch('div[id$=-trigger-search]',1)
        .click()
        
        cy.wait(2000)
        cy.log('Idioma')
        cy.ObjectSearch('input[id^=textfield-]',0)
        .type(Idioma)

        cy.wait(2000)
        cy.log('Seleccionar primer resultado de la grid')
        cy.ObjectSearch('div[class="x-grid-cell-inner "]',0)
        .click()

        cy.wait(1000)
        cy.log('Click en el botón "Aceptar"')
        cy.ObjectSearch('a[id^=button-]',9)
        .click()

        //..La Palabra
        cy.wait(3000)
        cy.get('input[name="mpd_narrativenormalizationword-DENORMALIZEDVALUE"]')
        .type(Palabra)

        //..Sustituirla por
        cy.wait(3000)
        cy.get('input[name="mpd_narrativenormalizationword-NORMALIZEDVALUE"]')
        .type(SustituirlaPor)


        cy.wait(3000)
        cy.SaveCommentAndClose()
    })

})