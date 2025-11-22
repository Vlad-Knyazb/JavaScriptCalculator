
// HomeWork_8


function findMax(numbers) {
  let max = numbers[0]
  
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i]
    }
  }
  
  return max;
}

console.log("1. Максимальное число среди этих чисел: [1, 2, 3, 4] = ",
  findMax([1, 2, 3, 4]))
console.log("2. Максимальное число среди этих чисел: [390, -5000, 98498] = ",
  findMax([390, -5000, 98498]))
console.log("3. Максимальное число среди этих чисел: [21, 22]:", 
  findMax([21, 22]))
console.log("4. Максимальное число среди этих чисел: [-19, -983, 738, 777, -34] = ",
  findMax([-19, -983, 738, 777, -34]))
console.log("5. Максимальное число среди этих чисел: [-872472, -94892847, -2782] = ",
  findMax([-872472, -94892847, -2782]))


















































// lesson_8

// function sayHello(name = "") {
//   console.log("Hello" + name)
// }

// sayHello("user1")
// sayHello("user2")
// sayHello("user3")
// sayHello()



// function sum (a, b) {
//   if (a > 0 && b > 0) {
//     return a + b
//   } else (
//     return 0
//   )
// }


// function loop(count) {
//   for (var i = 0; i < count; i++) {
//     var result = sum(1, i)
//     console.log(result)
//   }
// }

// loop(4)



// var showAlert = function() {
//   console.log("ALERT")
// }

// var obj = {
//   index: 10,
//   a: "string",
//   fun: function () {
//     console.log("ALERT")
//   },
// }

// obj.fun()

// console.log(obj)


// var signal = `red` // `green`, `yellow`

// var actions = {
//   red: function () {
//     console.log("STOP")
//   },
//   yellow: function () {
//     console.log("WAITING")
//   },
//   green: function () {
//     console.log("GO")
//   },
// }

// actions[signal]()






















// // HomeWork_7

// const orders = [
//   {
//     id: 1,
//     customer: "Jhon",
//     items: [
//       { name: "Ноутбук",  price: 50000, quantity: 1 },
//       { name: "Мышь",     price: 1500,  quantity: 2 }
//     ]
//   },
//   {
//     id: 2,
//     customer: "Alan",
//     items: [
//       { name: "Телефон", price: 30000, quantity: 1 },
//       { name: "Чехол",   price: 1000,  quantity: 3 }
//     ]
//   },
//   {
//     id: 3,
//     customer: "Jane",
//     items: [
//       { name: "Клавиатура", price: 2500,  quantity: 1 },
//       { name: "Монитор",    price: 12000, quantity: 1 }
//     ]
//   }
// ];

// console.log("Сумма заказов: ");
// for (var i = 0; i < orders.length; i++) {
//   var order = orders[i];
//   var orderSum = 0;
  
//   for (var j = 0; j < order.items.length; j++) {
//     var item = order.items[j];
//     orderSum += item.price * item.quantity;
//   }
  
//   console.log(`Заказ ${order.id} (${order.customer}): ${orderSum} $`);
// }



// var TotalInCome = 0
// for (var i = 0; i < orders.length; i++) {
//   var order = orders[i]
  
//   for (var j = 0; j < order.items.length; j++) {
//     var item = order.items[j]
//     TotalInCome += item.price * item.quantity
//   }
// }
// console.log("\nСумма дохода = " + TotalInCome + " $ ")



// var maxSum = 0
// var MostExpensive = ""

// for (var i = 0; i < orders.length; i++) {
//   var order = orders[i]
//   var orderSum = 0
  
//   for (var j = 0; j < order.items.length; j++) {
//     var item = order.items[j]
//     orderSum += item.price * item.quantity
//   }
//   if (orderSum > maxSum) {
//     maxSum = orderSum
//     MostExpensive = order.customer
//   }
// }
// console.log("Самый дорогой заказ = " + MostExpensive + " (" + maxSum + " $ )")



// //Дополнительное задание:

// console.log("\nВсе проданные товары: ")
// var allProducts = {}

// for (var i = 0; i < orders.length; i++) {
//   var order = orders[i]
  
//   for (var j = 0; j < order.items.length; j++) {
//     var item = order.items[j]
//     var NameProduct = item.name
//     if (allProducts[NameProduct]) {
//       allProducts[NameProduct] += item.quantity
//     } else {
//       allProducts[NameProduct] = item.quantity
//     }
//   }
// }
// for (var NameProduct in allProducts) {
//   console.log(NameProduct + " = " + allProducts[NameProduct] + " (шт)")
// }



// var PopularProduct = ""
// var maxQuantity = 0

// for (var NameProduct in allProducts) {
//   if (allProducts[NameProduct] > maxQuantity) {
//     maxQuantity = allProducts[NameProduct]
//     PopularProduct = NameProduct
//   }
// }
// console.log("\nСамый популярный товар = " + PopularProduct + " (" + maxQuantity + " (шт))")



















































// lesson_7 Циклы и Массивы


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