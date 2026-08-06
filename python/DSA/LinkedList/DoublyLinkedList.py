class Node:
    def __init__(self, info, next=None,prev=None):
        self.data = info
        self.next = next
        self.prev = prev

class DoublyLinkedList:
    def __init__(self, head=None):
        self.head = head

    def insertAtEnd(self, data):
        temp = Node(data)

        if self.head == None:
            self.head = temp
            return

        t1 = self.head
        while(t1.next != None):
            t1 = t1.next

        t1.next = temp
        temp.prev = t1

    def printSl(self):
        if self.head is None:
            print("Linked List is empty")
            return
        t1 = self.head
        while t1 is not None:
            print(t1.data)
            t1 = t1.next


objS = DoublyLinkedList()
objS.insertAtEnd(10)
objS.insertAtEnd(20)
objS.insertAtEnd(30)
objS.printSl()

