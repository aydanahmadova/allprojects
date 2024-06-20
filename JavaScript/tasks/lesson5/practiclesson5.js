//1

let a = 0;

for (let i = 1; i <= 100; i++) {
    // console.log(i);
    a = a + i
}
console.log(a);

//a+b=c;
//a+i=a
//0+1=1
//1+2=3
//3+3=6

//2

let b = 1;

for (let i = 1; i <= 15; i++) {
    console.log(i);
    b = b * i
    console.log(b);
}
// 1*i=1
// 1*1=1
// 1*2=2
// 2*3=6
// 6*4=24
// 24*5=120
// 120*6=720

//3

for (let i = 1; i <= 100; i++) {
    // console.log(i);
    if (i % 2 == 0) {
        console.log(i);
    }
}

//4

for (let i = 1; i <= 100; i++) {
    // console.log(i);
    if (i%2!==0) {
        console.log(i);
    }
}

//5

let d=76
//sostavnie chisla 2<,prostie kotorie delyatsa na 1 i na seba
if (d!=2 && d%2==0){
    console.log("sostavnoe");
}else if (d!=3 && d%3==0){
    console.log("sostavnoe");
}else if (d!=5 && d%5==0){
    console.log("sostavnoe");
}else if (d!=7 && d%7==0){
    console.log("sostavnoe");
}else{
    console.log("prostoe");
}

//6

// let chisla = []

// for (let i=0;i<10;i++){
//     console.log(i);
//    let chislo = window.prompt['vvedite chislo']
//    console.log(chislo);
//    chisla.push[chislo]
// }

// console.log(chisla); //array
// console.log(...chisla); // rasshipit array
// console.log(math.max(...chisla));   //t.k. math.max metod ne rabotaet dla array

// // console.log(math.max(5,6,712,45,65)); 

// //7

// let chisla2 = []

// for (let i=0;i<10;i++){
//     console.log(i);
//    let chislo = window.prompt['vvedite chislo']
//    console.log(chislo);
//    chisla.push[chislo]
// }

// console.log(chisla2);
// console.log(...chisla2);
// console.log(math.max(...chisla2));

//8

let array = [13,20,25,33,42]
let chet = []
let nechet = []

for (let i=0;i<array.length;i++){
    console.log(i,array[i]);
    if (array[i]%2 == 0){
        chet.push(array[i])
    }else {
        nechet.push(array[i])
    }
}

console.log(chet);
console.log(nechet);

//9

let array2 = [21,3,56,41,12,88]
let u = 0; //a+i=a

for (let i=0; i<array2.length;i++){
    console.log(i,array2[i]);
    if (array2[i]%2 == 0)
        u=u+array2[i]
}

console.log(u);

//10

let array3 = [21,3,56,41,12,88]
let k = 1; //k*i=k

for (let i=0; i<array3.length;i++){
    console.log(i,array3[i]);
    if (array3[i]%2!==0)
        k=k*array3[i]
}

console.log(k);