# Step 1: Create a customer profile dictionary
customer = {
    "name": "John Doe",
    "age": 32,
    "city": "New York"
}
print(customer)
 
# Step 2: Add email and phone number to the dictionary
customer["email"] = "john.doe@example.com"
customer["phone"] = "123-456-7890"
print(customer)
 
# Step 3: Access and print the customer's name and city
print(customer["name"])
print(customer["city"])
 
# Step 4: Check if "email" exists in the dictionary
print("email" in customer)
 
# Step 5: Delete the "age" field
del customer["age"]
print(customer)
 
# Step 6: Print all keys, values, and items
print(customer.keys())
print(customer.values())
print(customer.items())
 
# Step 7: Remove the last inserted item and print it
print(customer.popitem())
 
# Step 8: Use .get to safely access a non-existent field "membership"
print(customer.get("membership"))
 
# Step 9: Update the dictionary with a new address field
customer.update({"address": "221B Baker Street"})
print(customer)