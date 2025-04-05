class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def append(self, value):
        new_node = Node(value)
        if not self.head:
            self.head = new_node
            return
        current = self.head
        while current.next:
            current = current.next
        current.next = new_node

    def print_list(self):
        current = self.head
        result = ""
        while current:
            result += str(current.value) + "->"
            current = current.next
        print(result + "null")

list_obj = LinkedList()
list_obj.append(10)
list_obj.append(20)
list_obj.append(30)
list_obj.print_list()