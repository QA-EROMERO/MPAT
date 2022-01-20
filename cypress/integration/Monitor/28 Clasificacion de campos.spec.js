describe('TC017 Clasificacion de campos', () => {

    it('Clasificacion de campos', () =>{
        cy.LogIn()
        
        //..Constantes
        const MTE = 'Clasificacion de campos'
        const Nombre = 'MPAT_Clasificacion de Campos 1'
        const Descripcion = 'Desc. MPAT_Clasificacion de Campos 1'
        
        cy.MTESearch(MTE,0)
        cy.wait(28000)

        cy.log('Click Botón "Agregar" Clasificacion de campos')
        cy.ObjectSearch('a[id^=button-]',8)
        .click()

        cy.wait(6000)

        //..Ingreso de nombre de la clasificacion de campos 
        cy.wait(3000)
        cy.log('Digitar Nombre')
        cy.get('input[name="DesignColumns-NAME"]')
        .type(Nombre)

        //..Ingreso de descripcion de la clasificacion de campos
        cy.wait(3000)
        cy.log('Digitar Descripcion')
        cy.get('textarea[name="DesignColumns-DESCRIPTION"]')
        .type(Descripcion)

        cy.wait(3000)
        cy.SaveAndClose()
    })

})