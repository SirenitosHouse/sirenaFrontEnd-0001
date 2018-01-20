// # Nuevas funcionalidades en JavaScript ES2015 / ES6 y repaso de conceptos anteriores

// - Repaso de conceptos anteriores:

// 1. Closures

// function main () {
//   var name = 'Pachi'
//   function showMesage () {
//     console.log(name)
//   }
//   return showMesage
// }

// var mainFunc = main()

// mainFunc()

// function calcCurrency (a) {
//   return function (b) {
//     return a * b
//   }
// }

// var dolarHoy = calcCurrency(19.2)

// var dolarFuturo = calcCurrency(30)

// console.log('Colchón de Pachi hoy', dolarHoy(50))

// console.log('Colchón de Pachi futuro', dolarFuturo(50))

// console.log('Colchón de Gus hoy', dolarHoy(100))

// console.log('Colchón de Gus futuro', dolarFuturo(100))

// var calcCurrencyModule = (function () {
//   var exposed = {}
//   exposed.name = 'Módulo calculadora de monedas'

//   var value = 0

//   exposed.calcValue = function (b) {
//     return value * b
//   }

//   exposed.setCurrency = function (a) {
//     value = a
//   }

//   return exposed
// })()

// calcCurrencyModule.setCurrency(19.5)

// console.log(calcCurrencyModule.calcValue(100))

// console.log(calcCurrencyModule.calcValue(200))

// calcCurrencyModule.setCurrency(30)

// console.log(calcCurrencyModule.calcValue(100))

// console.log(calcCurrencyModule.calcValue(200))

// console.log(calcCurrencyModule.name)

// console.log(calcCurrencyModule.value)

// 2. Local and global scope

// var gloalScope = 'DEV'

// function local () {
//   var scopeLocal = 'Pato'
//   console.log(gloalScope, scopeLocal)
// }

// local()

// 3. Hoisting

// console.log(name)

// name = 'Gus'

// var name

// console.log(showMesage.firstName)

// function showMesage (message) {
//   // Es larga
//   console.log(message)
// }

// showMesage.firstName = 'Mi función'

// obj = {}

// console.log(obj.firstName)

// var obj

// obj.firstName = 'Pedrito'

// console.log(obj.firstName)

// 4. Event loop y Sync / Async

// Sync

// function showMesageSync () {
//   console.log('Soy Sync')
// }

// function showMesageAsync () {
//   setTimeout(function () {
//     console.log('Soy Async')
//   }, 1000)
// }

// showMesageAsync()

// showMesageSync()

// 5. Para que sirve this
//    * Propiedades de objetos

// function showMesage () {
//   console.log(this.firstName)
// }

// var obj = {
//   firstName: 'Gus',
//   showMesage: showMesage
// }

// var obj2 = {
//   firstName: 'Pachi',
//   showMesage: showMesage
// }

// showMesage()

// obj.showMesage()

// obj2.showMesage()

//    * Bind

// function showMesage (a, b) {
//   console.log(this.firstName, a, b)
// }

// var obj = {
//   firstName: 'Gus',
//   showMesage: showMesage
// }

// showMesage()

// var bindShowMessage = showMesage.bind(obj, 'Pepe')

// bindShowMessage('Adrián')

// bindShowMessage('Pachi')

//    * New Constructor

// function User (firstName) {
//   this.firstName = firstName
//   var isAdmin = false

//   this.myFunction = function () {
//     return isAdmin
//   }

//   this.myFunction2 = function (bool) {
//     isAdmin = bool
//   }
// }

// var user = new User('Pachi')

// user.isAdmin = true

// console.log(user.firstName, user.myFunction())

// user.myFunction2(true)

// console.log(user.firstName, user.myFunction())

// 6. Repaso de objetos en ES5

// - Nuevo en ES6:

// 1. Let

// for (var i = 0; i < 5; i++) {
//   console.log('Adentro', i)
// }

// console.log('Afuera', i)

// var i = 0

// while (i < 5) {
//   var name = 'Pepe'
//   console.log(i)
//   i++
// }

// while (i < 6) {
//   var name = 'Pepe'

//   console.log(i)
//   i++
// }

// for (let i = 0; i < 5; i++) {
//   let name = 'Pepe'
//   console.log('Adentro', i)
// }

// for (let i = 0; i < 5; i++) {
//   let name = 'Pepe'
//   console.log('Adentro', i)
// }

// console.log(name) // Rompe

// let name = 'Pato'

// console.log('Afuera', i)

// 2. Const

// const name = 'Pedro'

// name = 'Juan'

// const obj1 = {
//   firstName: 'Pachi'
// }

// const obj2 = {
//   firstName: 'Pachi'
// }

// obj1 = {}

// const obj3 = obj1 // Rompe

// let bool = false

// bool = 'Pato'

// console.log(obj1 == obj2)
// console.log(obj1 === obj2)
// console.log(obj1 === obj3)
// obj1.firstName = 'Adri'

// console.log(obj1.firstName, obj2.firstName, obj3.firstName)

// obj.firstName = 'Gus'

// 3. Valores por defecto

// function showMesage (message = 'Mensaje default', age) {
//   console.log(message, age)
// }

// showMesage('Hola', 35)

// showMesage()

// 4. String templates

// function showMesage (name) {
//   const message = `Hola ${name || 'Pedro'}`
//   console.log(message)
// }

// showMesage('Juan')
// showMesage()

// 5. Property Shorthand

// const firstName = 'Juan'

// const lastName = 'Perez'

// const obj1 = {
//   name: firstName,
//   lastName
// }

// const obj2 = {
//   firstName
// }

// console.log(obj1)
// console.log(obj2)

// 6. Arrow functions y this

// const myFunc1 = function () {
//   console.log('Muestro mensaje 1')
// }

// myFunc1()

// const myFunc2 = () => {
//   console.log('Muestro mensaje 2')
// }

// myFunc2()

// function User1 (firstName) {
//   this.firstName = firstName
//   setTimeout(function () {
//     console.log('El user 1 es ', this.firstName)
//   }, 1000)
// }

// const user1 = new User1('Pachi')

// function User2 (firstName) {
//   this.firstName = firstName
//   setTimeout(() => {
//     console.log('El user 2 es ', this.firstName)
//   }, 1000)
// }

// const user2 = new User2('Pachi')
