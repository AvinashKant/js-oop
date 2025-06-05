/**
 * Example 1:

Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
Example 2:

Input: numRows = 1
Output: [[1]]
 */

var generate = function (numRows) {
    const triangle = [];
    for (let i = 0; i < numRows; i++) {
        const row = new Array(i + 1).fill(1);

        // Fill the middle elements
        for (let j = 1; j < i; j++) {
            row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        }

        triangle.push(row);
    }
    return triangle;

};

console.log(generate(5));
//console.log(generate(1));