// 1. Function to calculate sum of two numbers
function calculateSum(a, b) {
    return a + b;
}

// 2. Function to check if a number is even
function isEven(num) {
    return num % 2 === 0;
}

// 3. Function To Find The Maximum Number in an Array
function findMax(arr) {
    return Math.max(...arr);
}

// 4. Function to filter odd numbers from an array
function filterOddNumbers(arr) {
    return arr.filter(num => num % 2 !== 0);
}

// 5. Function to count words in a string
function countWords(str) {
    return str.trim().split(/\s+/).length;
}

// 6. Function to remove duplicate elements from an array
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// Example usage
console.log(calculateSum(5, 10)); 
console.log(isEven(4)); 
console.log(findMax([3, 7, 2, 9, 5])); 
console.log(filterOddNumbers([1, 2, 3, 4, 5])); 
console.log(countWords("Hello world! This is a test."));
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); 
