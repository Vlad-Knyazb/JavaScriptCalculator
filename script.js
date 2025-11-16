var a = String ("Hello")
var b = Number(200)  
var c
  
console.log(typeof a)
console.log(typeof b)
console.log(c)
console.log(a == "Hello") 
console.log(a == b)        
console.log(a * b)      





var a = Number(prompt("Введите сумму покупки"))
var b = 0
var c = 0
var result

if (isNaN(a) || a < 0) {
  console.log("Введите корректную сумму покупки")
} else {
    if (a >= 1000) {
        b = 15
    } else if (a >= 500) {
        b = 10
    } else if (a >= 100) {
        b = 5
    } else {
        b = 0
    }
    c = a * (b / 100)
    result = (a - c).toFixed(0)
}

if(result) {
    console.log("Сумма покупки = " + a.toFixed(0) + ("$"))
    console.log("Скидка = " + b + "%")
    console.log("Сумма скидки = " + c.toFixed(0) + ("$"))
    console.log("Итоговая сумма = " + result + "$")
}





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