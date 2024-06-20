//1
// https://edabit.com/challenge/GLbuMfTtDWwDv2F73

function countTrue(arr) {
    let x=0
    for(let i=0;i<arr.length;i++){
        if(arr[i] === true){
            x++
        }
    }
    return x
}

console.log(countTrue([true, false, false, true, false]));
console.log(countTrue([false, false, false, false]));
console.log(countTrue([]));

//2
// https://edabit.com/challenge/hzxN9bAebBPNqdQto

let f1 = redundant("apple")
let f2 = redundant("pear")
let f3 = redundant("")

function redundant(str) {
    return function() {
        return str;
    }
}

console.log(f1());
console.log(f2());
console.log(f3());

//3
// https://edabit.com/challenge/bAqxpvYmDuuvz4LQz

// let REGEXP = "Xochu na more"



// console.log(REGEXP("more"));

//4
// https://edabit.com/challenge/yFJzLfYghz7ZtsyAN

function num_of_digits(num) {
    let y = 0;
    while (num!== 0) {
        num = Math.floor(num / 10);
        y++;
    }
    return y
}


console.log(num_of_digits(1000));
console.log(num_of_digits(12));
console.log(num_of_digits(1305981031));
console.log(num_of_digits(0));

//1
// https://edabit.com/challenge/8Qg78sf5SNDEANKti

function animals(chickens, cows, pigs) {
	return (chickens*2)+(cows*4)+(pigs*4)
}

console.log(animals(2, 3, 5));
console.log(animals(1, 2, 3));
console.log(animals(5, 2, 8));

//2
//  https://edabit.com/challenge/GwvwXHWCThHZrR7xu

function footballPoints(wins, draws, losses) {
	return (wins*3)+(draws*1)+(losses*0)
}

console.log(footballPoints(3, 4, 2));
console.log(footballPoints(5, 0, 2));
console.log(footballPoints(0, 0, 1));

//3
// https://edabit.com/challenge/Q3n42rEWanZSTmsJm

function minMax(arr) {
	return [Math.min(...arr), Math.max(...arr)]
}

console.log(minMax([1, 2, 3, 4, 5]));
console.log(minMax([2334454, 5]));
console.log(minMax([1]));

//4
// https://edabit.com/challenge/xsi99TwpGyFC8KS6d

function numberSplit(n) {
	return [Math.floor(n/2), Math.ceil(n/2)]
}

console.log(numberSplit(4));
console.log(numberSplit(10));
console.log(numberSplit(11));
console.log(numberSplit(-9));

//5
//  https://edabit.com/challenge/XdAR3KohR5w7rjrFg

function sumOfCubes(nums) {
	let summa=0
    for(let i=0;i<nums.length;i++)
        summa+=nums[i]**3
}

console.log(sumOfCubes([1, 5, 9]));
console.log(sumOfCubes([3, 4, 5]));
console.log(sumOfCubes([2]));
console.log(sumOfCubes([]));