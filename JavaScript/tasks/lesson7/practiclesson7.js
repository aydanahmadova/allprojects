//1

function matchHouses(step) {
    return step * 6 - (step - 1)
}

console.log(matchHouses(1));
console.log(matchHouses(4));
console.log(matchHouses(87));

//2

function matchModel(n) {
    return 10 * n - 2
}

console.log(matchModel(3));

//3

function isSymmetrical(x) {
    let str = String(x)
    let k = Math.floor(String(x).length / 2)
    console.log(k);

    for (let i = 0; i < k; i++) {
        console.log(str[i]);
        if (str[i] !== str[str.length - 1 - i]) {
            return false
        } else {
            return true
        }
    }

}

console.log(isSymmetrical(7227));

//4

function isSpecialArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== i % 2) {
            return false; // If the parity of the index doesn't match the parity of the element, return false
        }
    }
    return true; // If all elements meet the condition, return true

    }


console.log(isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]));
console.log(isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3]));
console.log(isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3]));