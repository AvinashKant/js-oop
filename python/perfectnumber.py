import math


def is_perfect_number(n):
    """Returns True if n is a perfect number, otherwise False."""
    # Perfect numbers must be greater than 1
    if n <= 1:
        return False

    # 1 is always a proper divisor
    divisor_sum = 1
    square_root = int(math.isqrt(n))

    # Find divisors up to the square root
    for i in range(2, square_root + 1):
        if n % i == 0:
            divisor_sum += i
            # If the divisors are different, add the matching pair
            if i != n // i:
                divisor_sum += n // i

    # Check if the sum of divisors equals the original number
    return divisor_sum == n


# Example usage:
print(is_perfect_number(6))  # True  (1 + 2 + 3 = 6)
print(is_perfect_number(28))  # True  (1 + 2 + 4 + 7 + 14 = 28)
print(is_perfect_number(12))  # False (1 + 2 + 3 + 4 + 6 = 16)