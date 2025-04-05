def createCounter(init):
    number = init

    def increment():
        nonlocal number
        number += 1
        return number

    def reset():
        nonlocal number
        number = init
        return number

    def decrement():
        nonlocal number
        number -= 1
        return number

    return {
        "increment": increment,
        "reset": reset,
        "decrement": decrement
    }

counter = createCounter(5)
print(counter["increment"]())
print(counter["reset"]())
print(counter["decrement"]())