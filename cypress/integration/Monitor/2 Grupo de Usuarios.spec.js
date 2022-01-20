describe('INCOMPLETO - TC001.01 Grupo de Usuarios', () => {

    //..Mantenimiento Grupo de Usuarios
    it('INCOMPLETO - Grupo de Usuarios', () =>{
        //cy.LogIn()
        cy.customLogIn('SECURITY')
        //..Constantes
        const MTE = 'Grupo de usuarios'
        const nombreDelGrupo = 'MPAT_Grupo de Usuarios 1'

        cy.MTESearch(MTE,0)
        //cy.wait(28000)
        cy.wait(10000)

        //..Click en el Módulo ACRM+
        cy.ObjectSearch('div[class="x-grid-item-container"]',0)
        .contains('ACRM+')
        .dblclick()

        //..Click derecho para agregar usuario
        cy.wait(2000)
        cy.log('Click derecho para agregar usuario')
        cy.NoVisibleObjectSearch('circle[class="node-group-user"]',0)
        .rightclick({force:true})

        cy.wait(3000)
        cy.log('Click en el menú: Agregar grupo')
        cy.ObjectSearch('span[id^=menuitem-]',0)
        .click()
        
        //..Nombre del Grupo
        cy.log('Nombre del Grupo')
        cy.ObjectSearch('input[id^=textfield-]',0)
        .type(nombreDelGrupo)

        //..Click en el botón "Aceptar"
        cy.wait(2000)
        cy.ObjectSearch('a[id^=button-]',2)
        .click()


        //..Ingresar el comentario
        cy.ObjectSearch('textarea[id^=textarea-]',0)
        .type('MPAT')

        //..Presionar el botón "Aceptar"
        cy.ObjectSearch('a[id^=button-]',1)
        .click()


        //..Click en el módulo ACRM+
        cy.log('Click en el módulo ACRM+')
        cy.ObjectSearch('div[class="x-grid-item-container"]',0)
        .contains('ACRM+')
        .dblclick()

        cy.log('Click en el Grupo Creado')
        cy.ObjectSearch('div[class="x-grid-item-container"]',0)
        .contains(nombreDelGrupo)
        .click()

        //..Agregar usuarios al grupo
        cy.log('Agregar usuarios al grupo')
        cy.ObjectSearchDebug('circle[id=node-group-user]')

        cy.log('Agregar usuario')
        cy.ObjectSearchDebug('a[id^=menuitem-]')
        //.contains('Agregar usuario')




    })
})