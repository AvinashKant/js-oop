class LRUCacheOptimized:
    class Node:
        def __init__(self, key, value):
            self.key = key
            self.value = value
            self.prev = None
            self.next = None

    def __init__(self, capacity: int):
        self.capacity = capacity
        self.cache = {}  # key => node
        self.head = None  # Most recently used node
        self.tail = None  # Least recently used node

    def _remove_node(self, node):
        if node.prev:
            node.prev.next = node.next
        else:
            self.head = node.next

        if node.next:
            node.next.prev = node.prev
        else:
            self.tail = node.prev

    def _move_to_head(self, node):
        node.next = self.head
        node.prev = None
        if self.head:
            self.head.prev = node
        self.head = node
        if not self.tail:
            self.tail = self.head

    def get(self, key: str):
        if key in self.cache:
            node = self.cache[key]
            self._remove_node(node)
            self._move_to_head(node)
            return node.value
        return None

    def put(self, key: str, value):
        if key in self.cache:
            node = self.cache[key]
            node.value = value
            self._remove_node(node)
            self._move_to_head(node)
        else:
            new_node = self.Node(key, value)
            self.cache[key] = new_node
            self._move_to_head(new_node)
            if len(self.cache) > self.capacity:
                lru_node = self.tail
                del self.cache[lru_node.key]
                self._remove_node(lru_node)

    def get_cache_contents(self):
        return {key: node.value for key, node in self.cache.items()}

    def get_access_order(self):
        order = []
        curr = self.head
        while curr:
            order.append(curr.key)
            curr = curr.next
        return order

# Example Usage:
cache = LRUCacheOptimized(3)

cache.put("a", 1)
cache.put("b", 2)
cache.put("c", 3)

print("Cache after initial puts:", cache.get_cache_contents())
print("Access Order:", cache.get_access_order())
print()

print("Get 'a':", cache.get("a"))
print("Cache after get 'a':", cache.get_cache_contents())
print("Access Order:", cache.get_access_order())
print()

cache.put("d", 4)
print("Cache after put 'd':", cache.get_cache_contents())
print("Access Order:", cache.get_access_order())
print()

print("Get 'b':", cache.get("b"))

print("Get 'c':", cache.get("c"))
print("Cache after get 'c':", cache.get_cache_contents())
print("Access Order:", cache.get_access_order())
print()

cache.put("a", 5)
print("Cache after update 'a':", cache.get_cache_contents())
print("Access Order:", cache.get_access_order())
print()