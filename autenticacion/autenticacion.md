# Autenticación

## ServicioEDOC <a href="#bkmrk-page-title" id="bkmrk-page-title"></a>

#### Descripción <a href="#bkmrk-description" id="bkmrk-description"></a>

Recibe una estructura definida por eDoc que contiene las credenciales del usuario, además del ID del servicio que desea usar.

**Request**

Realizar una llamada **GET** a la siguiente URL :

`https://devreg5.guru-soft.com/EdocPanama/emp/api/Auth/ServicioEDOC`

**Parámetros**

| Name | Type    | Description                                                                                                                                                                          |
| ---- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Id   | Integer | Identificador del servicio: \`1. Emisión documento\`, \`2. Recepción documento\`, \`3. Consulta emisión\`, \`4. Consulta recepción\`, \`15. Manifiesto Receptor\`, \`16. Anulación\` |

**Response**

`application/json`

**Parámetros**

| Name          | Type                                                   | Description                                           |
| ------------- | ------------------------------------------------------ | ----------------------------------------------------- |
| RespuestaEDOC | [Token](http://192.168.1.129/link/36#bkmrk-page-title) | Respuesta del procesamiento del documento transmitido |



**Códigos de respuesta**

| Codigo http | Descripción                                                      |
| ----------- | ---------------------------------------------------------------- |
| 200         | OK. Procesado correctamente.                                     |
| 401         | Credenciales inválidas                                           |
| 500         | Error. Verificar mensaje de excepción y comunicarse con soporte. |



