class Expect:
    def __init__(self, value):
        self.value = value

    def toBe(self, param):
        if self.value == param:
            return True
        else:
            raise ValueError("Not Equal")

    def notToBe(self, param):
        if self.value != param:
            return True
        else:
            raise ValueError("Equal")

def expect(value):
    return Expect(value)

# Example Usage:
try:
    print(expect(5).toBe(5))  # Output: True
    print(expect(5).toBe(6))  # Raises ValueError: Not Equal
except ValueError as e:
    print(e)  # Output: Not Equal

try:
    print(expect(5).notToBe(6)) # Output: True
    print(expect(5).notToBe(5)) # Raises ValueError: Equal
except ValueError as e:
    print(e) # Output: Equal