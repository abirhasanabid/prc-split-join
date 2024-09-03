/**
 * Task: Use the split method to break the string into an array of characters, reverse the array, and then use join to create a new string that reads "olleh".
 */



let word = "hello";
let arr = word.split('');

let arr1 = [];
for (let i = arr.length - 1; i >= 0; i--) {
    const newArr = arr[i];
    arr1.push(arr[i]);
}
console.log(arr1.join(''));
