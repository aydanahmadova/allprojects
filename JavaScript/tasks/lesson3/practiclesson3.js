//1

let num = 37
console.log(num)

let numToStr = String(num)
console.log(numToStr)

let strToArr = Array.from(numToStr)
console.log(strToArr)

let mesafe = strToArr.join("_")
console.log(mesafe)

//2

// let number1 = window.prompt("vvedite chislo")
// let number2 = window.prompt("vvedite chislo")

// if ( number1 == number2){
//     console.log(true)
// }else{
//     console.log(false)
// }

//3

let text = "I like coding!"
console.log(text)

let vzyatChast = text.slice(7)
console.log(vzyatChast)

//4

let slovo = "Hello world"

let zamena = "Code"
console.log(slovo)

let tezesoz = slovo.replace("world","code")
console.log(tezesoz)

//5

// let luboeSlovo = window.prompt("vvedite luboe slovo")

// let dlina = luboeSlovo.length
// console.log(dlina)

// //6

// let chislo = window.prompt("vvedite luboe chislo")

// let kolvo = chislo.length
// console.log(kolvo)

//7

let imya = "Leyli"
console.log(imya)

let strtoArr2 = Array.from(imya).reverse().join("")
console.log(strtoArr2)

//8

// 070,077 - nar
// 050,010,051 - sim
// 055,099-cin

let phoneNum = window.prompt('vvedite nomer telefona').substring(0,3)
console.log(phoneNum)
let result


if (phoneNum == "070" || phoneNum == "077"){
    console.log('nar')
}else if(phoneNum == "050" || phoneNum == "010" || phoneNum == "051"){
    console.log('sim')
}else if(phoneNum == "055" || phoneNum == "099"){
    console.log('cin')
}else{
    console.log('nomer neizvesten')
}