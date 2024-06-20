//1

let god=2015


if (god%4==0){
    console.log("visokosniy")
}else{
    console.log('korotkiy')
}

//2

let number=15

if (number%2==0){
    console.log('chetniy')
}else{
    console.log('nechetniy')
}

//3

let mesyac = "Iyun"

if (mesyac=="Yanvar" || mesyac=="Fevral" || mesyac=="Dekabr"){
    console.log("zima")
}else if (mesyac=="Mart" || mesyac=="Aprel" || mesyac=="May"){
    console.log('vesna')
}else if(mesyac=="Iyun" || mesyac=="Iyul" || mesyac=="Avgust"){
    console.log('leto')
}else if (mesyac=="Sentyabr" || mesyac=="Oktyabr" || mesyac=="Noyabr"){
    console.log('osen')
}else{
    console.log('proverte napisannoe')
}
    
//4

let denNedeli = 5

if (denNedeli==1){
    console.log('ponedelnik')
}else if (denNedeli==2){
    console.log('vtornik')
}else if (denNedeli==3){
    console.log('sreda')
}else if (denNedeli==4){
    console.log('chetverg')
}else if (denNedeli==5){
    console.log('pyatnica')
}else if (denNedeli==6){
    console.log('subbota')
}else if (denNedeli==7){
    console.log('voskresenye')
}else{
    console.log('check')
}

//6

let age = 35

if (age >= 1 && age <= 3){
    console.log('baby')
}else if (age >=3 && age <=8){
    console.log('child')
}else if (age >=8 && age <=13){
    console.log('preteen')
}else if (age >=13 && age <=18){
    console.log('teenager')
}else if (age >=21 && age <=35){
    console.log('young adult')
}else if (age >=35 && age <=55){
    console.log('adult')
}else if (age >=55 && age <=70){
    console.log('pojiloy')
}else if(age >=70 && age <=100){
    console.log('qocaNeneBaba')
}else{
    console.log('net dannix')
}

//7

// let kursUsd = 0.59
// let kursEuro = 0.54

// let summa = 100

// let usdToAzn=summa*kursUsd
// console.log(usdToAzn)

// let euroToAzn=summa*kursEuro
// console.log(euroToAzn)

let currentCurency = "AZN"
let convertToCurency = 'USD'
let summa = 598
let result

if(currentCurency == 'AZN'){
    if (convertToCurency == 'USD'){
        result = summa * 0.59
    }else if (convertToCurency == 'EUR'){
        result = summa * 0.54 
    }else if (convertToCurency == 'TRY'){
        result = summa * 18.98
    }else {
        result = 'Mi ne razmenivaem na' + convertToCurency
    }        
}else if (currentCurency == 'USD'){
    if (convertToCurency == 'AZN'){
        result = summa * 1.70
    }else if (convertToCurency == 'EUR'){
        result = summa * 0.92
    }else if (convertToCurency == 'TRY'){
        result = summa * 32.27
    }else {
        result = 'Mi ne razmenivaem na' + convertToCurency
    }  
}else if (currentCurency == 'TRY'){
    if (convertToCurency == 'AZN'){
        result = summa * 0.053
    }else if (convertToCurency == 'EUR'){
        result = summa * 0.029
    }else if (convertToCurency == 'USD'){
        result = summa * 0.031
    }else {
        result = 'Mi ne razmenivaem na' + convertToCurency
    }
}else{
    result = 'Mi ne razmenivaem na' + convertToCurency
} 

console.log(result);