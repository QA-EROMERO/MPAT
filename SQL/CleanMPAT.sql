USE MP_Config
GO

--=========================
-- ELIMINAR COLAS MPAT
--=========================

DELETE FROM MP_USERBYDATAQUEUE WHERE UUIDDATAQUEUE IN (
	SELECT UUID FROM MP_DATAQUEUE WHERE NAME LIKE 'MPAT_%'
)

DELETE FROM MP_DATAQUEUECONDITION WHERE NAME LIKE 'MPAT_%'

DELETE FROM MP_DATAQUEUE WHERE NAME LIKE 'MPAT_%'


--================================
-- ELIMINAR ARCHIVO Y EXTENSIÓN
-- DE ARCHIVO
--================================

DELETE FROM MP_INTERACTIVETARGETFILE WHERE UUIDFILE IN (
	SELECT UUID FROM MP_FILE WHERE NAME LIKE 'MPAT_%'
)
DELETE FROM MP_FILE WHERE NAME LIKE 'MPAT_%'

DELETE FROM MP_EXTENSION WHERE NAME LIKE '%MPAT%'



--==============
-- AS 400
--==============

DELETE FROM MP_AS400QUEUE WHERE NAME LIKE 'MPAT%'


--==============
-- SOCKET
--==============

DELETE FROM MP_SOCKET WHERE NAME LIKE 'MPAT%'


--=====================================
-- Conexión de Datos Relacionados
--=====================================

DELETE FROM MP_LABELCONNECTION WHERE NAME LIKE 'MPAT%'


--======================================
-- Destino de datos relacionados
--======================================

DELETE FROM MP_RELATEDDATATARGET WHERE NAME LIKE 'MPAT%'


--=================================================
-- Identificador de búsqueda datos relacionados
--=================================================

DELETE FROM MP_IDENTIFIERSEARCH WHERE NAME LIKE '%MPAT%'


--==============
-- MQ SERIES
--==============

DELETE FROM MP_MQSERIES WHERE NAME LIKE 'MPAT%'


--==================================
-- Origen de Datos Relacionados
--==================================

DELETE FROM MP_RELATEDDATASOURCE WHERE NAME LIKE 'MPAT%'


--=================================
-- Puntos comunes de contacto
--=================================

DELETE FROM MP_LCC_FIELDS WHERE UUIDLCC_CONFIGURATIONEVENT IN (
	SELECT UUID FROM MP_LCC_CONFIGURATIONEVENT WHERE UUIDLCC_CONFIGURATION IN (
		SELECT UUID FROM MP_LCC_CONFIGURATION WHERE NAME LIKE 'MPAT%'
	)
)


DELETE FROM MP_LCC_CONFIGURATIONEVENT WHERE UUIDLCC_CONFIGURATION IN (
	SELECT UUID FROM MP_LCC_CONFIGURATION WHERE NAME LIKE 'MPAT%'
)


--======================================
-- Registros de origen de Información
--======================================

DELETE FROM MP_LCC_CONFIGURATION WHERE NAME LIKE 'MPAT%'


--======================================
-- Conexiones - Tablas - Campos
--======================================

DELETE FROM MP_METADATAFIELD WHERE UUIDMETADATABLE IN (
	SELECT UUID FROM MP_METADATATABLE WHERE NAME LIKE 'MPAT%'
)

DELETE FROM MP_METADATATABLE WHERE UUIDDATACONNECTIONSTORE IN (
	SELECT UUID FROM MP_DATACONNECTIONSTORE WHERE NAME LIKE 'MPAT%'
)


DELETE FROM MP_FUNCTIONCUSTOMPLUGIN WHERE UUIDDATACONNECTIONSTORE IN (
	SELECT UUID FROM MP_DATACONNECTIONSTORE WHERE NAME LIKE 'MPAT%'
)

DELETE FROM MP_DATACONNECTIONSTORE WHERE NAME = 'MPAT_Conexion 1'



--==================================
-- RUTINAS ESPECIALES - FUNCIONES
--==================================

DELETE FROM MP_FUNCTIONCUSTOMPLUGIN WHERE UUIDCUSTOMPLUGIN IN (
	SELECT UUID FROM MP_CUSTOMPLUGIN WHERE NAME LIKE 'MPAT%'
)

DELETE FROM MP_CUSTOMPLUGIN WHERE NAME LIKE 'MPAT%'




--======================
-- REMITENTES
--======================

DELETE FROM MP_EMAILSENDER WHERE EMAIL LIKE 'MPAT%'



--========================
-- FILTROS IMPLÍCITOS
--========================

DELETE FROM MP_ADAVANCEDSEARCHCATEGORYSYN WHERE VALUE LIKE 'MPAT%'


--============================
-- CLASIFICACIÓN DE CAMPO
--============================

DELETE FROM MP_FIELDCLASSIFICATION  WHERE NAME LIKE 'MPAT%'


--===========================
-- CLASIFICACIÓN DE RIESGO
--===========================

DELETE FROM MP_RISKCLASSIFICATIONRANGE WHERE NAME LIKE 'MPAT%'

DELETE FROM MP_RISKCLASSIPROPERTIES WHERE NAME LIKE 'MPAT%'




--============================
-- NORMALIZACIÓN DE PALABRAS
--============================

DELETE FROM MPD_NARRATIVENORMALIZATIONWORD WHERE DENORMALIZEDVALUE LIKE 'MPAT%'



--========================
-- PALABRAS EXCLUIDAS
--========================

DELETE FROM MPD_NARRATIVEWORDEXCLUDED WHERE VALUE LIKE 'MPAT%'



--EXEC SearchAllTables 'MPAT'















