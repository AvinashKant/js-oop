def custom_memoized():
  cache = {}

  def inner(num):
    if num in cache:
      return f"From cache! {cache[num]}"
    else:
      result = num + 10
      cache[num] = result
      return f"Calculated! {result}"

  return inner

memoized = custom_memoized()
print(memoized(10))
print(memoized(10))
print(memoized(5 * 2))