# Create a grocery list
my_cart = ["apples", "bananas", "milk"]

# Print the grocery list
print(my_cart)

# Add "bread" to the end of the list
my_cart.append("bread")
print(my_cart)

# Insert "ketchup" at the beginning of the list
my_cart.insert(0, "ketchup")
print(my_cart)

# Remove "bananas" from the list
my_cart.remove("bananas")
print(my_cart)

# Remove the last item and store it in removed_item
removed_item = my_cart.pop()
print(removed_item)

# Extend the grocery list with "rice" and "butter"
my_cart.extend(["rice", "butter"])
print(my_cart)

# Sort the grocery list alphabetically
my_cart.sort()
print(my_cart)

# Reverse the grocery list
my_cart.reverse()
print(my_cart)

# Concatenate with another list
new_list = my_cart + ["juice", "jam"]
print(new_list)

# Duplicate the grocery list twice
duplicated_list = my_cart * 2
print(duplicated_list)

# Convert string to list
vegetables = "tomato cucumber spinach"
veg_list = vegetables.split()
print(veg_list)


def factorial_recursive(n):
    if n == 0:
        return 1
    return n * factorial_recursive(n - 1)

total = factorial_recursive(5)

mylist = [2,3,4,5,6]
mylistEven = list(filter(lambda even: even%2==0,mylist)) 