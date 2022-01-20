describe('TC018 Clasificacion de riesgo', () => {

    //..Clasificacion de riesgo seleccionando tipo de categoria Rango
    it('Clasificacion de riesgo - Rango', () =>{
        cy.LogIn()
        
        //..Constantes
        const MTE = 'Clasificacion de riesgo'
        const Nombre = 'MPAT_Clasificacion de riesgo 1'
        const Descripcion = 'Desc. MPAT_Clasificacion de riesgo 1'
        const colorRojo = '#F90324'
        const Desde = '100'
        const Hasta = '101'
        const nombreColumna = 'MPAT'
      
        
        cy.MTESearch(MTE,0)
        cy.wait(28000)

        cy.log('Click Botón "Agregar" Clasificacion de campos')
        cy.ObjectSearch('a[id^=button-]',8)
        .click()

        cy.wait(6000)

        //..Ingreso de nombre de la clasificacion de campos 
        cy.wait(3000)
        cy.log('Digitar Nombre')
        cy.get('input[name="name"]')
        .type(Nombre)

        //..Ingreso de descripcion de la clasificacion de campos
        cy.wait(3000)
        cy.log('Digitar Descripcion')
        cy.get('textarea[name="description"]')
        .type(Descripcion)
        
        //..Funcion colocando tipo de categoria Rango
        cy.AddRange(colorRojo,Desde,Hasta,nombreColumna)

        cy.wait(3000)
        cy.SaveAndClose()
    })

    //..Clasificacion de riesgo seleccionando tipo de categoria Igual a
    it('Clasificacion de riesgo - Igual a', () =>{
        
        
        //..Constantes
        const MTE = 'Clasificacion de riesgo'
        const Nombre = 'MPAT_Clasificacion de riesgo 2'
        const Descripcion = 'Desc. MPAT_Clasificacion de riesgo 2'
        const nombreColumna = 'MPAT'
        const colorAzul = '#032BF9'
        const Valor = '500'
        
        cy.MTESearch(MTE,0)
        cy.wait(28000)

        cy.log('Click Botón "Agregar" Clasificacion de campos')
        cy.ObjectSearch('a[id^=button-]',8)
        .click()

        cy.wait(6000)

        //..Ingreso de nombre de la clasificacion de campos 
        cy.wait(3000)
        cy.log('Digitar Nombre')
        cy.get('input[name="name"]')
        .type(Nombre)

        //..Ingreso de descripcion de la clasificacion de campos
        cy.wait(3000)
        cy.log('Digitar Descripcion')
        cy.get('textarea[name="description"]')
        .type(Descripcion)

        //..Funcion colocando tipo de categoria Igual a
        cy.addEqualTo(colorAzul,nombreColumna,Valor)

        cy.wait(3000)
        cy.SaveAndClose()
    })

})