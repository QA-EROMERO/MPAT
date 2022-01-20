describe('TC021 Eventos a Futuro', () => {

    //..Clasificacion de riesgo seleccionando tipo de categoria Rango
    it('Eventos a Futuro', () =>{
        cy.LogIn()
        
        //..Constantes
        const MTE = 'Eventos a Futuro'
        const Codigo = '777'
        const Nombre = 'MPAT_Eventos a Futuro 1'
        const Descripcion = 'Desc. MPAT_Eventos a Futuro 1'

        
        cy.MTESearch(MTE,0)
        cy.wait(28000)

        cy.log('Click Botón "Agregar" Eventos a Futuro')
        cy.ObjectSearch('a[id^=button-]',8)
        .click()

        //..Código
        cy.wait(3000)
        cy.log('Código')
        cy.get('input[name="mp_futureevent-CODE"]')
        .type(Codigo)

        //..Nombre
        cy.wait(3000)
        cy.log('Nombre')
        cy.get('input[name="mp_futureevent-NAME"]')
        .type(Nombre)


        //..Descripción
        cy.wait(3000)
        cy.log('Descripción')
        cy.get('textarea[name="mp_futureevent-DESCRIPTION"]')
        .type(Descripcion)
        

        //..Guardar y Cerrar el mantenimiento
        cy.wait(3000)
        cy.SaveAndClose()
    })

})