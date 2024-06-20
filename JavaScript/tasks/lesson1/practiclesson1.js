//1

let x=10;
let y=5;

let summa=x+y;
console.log(summa)

let raznost=x-y;
console.log(raznost);

let umnojenie=x*y;
console.log(umnojenie);

let delenie=x/y;
console.log(delenie);

//2

let days=8;
let sec=86400;

let result=days*sec;
console.log(result);

//3

let mySec=963546;

let myDays=Math.floor(mySec/86400);
console.log(myDays+'days')

let ostatok=mySec%86400;
console.log(ostatok);

let myHours=Math.floor(ostatok/3600);
console.log(myHours);

let ostatok2=ostatok%3600;
console.log(ostatok2);

let min=Math.floor(ostatok2/60);
console.log(min);

let second=ostatok2%60;
console.log(second);


//4

let celsiya=42;

let farengeyt=(celsiya*1.8+32).toFixed(1);
console.log(farengeyt);

//5

let fareng=167;

let cels=(fareng-32)/1.8;
console.log(cels);

//6

let chislo=12;

let x1=Math.floor(chislo/10);
console.log(x1)

let x2=chislo%10;
console.log(x2)

let summa1=x1+x2
console.log(summa1)

//7

let z=3
let g=4
let w=5

let perimetr=z+g+w
console.log(perimetr)

let ploshad=3*4/0.5
console.log(ploshad)

//8

let yayca=17
let vmestimost=5
let minut=10

let rezultat=Math.ceil(yayca/vmestimost)
console.log(rezultat)

let itog=rezultat*10
console.log(itog)


let a=10
let b=17
a=17
b=10


let c=a

console.log(c)
console.log(c,b);

let d=10
let f=4
let h=2

let summa2=(d+f+h)/3
console.log(summa2)

let okruglenie=Math.floor(summa2)
console.log(okruglenie)
