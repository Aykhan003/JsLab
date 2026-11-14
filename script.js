//#region
// let n = 21;
// if (n % 3 === 0 && n % 7 === 0) {
//     console.log(n + " is even");
// } else {
//     console.log(n + " is odd");
// }

// let n = 21;
// let m = 34;
// let count = 0;
// for (let i = n; i <= m; i++) {
//     if ( i % 2 === 1) {
//         count++;
//     }
// }
// console.log("Number of odd numbers between " + n + " and " + m + ": " + count);

// let n = 21;
// let m = 34;
// let sum = 0;
// for (let i = n; i <= m; i++) {
//     if ( i % 2 === 1) {
//         sum += i;
//     }
// }
// console.log("Sum of odd numbers between " + n + " and " + m + ": " + sum);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         sum += arr[i];
//     }
// }
// console.log("Sum of even numbers in the array: " + sum);

// function CalculatesTheSumOfTheSquaresOfEvenNumbersInAnArray(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             sum += arr[i] * arr[i];
//         }
//     }
//     return sum;
// }
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let result = CalculatesTheSumOfTheSquaresOfEvenNumbersInAnArray(arr);
// console.log("Sum of the squares of even numbers in the array: " + result);

// function CalculatesBetweenTwoNumbers(n, m) {
//     let sum = 0;
//     if (IsNaN(n) || IsNaN(m)) {
//         return "Please enter valid numbers";
//     }
//     for (let i = n; i <= m; i++) {
//         if (i % 2 === 0) {
//             sum += i;
//         }
//     }
//     return sum;
// }

// let n = prompt("Enter the number:");
// if (n > 0) {
//     console.log("The number is positive");
// } else if (n < 0) {
//     console.log("The number is negative");
// }
// else if (n == 0) {
//     console.log("The number is zero");
// } else {
//     console.log("Please enter a valid number");
// }

// let n = prompt("Enter the number:");
// let count = 0;
// while (n > 0) {
//     count++;
//     n = Math.floor(n / 10);
// }
// console.log("The number of digits in the number is: " + count);

// let n = prompt("Enter the number:");
// let lastDigit = n % 10;
// console.log("The last digit of the number is: " + lastDigit);

// let n = prompt("Enter the number:");
// let firstDigit = n;
// while (firstDigit >= 10) {
//     firstDigit = Math.floor(firstDigit / 10);
// }
// console.log("The first digit of the number is: " + firstDigit);

// let n = 30;
// for (let i = 1; i <= n; i++) {
//     if (i % 5 === 0) {
//         console.log(i + " is divisible by 5");
//     }
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//     count++;
// }
// console.log("The number of elements in the array is: " + count);

// let arr = [1, -2, -3, 4, 5, 6, -7, 8, -9, 10];
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//         count++;
//     }
// }
// console.log("The number of negative numbers in the array is: " + count);

// let arr = [1, -2, -3, 4, 5, 6, -7, 8, -9, 10];
// let max = arr[0];
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//     }
// }
// console.log("The maximum number in the array is: " + max);
//#endregion
//#region MediumTasks
// let n = 5421;
// let sum = 0;
// while (n > 0) {
//     let digit = n % 10;
//     sum += digit;
//     n = Math.floor(n / 10);
// }
// console.log("The sum of the digits of the number is: " + sum);

// let n = 542;
// let result = 1;
// while (n > 0) {
//     let digit = n % 10;
//     result *= digit;
//     n = Math.floor(n / 10);
// }
// console.log("The product of the digits of the number is: " + result);

