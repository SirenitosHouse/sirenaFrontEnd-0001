function User (firstName, age, isAdmin = false, telephones = []) {
  this.age = age
  var isModified = false

  this.addTelephone = function (phone) {
    telephones.push(phone)
    isModified = true
  }

  this.changeAge = function (age) {
    this.age = age
    isModified = true
  }

  this.showModified = function () {
    console.log(isModified)
  }

  this.showAll = function () {
    console.log(
      `Mi nombre es ${firstName}, tengo ${this
        .age} años y mis telefonos son ${telephones.join(' / ')}.`
    )
  }
}

const user = new User('Pachi', 25, undefined, [ 1111, 7899 ])

// user.addTelephone(765765)

// user.showModified()

// user.age = 67

// user.showModified()

// user.changeAge(67)

// user.showModified()

user.showAll()
user.showModified()

user.changeAge(67)

user.addTelephone(765765)

user.showAll()
user.showModified()
