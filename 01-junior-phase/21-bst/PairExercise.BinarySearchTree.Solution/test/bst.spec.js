/* eslint-env jasmine */
/* global BinarySearchTree */

// ## Binary Search Trees
// Trees are powerful data structures which solve myriad computer science problems. A *Binary Tree* is one for which every node has up to two children, a `left` and/or `right` child (or `lesser`/`greater` if you prefer). It is a *Search* tree if all nodes respect an *order*: all values less than a given node value are in its left subtree, and all values greater or equal to a given node value are stored in its right subtree. Trees are very recursive structures; for a given root node, the left child node is the root of a subtree and the right child node is the root of a subtree.

// ## Searching
// The excellent quality of BSTs is how quickly they can insert or find a particular value. For example, to get the minimum value in a BST, you have only to keep taking the left path downwards. For every node you jump, you are on average throwing away half of the remaining nodes in your search! This means that for a (balanced) tree of *n* nodes, you will find the minimum in an average of log2(n) moves. Log2(n) grows very very slowly with respect to n:

// ---
//
// Number of nodes *n* in the tree | log2(n) (average number of moves to find minimum node)
// --   |--
// 1    | 0
// 8    | 3
// 64   | 6
// 512  | 9
// 4096 | 12
//
// ---

// For a tree of over 4000 nodes, we will find the minimum node in about 12 jumps. That's way better than an unsorted array or linked list, for which we'd have to check all 4096 values to find out which is the minimum. Unfortunately, this is the ideal case, and depends on the subtrees all having roughly equal numbers of left and right descendants ("balanced") — in the worst case, a "degenerate" tree is just a linked list.

