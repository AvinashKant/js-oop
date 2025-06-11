/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
    const mergedMap = new Map();
    for (const obj of arr1) {
        mergedMap.set(obj.id, { ...obj });
    }
    for (const obj2 of arr2) {
        const id = obj2.id;
        if (mergedMap.has(id)) {
            const obj1 = mergedMap.get(id);
            mergedMap.set(id, { ...obj1, ...obj2 });
        } else {
            mergedMap.set(id, { ...obj2 });
        }
    }
    const joinedArray = Array.from(mergedMap.values());
    joinedArray.sort((a, b) => a.id - b.id);
    return joinedArray;
};