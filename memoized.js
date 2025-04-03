const customMemoized = () => {
  const cache = {};
  return num => {
    if (num in cache) {
      return `From cache! ${cache[num]}`;
    } else {
      const result = num + 10;
      cache[num] = result;
      return `Calculated! ${result}`;
    }
  };
};

const memoized = customMemoized();
console.log(memoized(10));
console.log(memoized(10));
console.log(memoized(5 * 2));