// var login = "user"
// var password = "qwerty"
// var email = "email@gmail.com"
// var age = 72
// var isStudent = true 

// var user = {
//     login: "user",
//     password: "qwerty",
//     email: "email@gmail.com",
//     age: 72,
//     isStudent: true,
//     location: {
//         country: "Kyrgyzstan",
//         city: "Bishkek",
//     },
// }

// var key = "email"

// console.log(user[key])

// var password = prompt("Enter password: ")
// if(user.password === password) {
//     if (user.isStudent) {
//         console.log("Hi, Student " + user.login)
//     } else {
//         console.log("Hello" + user.login)
//     }
// } else {
//     console.log("Access denied")
// }


// var products = ["Keyboard", "Mouse", "Monitor","Headphones"]
// console.log(products[3])

// var orders = [
//     {
//         name: "keyboard",
//         price: 100,
//     },
//     {
//         name: "mouse",
//         price: 1000,
//     },
//     {
//         name: "headphones",
//         price: 500,
//     },
// ]

// console.log(orders[1].price)





// Циклы

// for (var index = 0; index < 10; index = index + 1) {
//     console.log(index)
// }
// for (var i = 10; i >= 0; i = i - 1) {
//     console.log(i)
// }


// var products = ["Keyboard", "Mouse", "Monitor","Headphones"]

// for (var i = 0; i < products.length; i++) {
//     var element = products[i]
//     console.log(element)
// }





// // Массивы 

// var arr1 = ["sdf","gjh","jlh"]
// var arr2 = ["sdf","gjh","jlh"]

// // Длинны равны 
// // Каждые элементы равны 

// if (arr1.length === arr2.length) {
//     var result = true 

//     for (var i = 0; i < arr1.length; i++) {
//         if (arr1[i] !== arr2[i]) {
//             result = false 
//         }
//     }
//     console.log(result)
// } else {
//     console.log(false)
// }





// var products = ["Keyboard", "Mouse", "Monitor"] 

// for (var prod of products) {
//     console.log(prod)
// }

// var order = {
//     name: "mouse",
//     price: 1000,
//     quantity: 3,
// }
// for (var prod of products) {
//     console.log(order[key])
// }


















// HomeWork_6 JavaScript

// var a = String ("Hello")
// var b = Number(200)  
// var c
  
// console.log(typeof a)
// console.log(typeof b)
// console.log(c)
// console.log(a == "Hello") 
// console.log(a == b)        
// console.log(a * b)      





// var a = Number(prompt("Введите сумму покупки"))
// var b = 0
// var c = 0
// var result

// if (isNaN(a) || a < 0) {
//   console.log("Введите корректную сумму покупки")
// } else {
//     if (a >= 1000) {
//         b = 15
//     } else if (a >= 500) {
//         b = 10
//     } else if (a >= 100) {
//         b = 5
//     } else {
//         b = 0
//     }
//     c = a * (b / 100)
//     result = (a - c).toFixed(0)
// }

// if(result) {
//     console.log("Сумма покупки = " + a.toFixed(0) + ("$"))
//     console.log("Скидка = " + b + "%")
//     console.log("Сумма скидки = " + c.toFixed(0) + ("$"))
//     console.log("Итоговая сумма = " + result + "$")
// }



// lesson_6 JavaScript

// var a = Number(prompt("number 1"))
// var b = Number(prompt("number 2"))
// var action = prompt("action")
// var result 


// if (isNaN(a) || isNaN(b)) {
//   alert("invalid number")
// } else {
//     if (action === "+") {
//         result = a + b
//     } else if (action === "*") {
//         result = a * b 
//     } else if (action === "-") {
//         result = a - b 
//     } else if (action === "/") {
//         result = (a / b).toFixed(0)
//     } else {
//         alert("invalid action")
//     }
// }

// if(result) {
//     alert(result)
// }