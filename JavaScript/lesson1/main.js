console.log("Hello World")
console.log(6+6)

//var, let, const (x,y,z)
//const postoyannaya ispolzuetsa dla info kotoraya pishetsa 1 raz
//Odni i te je nazvaniya dla peremennix nelzya ispolzovat.Var oshibku ne vidayot esli ispolzovat odinakovoe nazvanie

var firstName = "Aysel";
console.log(firstName);

//var firstName = "Alyasar";
//console.log(firstName);

let lastName="Memmedzade";
console.log(lastName);

lastName="Ahmadova";
console.log(lastName);

//let lastName

const birthDay='25.11';
console.log(birthDay);

//  const birthDay='17.10';
//  console.log(birthDay);

// const birthDay

//Data, Types, Operators

//stringi eto bukvi,znaki-vse cto pishetsa v kavichkax.v konsoli vixodit chernogo cveta

let myText="Hello, today is 8th of May"
console.log(myText);
console.log(typeof myText); //vixodit tip dannogo

//Number-vse cifri,chisla-v konsoli vixodit sinego cveta

let num1=667
console.log(num1);
console.log(typeof num1);

//Boolean-vidayot logicheskiy otvet, true ili false v zavisimosti ot usloviya

let a=6<8;
console.log(a)

//!-protivorechie

//Math operators
let x=6;
let y=8;
let z="7";
let g="3";

let summa=x+y;
console.log(summa);

let summaString=z+g;
console.log(summaString);
console.log("A"+'y'+'S'+'e'+'L');

let raznost=y-g;
console.log(raznost);

let umnojenie=z*g;
console.log(umnojenie);

let otnoshenie=x/g;
console.log(otnoshenie);

let ostatokOtDeleniya=8%5;
console.log(ostatokOtDeleniya);

let vozvedenieVstepen=6**3;
console.log(vozvedenieVstepen);

let kvadratniyKoren=Math.sqrt(64);   //square root=kvadratniy koren
console.log(kvadratniyKoren);

let bolshe=6>8;
console.log(bolshe);

let bolsheRavno = 6>=6;
console.log(bolsheRavno);

let menshe = 6<7;
console.log(menshe);

let mensheRavno = 6<=6;
console.log(mensheRavno);

let dvaRavno = 6 =="6";  //!= proveryayet tolko na znacheniye
console.log(dvaRavno);

let triRavno = 6 ==="6";  //!== proveryayet ne tolko na ravenstvo=znacheniye, no i na tip
console.log(triRavno);

let k = 7.93466789;
//7 7.9 8
let okruqlenie=Math.round(k);
console.log(okruqlenie);

let okruqlenieNaVerx=Math.ceil(k);
console.log(okruqlenieNaVerx);

let okruqlenieVniz=Math.floor(k);
console.log(okruqlenieVniz);

let okruqleniePosleZapyatoy=k.toFixed(3);
console.log(okruqleniePosleZapyatoy);

//String methods

let myStr="Aydan Aysel"
console.log(myStr);

let vseBukviBolshie=myStr.toUpperCase()
console.log(vseBukviBolshie);

let vseBukviMalenkie=myStr.toLowerCase()
console.log(vseBukviMalenkie);

let povtorenie=myStr.repeat(8);
console.log(povtorenie);

let virezatChast=myStr.substring(5,10);
//(5,10)
console.log(virezatChast);

let dlinaKolvo = myStr.length
console.log(dlinaKolvo)

let peremestit = myStr.replace("a","i")
console.log(peremestit)

let peremestitAll = myStr.replaceAll("a","e")
console.log(peremestitAll)

let estLi=myStr.includes("A")  //true or false
console.log(estLi)

let number=15
console.log(number);

let numToStr=String(number)
console.log(numToStr);

let string="24"
console.log(string);

let strToNum=Number(string)
console.log(strToNum);