<?php
class LRUCache {
    
    private int $capacity;
    private array $cache; // key => node
    private ?object $head; // Most recently used node
    private ?object $tail; // Least recently used node

    public function __construct(int $capacity) {
        $this->capacity = $capacity;
        $this->cache = [];
        $this->head = null;
        $this->tail = null;
    }

    private function _removeNode(object $node): void {
        if ($node->prev) $node->prev->next = $node->next;
        else $this->head = $node->next;

        if ($node->next) $node->next->prev = $node->prev;
        else $this->tail = $node->prev;
    }

    private function _moveToHead(object $node): void {
        $node->next = $this->head;
        $node->prev = null;
        if ($this->head) $this->head->prev = $node;
        $this->head = $node;
        if (!$this->tail) $this->tail = $this->head;
    }

    public function get(string $key)
    {
        if (isset($this->cache[$key])) {
            $node = $this->cache[$key];
            $this->_removeNode($node);
            $this->_moveToHead($node);
            return $node->value;
        }
        return -1;
    }

    public function put(string $key, $value)
    {
        if (isset($this->cache[$key])) {
            $node = $this->cache[$key];
            $node->value = $value;
            $this->_removeNode($node);
            $this->_moveToHead($node);
        } else {
            $newNode = (object)['key' => $key, 'value' => $value, 'prev' => null, 'next' => null];
            $this->cache[$key] = $newNode;
            $this->_moveToHead($newNode);
            if (count($this->cache) > $this->capacity) {
                $lruNode = $this->tail;
                unset($this->cache[$lruNode->key]);
                $this->_removeNode($lruNode);
            }
        }
    }
}


$obj   = new LRUCache(3);

$obj->put(1, "Avinash");
$obj->put(2, "Avinash 2");
$obj->put(3, "Avinash 3");
$obj->get("1");
$obj->put(4, "Avinash 4");
$ret_1 = $obj->get("1");
echo $ret_1;
