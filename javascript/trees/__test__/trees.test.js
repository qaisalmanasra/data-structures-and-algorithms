'use strict';
const BinarySearchTree = require('../binary-search-tree');
const BinaryTree = require('../binary-tree');
const Node = require('../node');

let tree = null;

describe("Binary Tree", () => {
  beforeAll(() => {
    let one = new Node(1);
    let two = new Node(2);
    let three = new Node(3);
    let four = new Node(4);
    let five = new Node(5);
    let six = new Node(6);
    let seven = new Node(7);
    let eight = new Node(8);
    let nine = new Node(9);

    one.left = two;
    one.right = three;
    two.left = six;
    six.right = seven;
    seven.left = eight;
    seven.right = nine;
    three.left = four;
    three.right = five;

    tree = new BinaryTree(one);
  });
  test('Can successfully instantiate an empty tree', () => {
    const newTree = new BinaryTree();
    expect(newTree.root).toBeNull();
  });
  test('Can successfully instantiate a tree with a single root node', () => {
    const newTree = new BinaryTree();
    expect(newTree.root).toBeNull();
    expect(tree.root.value).toEqual(1);
  });
  test('Can successfully add a left child and right child to a tree', () => {
    const BTS = new BinarySearchTree();
    BTS.Add(9);
    BTS.Add(10);
    BTS.Add(4);

    expect(BTS.root.value).toEqual(9);
    expect(BTS.root.left.value).toEqual(4);
    expect(BTS.root.right.value).toEqual(10);
  });
  test('Can successfully return a collection from a preorder traversal', () => {
    let expectedOutput = [1, 2, 6, 7, 8, 9, 3, 4, 5];
    let preOrder = tree.preOrder();
    expect(preOrder).toEqual(expectedOutput);
  });
  test('Can successfully return a collection from an inorder traversal', () => {
    let expectedOutput = [6, 8, 7, 9, 2, 1, 4, 3, 5];
    let inOrder = tree.inOrder();
    expect(inOrder).toEqual(expectedOutput);
  });
  test('Can successfully return a collection from a postorder traversal', () => {
    let expectedOutput = [8, 9, 7, 6, 2, 4, 5, 3, 1];
    let postOrder = tree.postOrder();
    expect(postOrder).toEqual(expectedOutput);
  });
  test('Can find the maximum value stored in the tree', () => {
    const BTS = new BinarySearchTree();
    BTS.Add(9);
    BTS.Add(2);
    BTS.Add(20);
    expect(BTS.Max()).toEqual(20);
  });
  test('Can traverse a binary tree (breadth first left)', () => {
    const tree = new BinarySearchTree();
    tree.Add(2);
    tree.Add(1);
    expect(tree.breadthFirst(tree)).toEqual([2, 1]);
  });
  test('Can traverse a binary tree (breadth first right)', () => {
    const tree = new BinarySearchTree();
    tree.Add(1);
    tree.Add(2);
    expect(tree.breadthFirst(tree)).toEqual([1, 2]);
  });
});
