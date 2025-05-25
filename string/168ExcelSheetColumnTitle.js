var convertToTitle = function (columnNumber) {
    let result = '';

    while (columnNumber > 0) {
        columnNumber--; // Adjust because Excel columns are 1-indexed
        const charCode = (columnNumber % 26) + 65; // 65 is 'A'.charCodeAt(0)
        result = String.fromCharCode(charCode) + result;
        columnNumber = Math.floor(columnNumber / 26);
    }

    return result;
};

console.log(convertToTitle(1));   // Output: "A"
console.log(convertToTitle(26));  // Output: "Z"
console.log(convertToTitle(27));  // Output: "AA"
console.log(convertToTitle(28));  // Output: "AB"
console.log(convertToTitle(701));