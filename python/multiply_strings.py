def multiply_strings(num1: str, num2: str) -> str:
    if num1 == "0" or num2 == "0":
        return "0"

    n1 = len(num1)
    n2 = len(num2)
    result = [0] * (n1 + n2)

    # Iterate through each digit of num1 from right to left
    for i in range(n1 - 1, -1, -1):
        digit1 = int(num1[i])
        carry = 0

        # Iterate through each digit of num2 from right to left
        for j in range(n2 - 1, -1, -1):
            digit2 = int(num2[j])

            # Multiply the current digits and add the carry and existing value in result
            product = (digit1 * digit2) + result[i + j + 1] + carry

            # Update the result with the units digit and carry
            result[i + j + 1] = product % 10
            carry = product // 10

        # Add the final carry to the result
        result[i] += carry

    # Convert the result list to a string, removing leading zeros
    output = "".join(map(str, result))
    first_digit_index = 0
    while first_digit_index < len(output) - 1 and output[first_digit_index] == '0':
        first_digit_index += 1

    return output[first_digit_index:]

# Example Usage:
num1_example1 = "2"
num2_example1 = "3"
print(f'Product of "{num1_example1}" and "{num2_example1}": {multiply_strings(num1_example1, num2_example1)}')

num1_example2 = "123"
num2_example2 = "456"
print(f'Product of "{num1_example2}" and "{num2_example2}": {multiply_strings(num1_example2, num2_example2)}')

num1_example3 = "99"
num2_example3 = "99"
print(f'Product of "{num1_example3}" and "{num2_example3}": {multiply_strings(num1_example3, num2_example3)}')