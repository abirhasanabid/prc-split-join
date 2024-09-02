/**
 * Task: Use the split method to convert the names string into an array of individual names. Then, use the join method to create a string where the names are separated by commas, like "John,Jane,Jack,Jill".
 */
let names = "John Jane Jack Jill";

const arr = names.split(' ');
console.log(arr);

const str = arr.join();
console.log(str);