/* eslint-env jasmine */
/* global LinkedList, Node */

// ## Docco

// Hello! My name is Docco! I have all of the same content your `linked-list.spec.js`, but I look much nicer! You can view all of the specs and documentation here, but you won't see the results of running the specs - I'm just for reading!

// To see where your code is _actually_ running, be sure to go to [`http://localhost:7357/`](http://localhost:7357/)!

// ## Linked Lists

// A **Linked List** is a data structure, meaning a concrete programmatic way of managing information in memory. They can be used to implement a number of ADTs, including Queues, Stacks, Lists, and others.

// Linked Lists are collections of *nodes* — wrapper structures which encapsulate a `value` and one or more *pointers* (references) to other nodes. The Linked List instance typically only has a reference to a so-called *handle* node, e.g. the `head` (first node) — it has no direct knowledge of other nodes in the list. However, the handle then points to a `next` node, which itself points to another `next` node, and so on and so forth. A list ends when a node's `next` pointer is `null` or `undefined`. The act of starting from a handle and visiting nodes in sequence is known as "traversing" a linked list.

// Below is a description of a singly-linked list with a `head` handle and three nodes total:

// ```
// Head reference -> Node A
// Node A has value 56 and pointer next -> Node B
// Node B has value 33 and pointer next -> Node C
// Node C has value 12 and pointer next -> null
// ```

// ```
// HEAD  ────┐                                 ┌──── TAIL
//           │                                 │
//           │                                 │
//           ▼                                 ▼
//      ┌────┬────┐      ┌────┬────┐      ┌────┬────┐
//      │    │    │      │    │    │      │    │    │
//      │ 56 │  ──┼────> │ 33 │  ──┼────> │ 12 │  ──┼───> NULL
//      │    │    │      │    │    │      │    │    │
//      └────┴────┘      └────┴────┘      └────┴────┘
// ```

// Linked Lists can come in various flavors. For example, in doubly-linked lists, each node might point both to the `next` node and to the `previous` node as well. In some variations, the parent Linked List instance might maintain both `head` *and* `tail` references. For this workshop, follow the (opinionated) spec to implement a doubly-linked list with both handles.

// *Side note: in JavaScript, an object is maintained in memory so long as there exist references to it. Once an object has no references pointing to it, automatic garbage collection will eventually free that memory so that the program can use it for other variables (it does not matter if the object itself has references to other variables). So the only real way to "delete" an object in JS to remove all references to it.*

