let arr = [2, 7, 11, 15, 3, 6, 9, 15, 7, 2, 3, 6, 9]

let unique = 0;
for(let i = 0; i < arr.length; i++) {
    unique ^= arr[i]
    
}
console.log(arr) // [2, 7, 11, 15, 3, 6, 9]