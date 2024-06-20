console.log(privetstvie ('Aydan', 'Ahmadova'));

function privetstvie (name, surname){
    console.log('Hello');
    return 'Privet' + name + '' + surname
    // console.log('Bye')
}

console.log(privetstvie ('Ayselka', 'Memmedzade'));

function math(birthYear, currentYear=2024){
    return currentYear - birthYear
}

console.log(math(1989));
console.log(math(2003,2030));

//Arrow function-strelochnaya funkciya, vizivaetsa tolko posle sebya

let hello = () => {
    return "Hello"
}

console.log(hello());
console.log(hello());

let cars = ['BMW','Mercedes','Audi','Lamborghini','Pagani','Nissan gtr']
console.log(cars)

//array-eto kvadratnie skobki
//=> array funkciya

let kolvoDlina = cars.length
console.log(kolvoDlina)

console.log(cars[4]);

cars[2] = "Toyota"
console.log(cars);

let poisk = cars.find(car => car == "Mercedes")   //esli est vernet element, a esli net undefined
console.log(poisk)

let naytiIndex = cars.findIndex(x => x == "Audi") //esli est index vernetsa,a esli net to -1
console.log(naytiIndex)

let estIliNet = cars.includes("Porsche") //daet boolean otvet
console.log(estIliNet)

let udalitPosledniyElement = cars.pop() //udalaet element s konca
console.log(udalitPosledniyElement)

let dobavitSKonca = cars.push() //dobavlaet element s konca
console.log(dobavitSKonca)

let udalitPerviyElement  = cars.shift()
console.log(udalitPerviyElement)

let dobavitSnacala = cars.unshift("BMW x7","BMW f30")
console.log(cars)

let udalitPoKoordinatam = cars.splice(2,3)
console.log(cars)
//1oe znacenie gde nacinaet udalat po indexu,a 2oe kol-vo udalennix elementov

let dobavitPoKoordinatam = cars.splice(2,0,"Mercedes e200","McLaren")
console.log(cars)

let vzyatChast = cars.slice(1,4)
console.log(vzyatChast)
console.log(cars)
//1 vxodit v promejutok, a 4 net (1,2,3) //slice ne menyaet pervonachalnoe sostoyanie array-a,a prosto kopiruet chast v noviy array

num = [8,9,1,5,3,5,2,6,7,4]

let soedinitArrowVOdnu = cars.concat(num,cars)
console.log(soedinitArrowVOdnu)

let filter = num.filter(a => a>5 )
console.log(filter);  //filtruet iz osnovnogo arr po usloviyu i sozdaet noviy array s dannimi

let poUbivaniyu = num.sort((x,y) => y-x)
console.log(poUbivaniyu)

let poVozrastaniyu = num.sort((a,b) => a-b)
console.log(poVozrastaniyu)

let summaDannix = num.reduce((a,b) => a+b)
console.log(summaDannix)

let raznostDannix = num.reduce((a,b) => a-b)
console.log(raznostDannix)

let soedinit = cars.join()
console.log(soedinit)

let soedinit2 = cars.join("  jdjdnkjnvkj  ")
console.log(soedinit2)

let perevernutNaoborot = cars.reverse()
console.log(perevernutNaoborot);

let name = "AyselAydan"
console.log(name)

let strToArr = Array.from(name)
console.log(strToArr)