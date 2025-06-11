/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    const result = [];
    function flattenRecursive(currentArray, currentDepth) {
        for (const item of currentArray) {
            if (Array.isArray(item) && currentDepth < n) {
                flattenRecursive(item, currentDepth + 1);
            } else {
                result.push(item);
            }
        }
    }
    flattenRecursive(arr, 0);
    return result;
};