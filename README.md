[![Build Status](https://travis-ci.com/kozlowskicd/data-structures-and-algorithms.svg?branch=master)](https://travis-ci.com/kozlowskicd/data-structures-and-algorithms)
# Data Structures and Algorithms Exercises
This is a collection of exercises and code challenges focusing on data structures and algorithms.

<!-- ## Contents

Arrays
Linked Lists
Stacks and Queues
Binary Trees -->

## Arrays

### Reverse Array
Given an input array, build a function to return the array with all elements in reverse order.  No built-in language methods may be used.
#### Whiteboard
<img src='/assets/array_reverse.jpg' width=640 height=480 />

### Array Binary Search
Make a function that takes in a sorted array and a value.  Perform a binary search to find the value in the array and return the index position.  Return -1 if the value is not in the array.  No pre-built methods may be used.
#### Whiteboard
<img src='.assests/array_binary_search.jpg' width=640 height=480 />

### Array Shift
Make a function that takes in an array and a number, and inserts the number into the middle of the array.
#### Whiteboard
<img src='.assests/insertArray.jpg' width=640 height=480 />

## Linked Lists

### Create a Linked List
Create a Linked List that incorporates nodes that hold a value and a pointer to their next node. 
#### Methods
##### append(value)
Takes in a value, creates a node and adds it to the end of the list.
##### prepend(value)
Takes in a value, creates a node and add it to the front of the list, replacing the head.
##### reverse()
Reverses the location of all nodes on the list.  The head is now at the very end, etc.
##### remove(offset)
Moves forward through the list `offset` times, and removes that item from the list.
##### serialize()
Creates an array with each node taking a position in the array.

### Linked List Insertions
Create two methods, `insertBefore` and `insertAfter`.  Both take in a number and a value.  The list will move forward through the list that given number of times, where a new Node is created and added before or after that point in the list.
### Add getKthFromEnd() Method
Create a method that takes in a number, searches from the end that far and return from that position.
### Linked List Merge
Given two lists, create a function that creates a new list using their alternating values.

## Stacks and Queues

### Create a Stack and a Queue
Create a Stack that serves data on a first-in-last-out basis, and a Queue that serves data on a first-in-first-out basis.
#### Stack Methods
##### push(value)
Creates a new node with the given value and adds it to the top of the stack.
##### pop()
Removes the top node from the stack and returns it.
##### peek()
Returns the the top node in the stack but doesnt remove it.
#### Queue Methods
##### enqueue(value)
Creates a new node with the given value and addis it to the back of the queue.
##### dequeue()
Returns the node at the front of the queue.
##### peek()
Show the next node to come out of the queue, but doesn't remove it.

### Queue With Stacks
Create a pseudoqueue, which functions just like a queue, but uses two stacks and no actual queue.
#### Pseudoqueue Methods
##### enqueue(value)
Creates a new node with the given value and adds it to stack1.
##### dequeue()
Iterate through, popping a node off stack1 and pushing it onto stack2, then pop one off stack 2 and hold the value in an output variable.  Iterate again, popping off stack2, pushing onto stack1, finally return the output variable.
##### peek()
Returns the next item to come off the qseudoqueue, but doesn't remove it.
#### Whiteboard
<img src='/assets/queuesWithStacks.jpg' width=640 height=480 />
