def printNumbers(n):
    if n ==0:
        return
    print(n)
    printNumbers(n-1)

# /*The sequence goes: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34*/
# fn = fn-1 + fn-2
def fibonacci(n):
    if(n <= 1):
        return n    
    return fibonacci(n-1) + fibonacci(n-2)

nterms = 10
for i in range(nterms):
    print(fibonacci(i))