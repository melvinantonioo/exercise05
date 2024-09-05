//1. Get The Lowest and highest and average value (with and withouth function)
// a.Example : arr = [12, 5, 23, 18, 4, 45, 32] → { lowest: 4, highest: 45, average: 19.8xxx }

let daftarAngka: number[] = [12, 5, 23, 18, 4, 45, 32];
let min: any, max: any;

daftarAngka.forEach((val: any, idx: number) => {
    if (idx == 0) {
        max = min = val;
    } else if (val < min) {
        min = val;
    } else if (val > min) {
        max = val;
    } else if (val > val[daftarAngka.length - 1]) {
        max = val;
    }
})
console.log(`highest value is ${max} , Lowest Value Is ${min}`);

let sum: number = 0;
for (let i = 0; i < daftarAngka.length; i++) {
    sum += daftarAngka[i];
}
let averageValue = sum / daftarAngka.length;
console.log(`the average value is ${averageValue} rounded to ${Math.floor(averageValue)}`);


//2. Write a function that takes an array of words and returns a string by concatenating the words in the array,
// separated by commas and - the last word - by an 'and'.

let fruits: string[] = ["apple", "banana", "cherry", "date"];

// let fruitCollect = "";

// for (let i = 0; i < fruits.length; i++) {
//     fruitCollect = fruits[i]
//     console.log(fruitCollect)
// }
// let joined = fruitCollect.join(",")

//Unfortunately, your approach is not quite correct. You're iterating over the fruits array and assigning each element to fruitCollect, which is a string. This means that fruitCollect will only hold the last element of the array, which is "date"

let fruitCollect = fruits.slice(0, -1).join(",") + " " + "and" + " " + fruits[fruits.length - 1]
console.log(fruitCollect)


//3. Write a function from a given array of numbers and return the second smallest number

let num: number[] = [5, 3, 1, 7, 2, 6];
let minimum: number = num[0];
let secondMin: number = num[0];

for (let i = 1; i < num.length; i++) {
    if (num[i] < minimum) {
        secondMin = minimum;
        minimum = num[i];
    } else if (num[i] < secondMin && num[i] !== minimum) {
        secondMin = num[i]
    }
}

console.log(`second smallest number is ${secondMin}`)

//build in method alternative
// Find the minimum and maximum values
let mini = Math.min(...num);
let maxi = Math.max(...num);

// Remove the minimum value from the array
let filteredNum = num.filter(val => val !== mini);

// Find the minimum value in the filtered array, which is the second smallest number
let secondSmallest = Math.min(...filteredNum);

console.log(`Highest value is ${maxi}, lowest value is ${mini}, and second smallest value is ${secondSmallest}`);




//4. Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are of the same length.

let arrayA: number[] = [1, 2, 3];
let arrayB: number[] = [3, 2, 1];

const calculate = (arr1: number[], arr2: number[]) => {
    const result: number[] = [];

    for (let i = 0; i < arr1.length; i++) {
        result.push(arr1[i] + arr2[i]);
    }
    return result;
}
console.log(calculate(arrayA, arrayB));


//5. Write a function that adds an element to the end of an array. However, the element should only be added if it is not already in the array.
let arr1: number[] = [1, 2, 3, 4];

let newEl: number = 4;
let newEl1: number = 7;

const addElement = (arr: number[], new1: number) => {
    if (!arr.includes(new1)) {
        arr.push(new1);
    }
    return arr;
}

console.log(addElement(arr1, newEl));
console.log(addElement(arr1, newEl1));

arr1.includes(newEl1);
console.log(arr1.includes(newEl1))