describe('A linked list', () => {
  let linkedList

  beforeEach(() => {
    linkedList = new LinkedList()
  })

  it('has methods `addToTail`, `addToHead`, `removeHead`, `removeTail`, and `search`', () => {
    expect(typeof linkedList.addToTail).toBe('function')
    expect(typeof linkedList.addToHead).toBe('function')
    expect(typeof linkedList.removeHead).toBe('function')
    expect(typeof linkedList.removeTail).toBe('function')
    expect(typeof linkedList.search).toBe('function')
  })

  it('starts with head and tail falsy', () => {
    expect(linkedList.head).toBeFalsy()
    expect(linkedList.tail).toBeFalsy()
    expect(linkedList.removeHead()).toBeFalsy()
  })

  it('has a Node class defined to represent a node', () => {
    // `isNative` is a helper function used by this spec.
    // There is already an object called `Node` in the browser (unrelated to the "Node"s in our Linked List),
    // so this function makes sure that we're using YOUR Node.
    function isNative (fn) {
      return (/\{\s*\[native code]\s*\}/).test('' + fn)
    }
    expect(typeof Node).toBe('function')
    expect(isNative(Node)).toBe(false)
  })

  it('Node class should take a value argument and define next and previous to be null by default', () => {
    const node = new Node('test')
    expect(node.value).toBe('test')
    expect(node.next).toBe(null)
    expect(node.previous).toBe(null)
  })

  it('linkedlist should use Node class to add nodes', () => {
    linkedList.addToTail('first')
    expect(linkedList.tail instanceof Node).toBe(true)
  })

  it('if a single node is added to head, it should be set to head and tail', () => {
    linkedList.addToHead('first')
    expect(linkedList.head.value).toBe('first')
    expect(linkedList.head.next).toBeFalsy()
    expect(linkedList.head.previous).toBeFalsy()
    expect(linkedList.head).toBe(linkedList.tail)
  })

  it('should return the head on a removeHead', () => {
    linkedList.addToTail('first')
    linkedList.addToTail('second')
    linkedList.addToTail('third')
    expect(linkedList.removeHead()).toBe('first')
    expect(linkedList.removeHead()).toBe('second')
    expect(linkedList.removeHead()).toBe('third')
  })

  it('should make sure the previous of any newly appointed HEAD is null', () => {
    linkedList.addToTail('first')
    linkedList.addToTail('second')
    linkedList.addToTail('third')
    expect(linkedList.removeHead()).toBe('first')
    expect(linkedList.head.previous).toBe(null)
  })

  it('should make sure the next of any newly appointed TAIL is null', () => {
    linkedList.addToTail('first')
    linkedList.addToTail('second')
    linkedList.addToTail('third')
    expect(linkedList.removeTail()).toBe('third')
    expect(linkedList.tail.next).toBe(null)
  })

  it('should be able to add to head or tail', () => {
    linkedList.addToTail('second')
    linkedList.addToHead('first')
    linkedList.addToTail('third')
    expect(linkedList.removeHead()).toBe('first')
    expect(linkedList.removeHead()).toBe('second')
    expect(linkedList.removeHead()).toBe('third')
  })

  it('should return the tail on a removeTail', () => {
    linkedList.addToTail('second')
    linkedList.addToHead('third')
    linkedList.addToTail('first')
    expect(linkedList.removeTail()).toBe('first')
    expect(linkedList.removeTail()).toBe('second')
    expect(linkedList.removeTail()).toBe('third')
  })

  it('should remove head and tail when last node is removed', () => {
    expect(linkedList.removeHead()).toBeFalsy()
    linkedList.addToTail('one')
    expect(linkedList.removeHead()).toBe('one')
    expect(linkedList.removeHead()).toBeFalsy()
    expect(linkedList.head).toBeFalsy()
    expect(linkedList.tail).toBeFalsy()
  })

  it('should return the correct values for search', () => {
    linkedList.addToTail('one')
    linkedList.addToTail('two')
    linkedList.addToTail('three')
    linkedList.addToTail('four')
    linkedList.addToTail('one')
    expect(linkedList.search('two')).toBe('two')
    expect(linkedList.search('sdd')).toBe(null)
    expect(linkedList.search('one')).toBe('one')
    expect(linkedList.search('four')).toBe('four')
  })

  it('should be able to take strings and functions both as search inputs', () => {
    linkedList.addToTail('one')
    linkedList.addToTail('two')
    const foundNode = linkedList.search((nodeValue) => {
      return nodeValue === 'two'
    })
    expect(foundNode).toBe('two')
  })

  // This spec demonstrates the utility of the previous spec.
  // If you are passing the last one correctly, this one should already pass!
  it('should therefore be able to store and search for objects, not just strings', () => {
    function UserNode (name, email, city) {
      this.name = name
      this.email = email
      this.city = city
    }

    linkedList.addToHead(new UserNode('Nimit', 'nimit@fs.com', 'New York'))
    linkedList.addToHead(new UserNode('David', 'david@fs.com', 'New York'))
    linkedList.addToHead(new UserNode('Paul', 'paul@yc.com', 'Mountain View'))

    const foundNode1 = linkedList.search((userNode) => {
      return userNode.name === 'Nimit'
    })
    expect(foundNode1.email).toBe('nimit@fs.com')

    const foundNode2 = linkedList.search((userNode) => {
      return userNode.email === 'david@fs.com'
    })
    expect(foundNode2.city).toBe('New York')

    const foundNode3 = linkedList.search((userNode) => {
      return userNode.city === 'Mountain View'
    })
    expect(foundNode3.name).toBe('Paul')
  })
})
