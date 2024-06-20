//1
//  https://edabit.com/challenge/QSnaSH5S3oxZkwcNc

function isSameNum(num1, num2) {
	if (num1 === num2){
        return true
    }else{
        return false
    }
}

console.log(isSameNum(4, 8));
console.log(isSameNum(2, 2));
console.log(isSameNum(2, "2"));

//2
//  https://edabit.com/challenge/GwvwXHWCThHZrR7xu

function footballPoints(wins, draws, losses) {
	return (wins * 3) + (draws * 1) + (losses * 0);
}

console.log(footballPoints(3, 4, 2));
console.log(footballPoints(5, 0, 2));
console.log(footballPoints(0, 0, 1));

//3
//  https://edabit.com/challenge/JesaFi5ntBEbGT8bu

function convert(hours, minutes) {
	return (hours*3600)+(minutes*60)
}

console.log(convert(1, 3));
console.log(convert(2, 0));
console.log(convert(0, 0));

//4
//  https://edabit.com/challenge/FipbQSYquQLPZ8QXG

function isSeven(x) {
	return x==="7"? true:false;

    if (x==="7" || x===7){
        return true
    }else{
        return false
    }
}

console.log(isSeven(7));

//5
//  https://edabit.com/challenge/BGvTMfwxYDRbtaTJ3

function checkEquality(a, b) {
    if (a===b){
        return true
    }else{
        return false
    }
}

console.log(checkEquality(1, true));
console.log(checkEquality(0, "0"));
console.log(checkEquality(1, 1));

//6
//  https://edabit.com/challenge/QkvDge63crdGnMfvM

// create your arrow function below

const arrowFunc = (identity) => {
    return (arg) => arg;
};

const identityFunction = arrowFunc('identity');

console.log(identityFunction(3));
console.log(identityFunction("3"));
console.log(identityFunction(true));

//7
//  https://edabit.com/challenge/d9suvbchE2bnHNQuK

function frames(minutes, fps) {
	return (minutes*60)*fps
}

console.log(frames(1, 1));
console.log(frames(10, 1));
console.log(frames(10, 25));

//8
//  https://edabit.com/challenge/5erCDJ8eJDrXkmwTK

function makesTen(a, b) {
	if (a==10 || b==10 || a+b==10){
        return true
    }else{
        return false
    }
}

console.log(makesTen(9, 10));
console.log(makesTen(9, 9));
console.log(makesTen(1, 9));

//9
//  https://edabit.com/challenge/yHGowWucg3k2kJdZ4

function comp(str1, str2) {
	return str1.length === str2.length;
}

console.log(comp("AB", "CD"));
console.log(comp("ABC", "DE"));
console.log(comp("hello", "edabit"));

//na svoy vibor
//10
//  https://edabit.com/challenge/NAQhEoxbofPidLxm9

function addition(num) {
	return num+1
}

console.log(addition(0));
console.log(addition(9));
console.log(addition(-3));