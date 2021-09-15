# Números romanos: slash command de Slack

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Criterios de aceptación mínimos del proyecto](#3-criterios-de-aceptación-mínimos-del-proyecto)
* [4. Pistas, tips y lecturas complementarias](#4-pistas-tips-y-lecturas-complementarias)

***

## 1. Preámbulo

Ver proyecto `roman-numerals`.

## 2. Resumen del proyecto

Este proyecto depende del proyecto `roman-numerals`,
así que se asume que ya completaste o planeas completar dicho proyecto por
separado, o que trabajarás con una o más compañeras en paralelo, quienes
proveeran la librería `roman-numerals` para poder integrar esta funcionalidad en
un [_slash command_ de Slack](https://api.slack.com/interactivity/slash-commands).

En este proyecto crearás una _app_ de Slack que implemente un _slash command_
(comandos que se pueden agregar a Slack), que permita a las usuarias convertir
números enteros en números romanos y viceversa. Para ofrecer esta funcionalidad
tendrás que implementar y desplegar un servidor HTTP que se encargue de responder
las consultas enviadas desde Slack.

## 3. Criterios de aceptación mínimos del proyecto

### [Slash Commands](https://api.slack.com/interactivity/slash-commands)

```text
/roman-numerals MMXX
2020
```

```text
/roman-numerals 2020
MMXX
```

```text
/roman-numerals help
```

```text
/roman-numerals version
```

### Servidor HTTP

Dos endpoints:

* `GET /`: Debe responder con un objeto JSON con dos propiedades (`name` y
  `version`). Ejemplo:

  ```json
  {
    "name": "roman-numerals-slack",
    "version": "1.0.0"
  }
  ```

* `POST /`: Este es el endpoint al que Slack enviará los comandos escritos por
  las usuarias (en el cuerpo - _body_ - de las consultas - _requests_) y
  responderá en formato JSON con un objeto como este:

  ```json
  {
    "response_type": "in_channel",
    "text": "El texto que aparecerá como respuesta en el chat de Slack"
  }
  ```

  Puedes encontrar más detalles en la [documentación oficial de Slack](https://api.slack.com/interactivity/slash-commands).

## 4. Pistas, tips y lecturas complementarias

### Servidor HTTP

En este proyecto tendrás que implementar y desplegar un endpoint que reciba
_requests_ (consultas HTTP) de Slack (cada vez que alguien invoca nuestro _slash
command_). Esto significa que nuestro _endpoint_ debe estar desplegado en una
URL pública. Para esto pueden usar la plataforma que prefieran. Algunas opciones
que pueden explorar:

* Firebase Cloud functions
* AWS Lambda
* Docker + GPC o AWS ECS
* Heroku
* Now (Zeit)

### Apps en Slack

Para poder trabajar en este proyecto necesitas seguir estos pasos:

1. Crea un _workspace_ de Slack gratuito e invita a tus compañeras de equipo y
   otras personas que quieres que tenan acceso a tu entorno de desarrollo.
2. [Crea una App en la plataforma para developers de Slack](https://api.slack.com/apps)
   y asóciala al _workspace_ que hayas creado en el punto `1`.
3. En tu nueva app, crea un [_slash command_](https://api.slack.com/interactivity/slash-commands)
   para que tus usuarias puedan invocar tu endpoint. Para hacer esto necesitarás
   ya tener la URL pública del endpoint de tu servidor HTTP, así que asegúrate
   de _desplegar_ tu servidor HTTP y tener la URL del endpoint a la mano.
4. Instala la App en tu workspace.
5. Una vez instalada la app en tu workspace podrás invocar el _slash command_
   desde el chat de Slack.

### Otros recursos y lecturas complementarias

* [Slack API](https://api.slack.com/)
* [Slack API - Slash Commands](https://api.slack.com/interactivity/slash-commands)

