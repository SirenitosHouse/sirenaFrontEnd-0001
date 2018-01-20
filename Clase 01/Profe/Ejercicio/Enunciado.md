# Crear una función constructora llamada `User` con las siguientes características:

- Debe tener las siguientes propiedades, que deben ser recibidas al momento de crear el elemento: 
  * `firstName` String, Privada 
  * `age` Number, Publica
  * `isAdmin` Boolean, Privada (Valor por defecto `false`)
  * `telephones` Array, Privada (Valor por defecto Array vacío)

- Una función publica `addTelephone` que permita agregar un teléfono al usuario.

- Una función publica `changeAge` que permita modificar la edad del usuario.

- Una función publica que permita mostrar todas las propiedades del usuario en consola, mostrando los campos `firstName`, `age` y `telephones` en el mismo String, para los telefonos mostrarlos separados por una barra `/`. Ej: `Mi nombre es Juan, tengo 178 años y mis telefonos son 1234 / 5678 / 9101`.