// 1. Write a function from a given array of mixed data types and return the sum of all the number

let mixArray1 = ["3", 1, "string", null, false, undefined, 2];

const arrayChecker = () => {
    let numArray: number[] = []; //store only nomeric data

    for (let element of mixArray1) { // Access whole array data with loop, increment element
        if (typeof element === 'number') { // checking the array data using 'typeof' operator , check the element match with 'number'
            numArray.push(element)
        }
    }
    return numArray.reduce((acc, current) => acc + current, 0)  //.reduce method to return the sum of number on originall array
}

console.log(arrayChecker());


//2. Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. The array can only have a maximum size from a given input. (if the maximum size of the given input is 5 than the array can only contain 5 elements). 

function insertIntegers(max: number, ...integers: number[]) {
    const result: number[] = [];
    for (const integer of integers) {
        if (result.length < max) {
            result.push(integer);
        } else {
            break;
        }
    }
    return result;
}
// Argument (Max Length array, the integer number input into rest param)
console.log(insertIntegers(5, 5, 10, 24, 3, 6))

//alternate build in method 
function insertIntegers2(max: number, ...integers: number[]): number[] {
    return integers.slice(0, max);
}
console.log(5, 5, 10, 24, 3, 6);


//3. Combine Array 
let array1: number[] = [1, 2, 3];
let array2: number[] = [4, 5, 6];

function gabungArray(arr1: number[], arr2: number[]): number[] {
    let newMixed: number[] = [...arr1, ...arr2]
    return newMixed;
}
console.log(gabungArray(array1, array2));

//4. Write a function to find duplicate values in an array
// a.Example : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] →[2, 3, 5]
let array3: number[] = [1, 2, 2, 2, 3, 3, 4, 5, 5];

function findDuplicates(arr: number[]): number[] {
    return arr.filter((item, index) => arr.indexOf(item) !== index);
}
console.log(findDuplicates(array3));


//5. Write a function to find the difference in 2 given array
let array4: number[] = [1, 2, 3, 4, 5];
let array5: number[] = [3, 4, 5, 6, 7];

function findDifference(arr1: number[], arr2: number[]): number[] {
    return [...arr1.filter(num => !arr2.includes(num)), ...arr2.filter(num => !arr1.includes(num))];
}
console.log(findDifference(array4, array5));