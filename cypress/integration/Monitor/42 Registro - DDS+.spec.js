describe('TC026.03 Registro - DDS+', () => {

    //..Mantenimiento registro - DDS+
    it('TC026.03 Registro - DDS+', () =>{
        cy.LogIn()
        
        //..Constantes
        const MTE = 'Registros'
        const Registro = 'MPAT_Registro 3783'
        
        cy.MTESearch(MTE,1)

        cy.wait(28000)

        //..Búsqueda del Registro
        cy.log('Búsqueda de Registros de Registros')
        cy.ObjectSearch('input[id^=textfield-]',0)
        .type(Registro)

        cy.wait(3000)
        cy.log('Click Derecho en el primer valor de la Grid')
        cy.ObjectSearch('div[class="x-grid-cell-inner "]',0)
        .rightclick()

        cy.wait(3000)
        cy.log('Click en Porgramas Relacionados')
        cy.ObjectSearch('[class="x-menu-item-link"]',4)
        .click()

        cy.wait(3000)
        cy.log('Click en Porgramas Relacionados: DDS+')
        cy.ObjectSearch('[class="x-menu-item-link"]',13)
        .click({force:true})

        cy.wait(6000)
        cy.log('Click Botón "Agregar"')
        cy.ObjectSearch('a[id^=button-]',8)
        .click()

    })

    it('DDS+ - Propiedades', () =>{
        //..Constantes
        const Codigo = 1
        const Nombre = 'MPAT_DDS 1'
        const Descripcion = 'Desc. ' + Nombre
        const diasDeDuracion = "30"
        const codigoDeCampo = 1
        
        cy.wait(14000)

        //..Código
        cy.log('Código')
        cy.wait(3000)
        cy.ObjectSearch('input[id^=numberfield-]',0)
        .type(Codigo)

        //..Nombre
        cy.wait(3000)
        cy.log('Nombre')
        cy.ObjectSearch('div[id^=textfield-]',1)
        .type(Nombre)

        //..Descripción
        cy.wait(3000)
        cy.log('Descripción')
        cy.ObjectSearch('div[id^=textarea-]',0)
        .type(Descripcion)

        //..Duración de la DDS+
        cy.wait(3000)
        cy.ObjectSearch('input[id^=numberfield-]',1)
        .clear()
        .type(diasDeDuracion)

        //..Búsqueda del Campo Llave
        cy.wait(3000)
        cy.ObjectSearch('div[id$=-trigger-foo]',0)
        .click()

        //..Código del Campo
        cy.wait(3000)
        cy.ObjectSearch('input[id^=textfield-]',0)
        .type(codigoDeCampo)

        //..Click en el primer resultado de la grid
        cy.wait(3000)
        cy.ObjectSearch('div[class="x-grid-cell-inner "]',0)
        .click()

        //..Click en el botón Aceptar
        cy.wait(3000)
        cy.ObjectSearch('a[id^=button-]',9)
        .click()

        //..Ocultar la opción de Guarda y Guardar como
        cy.wait(3000)
        cy.get('a[id=hidecardmanagerbuttondashboard]')
        .click()

        //..Click en el botón Agregar
        cy.wait(3000)
        cy.ObjectSearch('a[id^=button-]',4)
        .click()

        //..Mostrar la opción de Guarda y Guardar como
        cy.wait(3000)
        cy.get('a[id=hidecardmanagerbuttondashboard]')
        .click()

    })

    it('DDS+ - Acumuladores', () =>{
        //..Constantes
        const codigoDeCampo = 1
        const Descripcion = 'MPAT_Campo Acumulador'
        const tipoDeAcumulacion = 'Acumular'
        const campoCriterioDeSuma = 'MPAT_Campo 3'
        const Operador = 'Mayor que'
        const Valor = '0'
        const Comentario = 'MPAT'
        const campoCriterioDeResta = 'MPAT_Campo 1'
        const Operador2 = 'Menor que'
        const ValorResta = '100'


        //..Tab de Acumuladores
        cy.wait(3000)
        cy.ObjectSearch('span[id^=tab-]',3)
        .click()

        cy.wait(3000)
        
        //..Agregar acumuladores
        cy.ObjectSearch('a[id^=button-]',4)
        .click()

        //..Búsqueda del Campo Llave
        cy.wait(3000)
        cy.ObjectSearch('div[id$=-trigger-foo]',0)
        .click()

        //..Código del Campo
        cy.wait(3000)
        cy.ObjectSearch('input[id^=textfield-]',0)
        .clear()
        .type(codigoDeCampo)

        //..Click en el primer resultado de la grid
        cy.wait(3000)
        cy.ObjectSearch('div[class="x-grid-cell-inner "]',0)
        .click()

        //..Click en el botón Aceptar
        cy.wait(3000)
        cy.ObjectSearch('a[id^=button-]',9)
        .click()


        //..Descripción
        cy.wait(3000)
        cy.ObjectSearch('textarea[id^=textarea-]',0)
        .type(Descripcion)

        //..Tipo de acumulación
        cy.wait(3000)
        cy.ObjectSearch('div[id$=-trigger-picker]',1)
        .click()

        cy.wait(3000)
        cy.ObjectSearch('div[id$=-picker-listWrap]',0)
        .contains(tipoDeAcumulacion)
        .click()



        //..Criterio de suma
        //..Click en el tab "Criterios de suma"
        cy.wait(14000)
        cy.ObjectSearch('a[id^=tab-]',8)
        .click()

        //..Click en Campos del Registro
        cy.wait(3000)
        cy.ObjectSearch('div[id^=ext-element-]',1)
        .click()

        //..Búsqueda de Campo
        cy.wait(6000)
        cy.ObjectSearch('input[id^=textfield-]',0)
        .type(campoCriterioDeSuma)


        //..Click en el primer resultado de la búsqueda
        cy.wait(3000)
        cy.ObjectSearch('div[class="x-grid-cell-inner x-grid-cell-inner-treecolumn"]',0)
        .dblclick()

        //..Agregar Operador
        cy.wait(3000)
        cy.ObjectSearch('div[class="x-grid-cell-inner "]',2)
        .click()

        cy.wait(3000)
        cy.ObjectSearch('div[id$=-picker]',0)
        .click()

        cy.wait(3000)
        cy.ObjectSearch('div[id$=-picker-listWrap]',0)
        .contains(Operador)
        .click()


        //..Agregar Valor
        cy.wait(3000)
        cy.ObjectSearch('div[class="x-grid-cell-inner "]',2)
        .type(Valor)


        //..Click en agregar comentarios de la primera línea
        cy.wait(3000)
        cy.ObjectSearch('div[class="x-grid-cell-inner x-grid-cell-inner-action-col"]',2)
        .type(Comentario)

        //..Criterio de Resta
        //..Click en el tab "Criterios de Resta"
        cy.wait(3000)
        cy.ObjectSearch('a[id^=tab-]',9)
        .click()

        //..Click en Campos del Registro
        cy.wait(14000)
        cy.ObjectSearch('div[id^=ext-element-]',1)
        .click()

        //..Búsqueda de Campo
        cy.wait(3000)
        cy.ObjectSearch('input[id^=textfield-]',0)
        .type(campoCriterioDeResta)


        //..Click en el primer resultado de la búsqueda
        cy.wait(3000)
        cy.ObjectSearch('div[class="x-grid-cell-inner x-grid-cell-inner-treecolumn"]',0)
        .dblclick()

        //..Agregar Operador
        cy.wait(3000)
        cy.ObjectSearch('div[class="x-grid-cell-inner "]',2)
        .click()

        cy.wait(3000)
        cy.ObjectSearch('div[id$=-picker]',0)
        .click()

        cy.wait(3000)
        cy.ObjectSearch('div[id$=-picker-listWrap]',0)
        .contains(Operador2)
        .click()

        //..Agregar Valor
        cy.wait(3000)
        cy.ObjectSearch('div[class="x-grid-cell-inner "]',2)
        .type(ValorResta)


        //..Click en agregar comentarios de la primera línea
        cy.wait(3000)
        cy.ObjectSearch('div[class="x-grid-cell-inner x-grid-cell-inner-action-col"]',2)
        .type(Comentario)

        //..Click en el Tab "Acumulador"
        cy.wait(3000)
        cy.ObjectSearch('span[id^=tab-]',22)
        .click()        

        //..Click en el botón "Aceptar"
        cy.wait(3000)
        cy.ObjectSearch('a[id^=button-]',4)
        .click()

    })

    it('DDS+ - Valores previos', () => {
        //..Constantes

        //..Click en Tab Valores Previos
        cy.wait(3000)
        cy.ObjectSearch('a[id^=tab-]',2)
        .click()

        //..Click en día
        cy.wait(3000)
        cy.ObjectSearch('span[class="x-grid-checkcolumn"]',0)
        .click()

        //..Click en Mes
        cy.wait(3000)
        cy.ObjectSearch('span[class="x-grid-checkcolumn"]',0)
        .click()

        //..Click en Año
        cy.wait(3000)
        cy.ObjectSearch('span[class="x-grid-checkcolumn"]',0)
        .click()

        //..Click en Acumula valores previos
        cy.wait(3000)
        cy.ObjectSearch('span[class="x-grid-checkcolumn"]',0)
        .click()


    })

    it('DDS+ - Ultimo Valor', () => {
        //..Constantes
        const Codigo = 1

        //..Click en Tab Ultimo Valor
        cy.wait(3000)
        cy.ObjectSearch('a[id^=tab-]',3)
        .click()

        //..Click en "Almacenar Journal de la Transacción Anterior"
        cy.wait(3000)

        cy.ObjectSearch('div[id^=togglefield-]',3)
        .click({force: true})

        //..Búsqueda de campos
        cy.wait(3000)
        cy.ObjectSearch('div[id$=-trigger-foo]',0)
        .click()

        //..Código del Campo
        cy.wait(3000)
        cy.ObjectSearch('div[id^=textfield-]',0)
        .type(Codigo)

        //..Seleccionar el primer campo de la grid
        cy.wait(3000)
        cy.ObjectSearch('div[class="x-grid-cell-inner "]',0)
        .click()

        //..Click en botón "Aceptar"
        cy.wait(3000)
        cy.ObjectSearch('a[id^=button-]',9)
        .click()

        //..Click en el botón "Agregar"
        cy.wait(3000)
        cy.ObjectSearch('a[id^=button-]',4)
        .click()

    })

    it('DDS+ - Acumulador total', () => {
        //..Constantes
        const tipoDeAcumulacion = 'Año'
        const Acumulador = 'MPAT_Campo 1 / MPAT_Campo Acumulador'
        const periodoDeAcumulacionTotal = 7

        //..Click en el tab "Acumulador total"
        cy.wait(3000)
        cy.ObjectSearch('span[id^=tab-]',12)
        .click()

        //..Click en el Toggle "Acumulador total"
        cy.wait(3000)
        cy.ObjectSearch('div[id^=togglefield-]',1) //0,4
        .click({force: true})

        //..Click en el botón "Agregar"
        cy.wait(3000)
        cy.ObjectSearch('a[id^=button-]',4)
        .click()

        //..Click para desplegar el Tipo de acumulación
        cy.wait(3000)
        cy.ObjectSearch('div[id$=-trigger-picker]',0)
        .click()

        cy.wait(3000)
        cy.ObjectSearch('div[id$=-picker-listWrap]',0)
        .contains(tipoDeAcumulacion)
        .click()


        //..Click para desplegar la opción "Acumulador"
        cy.wait(3000)
        cy.ObjectSearch('div[id$=-trigger-picker]',1)
        .click()

        cy.wait(3000)
        cy.ObjectSearch('div[id$=-picker-listWrap]',0)
        .contains(Acumulador)
        .click()

        //..Establecer Períodos de acumulación total
        cy.wait(3000)
        cy.get('input[name="value"]')
        .type(periodoDeAcumulacionTotal)

        //..Click en el botón "Aceptar"
        cy.wait(3000)
        cy.ObjectSearch('a[id^=button-]',4)
        .click()

    })

    it('DDS+ - Actualizar Registro', () => {
        //..Constantes
        const nombreDelCampo = 'MPAT_Campo 3'
        const Operador = 'Mayor que'
        const Valor = '0'
        const Comentario = 'MPAT'

        //..Click en el tab Actualizar Registro
        cy.wait(3000)
        cy.ObjectSearch('span[id^=tab-]',15) //15,16,17
        .click()

        //..Click en el Toggle "Criterios de última transacción"
        cy.wait(3000)
        cy.ObjectSearch('div[id^=togglefield-]',8) //6 - 11
        .click({force: true})

        //..Ocultar el panel de los botones Guardar
        cy.wait(3000)
        cy.ObjectSearch('span[id^=hidecardmanagerbuttondashboard-]',0)
        .click()

        //..Click en el panel derecho - Campos
        cy.wait(3000)
        cy.ObjectSearch('div[id^=ext-element-]',2)
        .click()

        //..Buscar campo
        cy.wait(6000)
        cy.ObjectSearch('input[id^=textfield-]',0)
        .type(nombreDelCampo)

        //..Click en el primer resultado
        cy.wait(3000)
        cy.ObjectSearch('div[class="x-grid-cell-inner x-grid-cell-inner-treecolumn"]',0)
        .dblclick()

        //..Agregar Operador
        cy.wait(3000)
        cy.ObjectSearch('div[class="x-grid-cell-inner "]',2)
        .click()

        cy.wait(3000)
        cy.ObjectSearch('div[id$=-picker]',0)
        .click()

        cy.wait(3000)
        cy.ObjectSearch('div[id$=-picker-listWrap]',0)
        .contains(Operador)
        .click()


        //..Agregar Valor
        cy.wait(3000)
        cy.ObjectSearch('div[class="x-grid-cell-inner "]',2)
        .type(Valor)


        //..Click en agregar comentarios de la primera línea
        cy.wait(3000)
        cy.ObjectSearch('div[class="x-grid-cell-inner x-grid-cell-inner-action-col"]',2)
        .type(Comentario)

        cy.wait(2000)
        cy.get('#main-view-header-bar-innerCt')
        .click()

    })

    it('DDS+ - Criterio general', () => {
        //..Constantes
        const nombreDelCampo = 'MPAT_Campo 1'
        const Operador = 'Mayor que'
        const Valor = 100
        const Comentario = 'MPAT'

        //..Click en el tab "Criterio general"
        cy.wait(3000)
        cy.ObjectSearch('a[id^=tab-]',6)
        .click()

        //..Agregar Criterio general
        cy.wait(10000)

        //..Click en el panel derecho - Campos
        cy.wait(3000)
        cy.ObjectSearch('div[id^=ext-element-]',3)
        .click()

        //..Buscar campo
        cy.wait(6000)
        cy.ObjectSearch('input[id^=textfield-]',0)
        .type(nombreDelCampo)

        //..Click en el primer resultado
        cy.wait(3000)
        cy.ObjectSearch('div[class="x-grid-cell-inner x-grid-cell-inner-treecolumn"]',0)
        .dblclick()

        //..Agregar Operador
        cy.wait(3000)
        cy.ObjectSearch('div[class="x-grid-cell-inner "]',2)
        .click()

        cy.wait(3000)
        cy.ObjectSearch('div[id$=-picker]',0)
        .click()

        cy.wait(3000)
        cy.ObjectSearch('div[id$=-picker-listWrap]',0)
        .contains(Operador)
        .click()


        //..Agregar Valor
        cy.wait(3000)
        cy.ObjectSearch('div[class="x-grid-cell-inner "]',2)
        .type(Valor)


        //..Click en agregar comentarios de la primera línea
        cy.wait(3000)
        cy.ObjectSearch('div[class="x-grid-cell-inner x-grid-cell-inner-action-col"]',2)
        .type(Comentario)

        cy.wait(2000)
        cy.get('#main-view-header-bar-innerCt')
        .click()

        //..Mostrar menú para guardar
        cy.wait(2000)
        cy.get('a[id=hidecardmanagerbuttondashboard]')
        .click()

        //..Guardar el Registro
        cy.wait(3000)
        cy.SaveAndClose()
        
    })

})