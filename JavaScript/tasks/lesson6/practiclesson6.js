//1

function convert(minutes) {
    return minutes*60
    
}

console.log(convert(5));
console.log(convert(3));
console.log(convert(2));

// let min=5
// let min1=3
// let min2=2

// sec=min*60
// console.log(sec);

// sec=min1*60
// console.log(sec);

// sec=min2*60
// console.log(sec);

//2

function addition(num) {
    return num+1
}

console.log(addition(0));
console.log(addition(9));
console.log(addition(-3));

//3

function calcAge(age) {
	return age*365
}

console.log(calcAge(65));
console.log(calcAge(0));
console.log(calcAge(20));

//4

function getFirstValue(arr) {
	return arr[0]

}

console.log(getFirstValue([1,2,3]));
console.log(getFirstValue([80,5,100]));
console.log(getFirstValue([-500,0,50]));

//5

function circuitPower(voltage, current) {
	return voltage*current
}

console.log(circuitPower(230,10));
console.log(circuitPower(110,3));
console.log(circuitPower(480,20));

//6

function howManySeconds(hours) {
	return hours*3600
}

//1min=60sek
//60min=1chas=3600sek

console.log(howManySeconds(2));
console.log(howManySeconds(10));
console.log(howManySeconds(24));

//7

function remainder(x, y) {
	return x%y
}

console.log(remainder(1, 3));
console.log(remainder(3, 4));
console.log(remainder(-9, 45));
console.log(remainder(5, 5));

//8

function findPerimeter(length, width) {
	return (length+width)*2
}

console.log(findPerimeter(6, 7));
console.log(findPerimeter(20, 10));
console.log(findPerimeter(2, 9));

//9

function giveMeSomething(a) {
	return ("something"+" "+(a))
}

console.log(giveMeSomething("is better than nothing"));
console.log(giveMeSomething("Bob Jane"));
console.log(giveMeSomething("something"));

//10

function lessThanOrEqualToZero(num) {
	// return num<=0
	if (num<=0){
		return true
	}else{
		return false
	}
}

console.log(lessThanOrEqualToZero(5));
console.log(lessThanOrEqualToZero(0));
console.log(lessThanOrEqualToZero(-2));

//11

function points(twoPointers, threePointers) {
	return twoPointers*2+threePointers*3
}

console.log(points(1, 1));
console.log(points(7, 5));
console.log(points(38, 8));

//12

function addition(a, b) {
	return a+b
}

console.log(addition(3, 2));
console.log(addition(-3, -6));
console.log(addition(7, 3));

//13

function lessThan100(a, b) {
	// return a+b<100
	if (a+b<100){
		return true
	}else{
		return false
	}
}

console.log(lessThan100(22, 15));
console.log(lessThan100(83, 34));
console.log(lessThan100(3, 77));