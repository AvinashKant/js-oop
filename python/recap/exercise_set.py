"""
Create a set branch_a_products with the items: "bread", "milk", "butter", "jam"

Create another set branch_b_products with the items: "bread", "cheese", "butter", "ketchup"

Print both sets.

Find and print the union of both branches’ products.

Find and print the intersection of both branches’ products.

Find and print the products that are in branch_a_products but not in branch_b_products.

Check whether "ketchup" is available in branch_a_products and print the result.

Define a frozenset called essential_items with values: "milk", "bread", "ketchup".

Print the frozenset.
"""
# Create sets for branch A and branch B
branch_a_products = {"bread", "milk", "butter", "jam"}
branch_b_products = {"bread", "cheese", "butter", "ketchup"}

# Print both sets
print(branch_a_products)
print(branch_b_products)

# Union of both branches’ products
union_products = branch_a_products.union(branch_b_products)
print(union_products)

# Intersection of both branches’ products
intersection_products = branch_a_products.intersection(branch_b_products)
print(intersection_products)

# Products in branch A but not in branch B
difference_products = branch_a_products.difference(branch_b_products)
print(difference_products)

# Check if "ketchup" is available in branch A
is_ketchup_available = "ketchup" in branch_a_products
print(is_ketchup_available)

# Create a frozenset of essential items
essential_items = frozenset({"milk", "bread", "ketchup"})

# Print the frozenset
print(essential_items)

# Sets for branch-wise products
branch_a_products = {"bread", "milk", "butter", "jam"}
branch_b_products = {"bread", "cheese", "butter", "ketchup"}
 
# Print initial sets
print(branch_a_products)
print(branch_b_products)
 
# Union of both branches
print(branch_a_products | branch_b_products)
 
# Intersection of both branches
print(branch_a_products & branch_b_products)
 
# Products only in branch A
print(branch_a_products - branch_b_products)
 
# Check if 'ketchup' is in branch A
print("ketchup" in branch_a_products)
 
# Define unmodifiable essential items
essential_items = frozenset(["milk", "bread", "ketchup"])
print(essential_items)


