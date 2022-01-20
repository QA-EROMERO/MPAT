describe('MPAT COLA DE DATOS', () => {

    //..Mantenimiento de Cola de Datos
    it.only('Cola de Datos', () =>{
        cy.LogIn()
        
        //..Constantes
        const MTE = 'Cola de Datos'
        const Nombre = 'MPAT_Cola de Datos'
        const Descripcion = 'Desc. ' + Nombre
        const codigoDeRegistro = 3783

        cy.MTESearch(MTE,0)
        //cy.wait(28000)
        cy.wait(18000)


        cy.log('Click Botón "Agregar" Cola de Datos')

        cy.ObjectSearch('a[id^=button-]',8)
        .click()

        cy.wait(6000)
        

        cy.wait(3000)
        //..Campo Nombre
        cy.ObjectSearch('input[id^=ext-]',0)
        .type(Nombre)

        cy.wait(3000)
        //..Campo Descripción
        cy.ObjectSearch('textarea[id^=ext-]',0)
        .type(Descripcion)

        //..Click en TextBox
        cy.ObjectSearch('span[id^=ext-]',3)
        .click()
        

    })
})