// let n = 5421;
// let original = n;
// let reverse = 0;
// while (n > 0) {
//     let digit = n % 10;
//     reverse = reverse * 10 + digit;
//     n = Math.floor(n / 10);
// }
// if (original === reverse) {
//     console.log("The number is a palindrome");
// }
// else {
//     console.log("The number is not a palindrome");
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let min = arr[0];
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < min) {
//         min = arr[i];
//     }
// }
//     console.log("The minimum number in the array is: " + min);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let min = arr[0];
// let max = arr[0];
// let minIndex = 0;
// let maxIndex = 0;
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < min) {
//         min = arr[i];
//         minIndex = i;
//     }
//     if (arr[i] > max) {
//         max = arr[i];
//         maxIndex = i;
//     }
// }
//     console.log("The minimum number in the array is: " + min + " at index " + minIndex);
//     console.log("The maximum number in the array is: " + max + " at index " + maxIndex);

// let arr = [0, 2, 3, 0, 5, 6, 7, 0, 9, 10];
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== 0) {
//         newArr.push(arr[i]);
//     }
// }
// console.log("The new array is: " + newArr);

// function negativeNumbersChangeToZero(arr) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < 0) {
//             newArr.push(0);
//         } else {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }

// let arr = [1, -2, -3, 4, 5, 6, -7, 8, -9, 10];
// let newArr = negativeNumbersChangeToZero(arr);
// console.log("The new array is: " + newArr);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let largest = arr[0];
// let secondLargest = arr[0];
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > largest) {
//         secondLargest = largest;
//         largest = arr[i];
//     } else if (arr[i] > secondLargest && arr[i] !== largest) {
//         secondLargest = arr[i];
//     }
// }
// console.log("The largest number in the array is: " + largest);
// console.log("The second largest number in the array is: " + secondLargest);

// let arr = [1, 2, 3, 2];
// let result = false;
// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] === arr[j]) {
//             result = true;
//         }
//     }
// }
// console.log("The array contains duplicate values: " + result);

// let arr = [1, 2, 3, 2, 4, 4, 5];
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//     if (!newArr.includes(arr[i])) {
//         newArr.push(arr[i]);
//     }
// }
// console.log("The new array is: " + newArr);

// function ReverseAnArray(arr) {
//     let newArr = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         newArr.push(arr[i]);
//     }
//     return newArr;
// }

// let arr = [1, 2, 3, 4, 5];
// let newArr = ReverseAnArray(arr);
// console.log("The reversed array is: " + newArr);
//#endregion
//#region HardTasks
// let arr = [3, 5, 3, 2, 5, 1, 4];
// let recurringElement = null;
// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] === arr[j]) {
//             recurringElement = arr[i];
//             break;
//         }
//     }
//     if (recurringElement !== null) {
//         break;
//     }
// }
// console.log("The recurring element in the array is: " + recurringElement);

// let arr = [10, 20, 30, 40, 50, 60];
// let first = [];
// let second = [];
// for (let i = 0; i < arr.length; i++) {
//     if (i < arr.length / 2) {
//         first[first.length] = arr[i];
//     } else {
//         second[second.length] = arr[i];
//     }
// }
// console.log("The first half of the array is: " + first);
// console.log("The second half of the array is: " + second);

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [3, 5, 7, 9, 11];
// let commonElements = [];
// for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//         if (arr1[i] === arr2[j]) {
//             commonElements.push(arr1[i]);
//         }
//     }
// }
// console.log("The common elements in the two arrays are: " + commonElements);

// let arr = [2, 3, 2, 5, 3, 2]
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] === arr[j]) {
//             count++;
//         }
//     }
// }
// console.log(count);

// let students = [
//     { name: "John", age: 20, grade: 85 },
//     { name: "Jane", age: 22, grade: 90 },
//     { name: "Jim", age: 21, grade: 75 },
//     { name: "Jill", age: 23, grade: 95 }
// ];
// let max = students[0];
// for (let i = 1; i < students.length; i++) {
//     if (students[i].grade > max.grade) {
//         max = students[i];
//     }
// }
// console.log("The maximum grade in the array is: " + max.grade + " by " + max.name);

// let products = [
//     { name: "Product 1", price: 150 },
//     { name: "Product 2", price: 20 },
//     { name: "Product 3", price: 15 },
//     { name: "Product 4", price: 125 }
// ];
// let newArr = [];
// for (let i = 0; i < products.length; i++) {
//     if (products[i].price < 100) {
//         newArr.push(products[i]);
//     }
// }
// console.log("The new array is: " + JSON.stringify(newArr));

// let cart = [
//     { name: "Mouse", price: 150, quantity: 2 },
//     { name: "Keyboard", price: 20, quantity: 5 },
//     { name: "Headset", price: 15, quantity: 10 },
//     { name: "Mousepad", price: 125, quantity: 1 }
// ]

// for (let i = 0; i < cart.length; i++) {
//     if (cart[i].price > 100) {
//         console.log("The item " + cart[i].name + " costs more than 100.");
//     }
// }
// let count = 0;
// for (let i = 0; i < cart.length; i++) {
//     count ++;
// }
// console.log("The number of items in the cart is: " + count);
// let sum = 0;
// for (let i = 0; i < cart.length; i++) {
//     sum += cart[i].price * cart[i].quantity;
// }
// console.log("The total cost of the items in the cart is: " + sum);
// let max = cart[0];
// for (let i = 1; i < cart.length; i++) {
//     if (cart[i].price > max.price) {
//         max = cart[i];
//     }
// }
// console.log("The maximum price in the cart is: " + max.price + " for " + max.name);

// let newarr = [];
// for (let i = 0; i < cart.length; i++) {
//     if (cart[i].quantity >= 2) {
//         newarr.push(cart[i]);
//     }
// }
// console.log("The new array is: " + JSON.stringify(newarr));
//#endregion
//#region MediumTasks2
// let n = 28;
// let sum = 0;
// for (let i = 1; i < n; i++) {
//     if (n % i === 0) {
//         sum += i;
//     }
// }
// if (sum === n) {
//     console.log(n + " is a perfect number.");
// } else {
//     console.log(n + " is not a perfect number.");
// }

// let n = 153;
// let original = n;
// let sum = 0;
// while (n > 0) {
//     let digit = n % 10;
//     sum += digit * digit * digit;
//     n = Math.floor(n / 10);
// }
// if (sum === original) {
//     console.log(original + " is an Armstrong number.");
// }
// else {
//     console.log(original + " is not an Armstrong number.");
// }

// function fuctorial(n) {
//     let result = 1;
//     for (let i = 1; i <= n; i++) {
//         result *= i;
//     }
//     return result;
// }
// console.log("The factorial of 5 is: " + fuctorial(5));

// function fibonacci(n) {
//     let arr = [0, 1];
//     for (let i = 2; i < n; i++) {
//         arr[i] = arr[i - 1] + arr[i - 2];
//     }
//     return arr;
// }
// console.log("The first 10 Fibonacci numbers are: " + fibonacci(6));

// let n = 10;
// let m = 20;
// let ebob = 1;
// for (let i = 1; i <= n && i <= m; i++) {
//     if (n % i === 0 && m % i === 0) {
//         ebob = i;
//     }
// }
// console.log("The greatest common divisor of " + n + " and " + m + " is: " + ebob);

// let n = 12;
// let m = 18;
// let ekob = 1;
// for (let i = 1; i <= n * m; i++) {
//     if (i % n === 0 && i % m === 0) {
//         ekob = i;
//         break;
//     }
// }
// console.log("The least common multiple of " + n + " and " + m + " is: " + ekob);

// function binaryToString(n) {
//     let result = "";
//     while (n > 0) {
//         let digit = n % 2;
//         result = digit + result;
//         n = Math.floor(n / 2);
//     }
//     return result;
// }
// console.log("The binary representation of 10 is: " + binaryToString(10));

// let n = 49724;
// let maxNumber = 0;
// while (n > 0) {
//     let digit = n % 10;
//     if (digit > maxNumber) {
//         maxNumber = digit;
//     }
//     n = Math.floor(n / 10);
// }
// console.log("The maximum digit in the number is: " + maxNumber);

// function reverseNumber(n) {
//     let reverse = 0;
//     while (n > 0) {
//         let digit = n % 10;
//         reverse = reverse * 10 + digit;
//         n = Math.floor(n / 10);
//     }
//     return reverse;
// }
// console.log("The reverse of 12345 is: " + reverseNumber(12345));

// let n = 10;
// let m = 20;
// let arr = [];
// for (let i = n; i <= m; i++) {
//     if (i % 2 === 1) {
//         arr.push(i);
//     }
// }
// console.log("The array is: " + JSON.stringify(arr));

// function rotateArray(arr, k) {
//     let n = arr.length;
//     k = k % n;
//     let newArr = [];
//     for (let i = 0; i < n; i++) {
//         newArr[(i + k) % n] = arr[i];
//     }
//     return newArr;
// }
// console.log("The rotated array is: " + JSON.stringify(rotateArray([1, 2, 3, 4, 5], 2)));

// let arr = [1, 2,3, 4, 5, 6, 7, 8, 10];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] != i + 1) {
//         console.log("The missing number in the array is: " + (i + 1));
//         break;
//     }
// }

// function increasingArray(arr) {
//     let newArr = [];
//     let increasing = true;
//     for (let i = 0; i < arr.length; i++) {
//         if (i === 0 || arr[i] > arr[i - 1]) {
//             newArr.push(arr[i]);
//         } else {
//             increasing = false;
//             break;
//         }
//     }
//     return increasing ? newArr : "The array is not increasing.";
// }
// console.log("The increasing array is: " + JSON.stringify(increasingArray([1, 2, 3, 4, 5])));

// let str = "Hello World Aykhan";
// let count = 0;
// for (let i = 0; i < str.length; i++) {
//     if (str[i] === 'o') {
//         count++;
//     }
// }
// console.log("The number of 'o' in the string is: " + count);

//#endregion