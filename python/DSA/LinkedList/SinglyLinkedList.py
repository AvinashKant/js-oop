class Node:
    def __init__(self, info, next=None):
        self.data = info
        self.next = next


class SinglyLinkedList:
    def __init__(self, head=None):
        self.head = head

    def insertAtEnd(self, data):
        temp = Node(data)
        if(self.head != None):
            t1 = self.head
            while(t1.next != None):
                t1 = t1.next
            t1.next= temp
        else:
            self.head = temp
    
    def printSl(self):
        if self.head is None:
            print("Linked List is empty")
            return

        t1 = self.head
        while t1 is not None:
            print(t1.data)
            t1 = t1.next

    def insertAtFirst(self,data):
        temp = Node(data)
        temp.next = self.head
        self.head = temp

    def insertAtMidle(self,data, position):
        temp = Node(data)
        t1 = self.head

        while (t1.next != None):
            if(t1.data == position):
                temp.next = t1.next
                t1.next = temp
            t1 = t1.next

    def delete(self, position):
        t1 = self.head
        prev = t1
        if(t1.data == position):
            self.head = t1.next
        while (t1.next != None):
            if(t1.data == position):
                prev.next = t1.next
                break
            else:
                prev = t1
                t1 = t1.next
        if(t1.data == position):
            prev.next = None

                

objS = SinglyLinkedList()
objS.insertAtEnd(10)
objS.insertAtEnd(20)
objS.insertAtEnd(30)
objS.insertAtFirst(5)
objS.insertAtMidle(40,20)
objS.delete(30)
objS.printSl()
