def digit_difference(number):
    """Returns the difference between the largest and smallest numbers

    that can be formed by the digits of the input number.
    """
    # Convert to string to easily manipulate the digits
    digit_str = str(number)

    # Sort digits in descending order for the largest number
    largest_str = "".join(sorted(digit_str, reverse=True))

    # Sort digits in ascending order for the smallest number
    smallest_str = "".join(sorted(digit_str))

    # Convert back to integers and calculate the difference
    return int(largest_str) - int(smallest_str)


# Example usage:
result = digit_difference(213)
print(f"Result for 213: {result}")  # Output: 198 (321 - 123)

result_two = digit_difference(8045)
print(f"Result for 8045: {result_two}")  # Output: 8100 (8540 - 0458)