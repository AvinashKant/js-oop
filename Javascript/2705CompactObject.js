/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function (obj) {
    if (Array.isArray(obj)) {
        return obj
            .map(compactObject)           // Recursively clean each item
            .filter(Boolean);             // Remove falsy values
    } else if (obj !== null && typeof obj === 'object') {
        const result = {};
        for (const key in obj) {
            const value = compactObject(obj[key]); // Recursively clean nested values
            if (Boolean(value)) {
                result[key] = value;
            }
        }
        return result;
    } else {
        return obj; // Primitive values
    }
};