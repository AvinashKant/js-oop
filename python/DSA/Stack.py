class Stack:

    def __init__(self):
        self.list = []

    def push(self, value):
        self.list.append(value)

    def pop(self):
        if len(self.list) == 0:
            print("Stack Underflow")
            return None
        return self.list.pop()

    def peek(self):
        if len(self.list) == 0:
            return None
        return self.list[-1]

    def isEmpty(self):
        return len(self.list) == 0

    def size(self):
        return len(self.list)

    def display(self):
        print(self.list)


objStack = Stack()

objStack.push(10)
objStack.push(20)
objStack.push(30)

print("Top:", objStack.peek())

print("Popped:", objStack.pop())

objStack.display()

print("Size:", objStack.size())

print("Is Empty:", objStack.isEmpty())