describe('BinarySearchTree', () => {
  let tree
  let testArr
  const valuesToInsert = [15, 25, 5, 17, 21, 28, 0, 14, 50, 1, 45, 13, 12, 11, 30, 35, 33, 31, 34]

  beforeEach(() => {
    tree = new BinarySearchTree(20)
    testArr = []
  })

  it('has methods named `insert`, `contains`, `depthFirstForEach`, and others', () => {
    expect(typeof tree.insert).toBe('function')
    expect(typeof tree.contains).toBe('function')
    expect(typeof tree.depthFirstForEach).toBe('function')
    expect(typeof tree.breadthFirstForEach).toBe('function')
    expect(typeof tree.size).toBe('function')
  })

  it('takes values and report size correctly', () => {
    tree.insert(12)
    expect(tree.size()).toBe(2)
  })

  it('makes nodes on the correct branches', () => {
    tree.insert(12)
    tree.insert(22)
    expect(tree.left.value).toBe(12)
    expect(tree.right.value).toBe(22)
  })

  it('sorts values when adding', () => {
    expect(tree.value).toBe(20)
    tree.insert(15)
    expect(tree.left.value).toBe(15)
    tree.insert(25)
    expect(tree.right.value).toBe(25)
    tree.insert(5)
    expect(tree.left.left.value).toBe(5)
    tree.insert(17)
    tree.insert(21)
    tree.insert(28)
    tree.insert(0)
    tree.insert(14)
    tree.insert(50)
    tree.insert(1)
    tree.insert(45)
    tree.insert(13)
    tree.insert(12)
    tree.insert(11)
    expect(tree.left.left.right.left.left.left.value).toBe(11)
    tree.insert(30)
    tree.insert(35)
    tree.insert(33)
    tree.insert(31)
    tree.insert(34)
    expect(tree.right.right.right.left.left.right.left.right.value).toBe(34)
  })

  it('returns true if `contains` is passed a value in the tree', () => {
    valuesToInsert.forEach((value) => {
      tree.insert(value)
    })
    valuesToInsert.forEach((value) => {
      expect(tree.contains(value)).toBe(true)
    })
  })

  it('returns false if `contains` is passed a value not in the tree', () => {
    valuesToInsert.forEach((value) => {
      tree.insert(value)
    })

    const valuesNotInserted = [6, 23, 37, 51]
    valuesNotInserted.forEach((value) => {
      expect(tree.contains(value)).toBe(false)
    })
  })

  // ## Tree Traversal

  // A classic problem for trees is how to *traverse* them — i.e., visit and process every node. There are four flavors of tree traversal:

  // - **Breadth-first**: start at level 0, then go through all nodes at level 1, then all nodes at level 2, etc. This is meaningful when tree level actually has some meaning; for example, a hierarchical org chart. It is less useful for a BST, where levels don't usually have intrinsic meaning.
  // - **Depth-first**: go down paths to certain stopping points before moving on to the next branch. There are three types:
  //     - **pre-order**: process the current node value, then go down the left branch, then the right branch. This processes parents before leaves, so can be used to copy a tree.
  //     - **in-order**: process all the left children (lesser values), then this node's value, then the right children (greater values). This is the most useful for a BST as it respects the intrinsic ordering of the tree; values are processed from smallest to greatest.
  //     - **post-order**: process all the left children, then right children, then this node's value. This processes leaves before parents, so can be used in languages with explicit memory management to delete nodes in a safe way.

  // ### Depth-First Search: "In-Order" traversal
  // The one obvious advantage of "in-order" traversal is that values are processed respecting their comparative order
  it('runs depth-first (in "in-order" traversal) when depthFirstForEach() is run with no option or "in-order" option', () => {
    valuesToInsert.forEach((value) => {
      tree.insert(value)
    })
    // Note: no argument is passed in for the second parameter. This means that "in-order" should be our default.
    tree.depthFirstForEach((val) => {
      testArr.push(val)
    })
    expect(testArr).toEqual([ 0, 1, 5, 11, 12, 13, 14, 15, 17, 20, 21, 25, 28, 30, 31, 33, 34, 35, 45, 50 ])
    testArr = []
    tree.depthFirstForEach((val) => {
      testArr.push(val)
    }, 'in-order')
    expect(testArr).toEqual([ 0, 1, 5, 11, 12, 13, 14, 15, 17, 20, 21, 25, 28, 30, 31, 33, 34, 35, 45, 50 ])
  })

  // ### Depth-First Search: "Pre-Order" traversal
  // One use case for this kind of traversal would be copying a tree (processes roots first).
  it('runs depth-first (in "pre-order" traversal) when depthFirstForEach() is run with "pre-order" option', () => {
    valuesToInsert.forEach((value) => {
      tree.insert(value)
    })
    tree.depthFirstForEach((val) => {
      testArr.push(val)
    }, 'pre-order')
    expect(testArr).toEqual([20, 15, 5, 0, 1, 14, 13, 12, 11, 17, 25, 21, 28, 50, 45, 30, 35, 33, 31, 34])
  })

  // ### Depth-First Search: "Post-Order" traversal
  // One use case would be deleting a tree. Because this kind of traversal processes the leaves first, it would allow us to delete or free the memory used by the leaves before deleting the parent. If we deleted the parent first, we would be unable to "get to" the leaves and delete them! This is called a "memory leak".
  it('runs depth-first (in "post-order" traversal) when depthFirstForEach() is run with "post-order" option', () => {
    valuesToInsert.forEach((value) => {
      tree.insert(value)
    })
    tree.depthFirstForEach((val) => {
      testArr.push(val)
    }, 'post-order')
    expect(testArr).toEqual([1, 0, 11, 12, 13, 14, 5, 17, 15, 21, 31, 34, 33, 35, 30, 45, 50, 28, 25, 20])
  })

  // ### Breadth-First Search
  // BFS is helpful when tree levels have meaning (Ex. an organization chart, family tree, or even the DOM tree)
  it('runs breadth-first when breadthFirstForEach() is run', () => {
    valuesToInsert.forEach((value) => {
      tree.insert(value)
    })
    const depth = []
    tree.breadthFirstForEach((val) => {
      depth.push(val)
    })
    expect(depth).toEqual([20, 15, 25, 5, 17, 21, 28, 0, 14, 50, 1, 13, 45, 12, 30, 11, 35, 33, 31, 34])
  })
})
