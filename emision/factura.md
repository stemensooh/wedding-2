# Factura

#### Descripción <a href="#bkmrk-description" id="bkmrk-description"></a>

Recibe una factura electrónica emitida para su firmado, transmisión al ente de autorización y posterior envío por correo electrónico al receptor.

**Request**

Realizar una llamada **POST** a la siguiente URL :

`https://devreg5.guru-soft.com/EdocPanama/emp/api/Emision/Factura`

`application/json`

**Parámetros**

| Name | Type                                                        | Description                       |
| ---- | ----------------------------------------------------------- | --------------------------------- |
| body | [ClsFactura](http://192.168.1.129/link/29#bkmrk-page-title) | Factura electrónica a transmitir. |

**Response**

`application/json`

**Parámetros**

| Name          | Type                                                           | Description                                           |
| ------------- | -------------------------------------------------------------- | ----------------------------------------------------- |
| RespuestaEDOC | [RespuestaEDOC](http://192.168.1.129/link/38#bkmrk-page-title) | Respuesta del procesamiento del documento transmitido |

**Códigos de respuesta**

| Codigo http | Descripción                                                      |
| ----------- | ---------------------------------------------------------------- |
| 200         | OK. Documento correctamente procesado.                           |
| 401         | Credenciales inválidas                                           |
| 500         | Error. Verificar mensaje de excepción y comunicarse con soporte. |
