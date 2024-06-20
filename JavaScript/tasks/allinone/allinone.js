//lesson2
//1

let god = 2020

if (god%4==0){
    console.log('visokosniy');
}else{
    console.log('korotkiy');
}

//2

let chislo = 23

if (chislo%2==0){
    console.log('chetnoe');
}else{
    console.log('nechetnoe');
}

//3

let mesac = 'Noyabr'

if (mesac=='Dekabr' || mesac=='Yanvar' || mesac=='Fevral'){
    console.log('zima');
}else if(mesac=='Mart' || mesac=='Aprel' || mesac=='May'){
    console.log('vesna');
}else if(mesac=='Iyun' || mesac=='Iyul' || mesac=='Avgust'){
    console.log('leto');
}else if(mesac=='Sentyabr' || mesac=='Oktyabr' || mesac=='Noyabr'){
    console.log('osen');
}else{
    console.log('net otveta');
}

//4

let denNedeli = 1

if (denNedeli==1){
    console.log('ponedelnik');
}else if(denNedeli==2){
    console.log('vtornik');
}else if(denNedeli==3){
    console.log('sreda');
}else if(denNedeli==4){
    console.log('chetverg');
}else if(denNedeli==5){
    console.log('patnica');
}else if(denNedeli==6){
    console.log('subbota');
}else if(denNedeli==7){
    console.log('voskresenye');
}else{
    console.log('net otveta');
}

//5

let vozrast = 45

if (vozrast >=1 && vozrast<=12){
    console.log('rebenok');
}else if (vozrast >=12 && vozrast<=18){
    console.log('podrostok');
}else if (vozrast >=18 && vozrast<=30){
    console.log('young adult');
}else if (vozrast >=30 && vozrast<=45){
    console.log('ochen daje nichego');
}else if (vozrast >=45 && vozrast<=60){
    console.log('adult');
}else if (vozrast >=60 && vozrast<=100){
    console.log('old');
}else{
    console.log('net otveta');
}

//6

let nashaValyuta = 'AZN'
let konvertaciyaV = 'USD'
let summaDeneg = 900

if (nashaValyuta == 'AZN'){
    if (konvertaciyaV == 'USD'){
        result = summaDeneg*0.59
    }else if(konvertaciyaV == 'EURO'){
        result = summaDeneg*0.54
    }else if(konvertaciyaV == 'TRY'){
        result = summaDeneg*18.96
    }else{
        result = 'net'
    }
}else if (nashaValyuta == 'USD'){
    if (konvertaciyaV == 'AZN'){
        result = summaDeneg*1.70
    }else if(konvertaciyaV == 'EURO'){
        result = summaDeneg*0.92
    }else if(konvertaciyaV == 'TRY'){
        result = summaDeneg*32.23
    }else{
        result = 'net'
    }
}else if (nashaValyuta == 'EURO'){
    if (konvertaciyaV == 'AZN'){
        result = summaDeneg*1.85
    }else if(konvertaciyaV == 'USD'){
        result = summaDeneg*1.09
    }else if(konvertaciyaV == 'TRY'){
        result = summaDeneg*35.01
    }else{
        result = 'net'
    }
}

console.log(result);

//lesson3
//1

let number = 37
console.log(number);

let numToStr=String(number)
console.log(numToStr);

let strToArr=Array.from(numToStr)
console.log(strToArr);

let probel=strToArr.join('_')
console.log(probel);

//2

// let chislo1=window.prompt('vvedite cislo')
// let chislo2=window.prompt('vvedite cislo')

// if (chislo1 == chislo2){
//     console.log('true');
// }else{
//     console.log('false');
// }

//3

let fraza='i like coding!'
console.log(fraza);

let virezat=fraza.slice(7)
console.log(virezat);

//4

let sentence='Hello World'
console.log(sentence);

let zamenitSlovo='Code'
let newSentence=sentence.replace('World', 'Code')
console.log(newSentence);

//5

// let slovo=window.prompt('vvedite slovo')
// let dlina=slovo.length
// console.log(dlina);

//6

// let chislo3=window.prompt('vvedite cislo')

// let dlina=chislo3.length
// console.log(dlina);

//7

let name1='aydan'
console.log(name1);

let strToArr3=Array.from(name1)
console.log(strToArr3);

let naoborot=strToArr3.reverse(name1)
console.log(naoborot);

let naoborot1=naoborot.join('')
console.log(naoborot1);

//8

let num=window.prompt('vvedite nomer')
console.log(num);

let numToStr1=String(num)
console.log(numToStr1);

let num1=numToStr1.substring(0,3)
console.log(num1);

if (num == '070' || num == '077'){
    console.log('nar');
}else if(num == '055' || num == '099'){
    console.log('bakcell');
}else if(num == '050' || num == '051' || num == '010'){
    console.log('azercell');
}else{
    console.log('neizvestno');
}