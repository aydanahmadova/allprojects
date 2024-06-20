// 0 1 1 2 3 5 8 13

function fibonachi(count) {
    let fib = []
    for (let i = 0; i < count; i++) {
        if (i == 0) {
            fib[i] = 0
        } else if (i == 1) {
            fib[i] = 1
        } else {
            fib[i] = fib[i - 1] + fib[i - 2]
        }
    }


    return fib
}

console.log(fibonachi(6));
console.log(fibonachi(20));

//faktorial 6!=1*2*3*4*5*6
//          x!=1*2**3*...*x

function factorial(x) {
    let result = 1

    if (x == 0) {
        return result
    } else if (x == 1) {
        return result
    } else {
        for (let i = 1; i <= x; i++) {
            console.log(i);
            result = result*i
        }
    }

    return result
}

console.log(factorial(9))

function summaIProizvedenie(chislo) {
    let x=String(chislo)
    console.log(x);
    console.log(x[0]);
    let sum=0
    let umn=1


    console.log();

    for (let i=0;i<x.length;i++){
        console.log(i,x[i]);
        let y=Number(x[i])
        console.log(y);
        sum=sum+y
        umn=umn*y
        
    }

    return {
        "Summa" :sum,
        "Umnojenie":umn
    }
}

console.log(summaIProizvedenie(54654))

//i=o i <6

//0 cikl i==0
//      fib[i]=0
//1 cikl i==1
//      fib[i]=1
//2 cikl i==1
//      fib[i]=fib[i-1]+fib[i-2]
//3 cikl i==2
//      fib[2]=fib[i-1]+fib[i-2]=0+1=1
