<?php

/**
 * Represents a single node in the linked list.
 */
class Node
{
    // Public properties for easy access, similar to Python's structure
    public $value;
    public $next;

    public function __construct($value)
    {
        $this->value = $value;
        // In PHP, properties are automatically initialized to null if not specified, 
        // but explicitly setting it is good practice.
        $this->next = null;
    }
}

/**
 * Represents the linked list structure.
 */
class LinkedList
{
    public $head;

    public function __construct()
    {
        // The head pointer starts as null (empty list)
        $this->head = null;
    }

    /**
     * Adds a new node to the end of the list.
     * @param mixed $value The data to store in the new node.
     */
    public function append($value)
    {
        $newNode = new Node($value);

        // Case 1: The list is empty
        if ($this->head === null) {
            $this->head = $newNode;
            return;
        }

        // Case 2: Traverse to the last node
        $current = $this->head;
        while ($current->next !== null) {
            $current = $current->next;
        }

        // Link the last node to the new node
        $current->next = $newNode;
    }

    /**
     * Prints all the values in the list.
     */
    public function print_list()
    {
        $current = $this->head;
        $result = "";

        while ($current !== null) {
            $result .= $current->value . "->";
            $current = $current->next;
        }

        // Output the result followed by "null"
        echo $result . "null" . "\n";
    }
}

// --- Program Execution ---

// Create an instance of the LinkedList
$listObj = new LinkedList();

// Append values
$listObj->append(10);
$listObj->append(20);
$listObj->append(30);

// Print the list
$listObj->print_list();
