'use strict';
const LinkedList = require('../lib/linkedList');
describe("linked list tests", ()=> {
  test ("Successfully instantiate an empty linked list",() =>{
    let emptyList = new LinkedList();
    expect(emptyList.head).toBeNull;
  });
  test ("Insert into the linked list",()=>{
    let list = new LinkedList();
    list.Insert('qais');
    expect(list.head.value).toBe('qais');
  });
  test ("Head point to the first node in the linked list",()=>{
    let list = new LinkedList();
    list.Insert('a');
    list.Insert('b');
    expect(list.head.value).toBe('a');
  });
  it ("Insert multiple nodes into the linked list",()=>{
    let list = new LinkedList();
    list.Insert('a');
    list.Insert('b');
    list.Insert('c');
    expect(list.length > 1).toBe(true);
  });
  //finding a value within the linked list that exists
  test ("Finding a value within the linked list that exists",()=>{
    let list = new LinkedList();
    list.Insert(10);
    expect(list.Include(10)).toBe(true);
  });
  it ("Searching for a value in the linked list that does not exists",()=>{
    let list = new LinkedList();
    list.Insert(10);
    expect(list.Include(1)).toEqual(false);
  });
  it ("A collection of all the values that exist in the linked list",()=>{
    let List= new LinkedList();
    List.Insert("a");
    List.Insert("b");
    List.Insert("c");
    expect(List.ToString()).toEqual("a -> b -> c -> ");
  });
  test('Successfully add a node to the end of the linked list', () => {
    let List = new LinkedList();
    List.Insert('a');
    List.Insert('b');
    List.append('c');
    expect(List.ToString()).toBe('a -> b -> c -> ');
  });
  test('Successfully add multiple nodes to the end of a linked list', () => {
    let List = new LinkedList();
    List.Insert('a');
    List.Insert('b');
    List.append('c');
    List.append('a');
    List.append('b');
    List.append('c');
    expect(List.ToString()).toBe('a -> b -> c -> a -> b -> c -> ');
  });
  test('Successfully insert a node before a node located in the middle of a linked list', () => {
    let List = new LinkedList();
    List.Insert('a');
    List.Insert('b');
    List.Insert('c');
    List.insertBefore('b', 'd');
    expect(List.ToString()).toBe('a -> d -> b -> c -> ');
  });
  test('Successfully insert a node before the first node of a linked list', () => {
    let List = new LinkedList();
    List.Insert('a');
    List.Insert('b');
    List.Insert('c');
    List.insertBefore('a', 'd');
    expect(List.ToString()).toBe('d -> a -> b -> c -> ');
  });
  test('Successfully insert after a node in the middle of the linked list', () => {
    let List = new LinkedList();
    List.Insert('a');
    List.Insert('b');
    List.Insert('d');
    List.insertAfter('b', 'd');
    expect(List.ToString()).toBe('a -> b -> d -> d -> ');
  });
  test('Successfully insert a node after the last node of the linked list', () => {
    let List = new LinkedList();
    List.Insert('a');
    List.Insert('b');
    List.Insert('c');
    List.insertAfter('c', 'd');
    expect(List.ToString()).toBe('a -> b -> c -> d -> ');
  });
  test('k is greater than the length of the linked list', () => {
    let List = new LinkedList();
    List.Insert('a');
    List.Insert('b');
    List.Insert('c');
    expect(List.kthFromEnd(5)).toBe('Exception');
  });
  test('k and the length of the list are the same', () => {
    let List = new LinkedList();
    List.Insert('a');
    List.Insert('b');
    List.Insert('c');
    expect(List.kthFromEnd(3)).toBe('a');
  });
  test('k is not a positive integer', () => {
    let List = new LinkedList();
    List.Insert('a');
    List.Insert('b');
    List.Insert('c');
    expect(List.kthFromEnd(-1)).toBe('Exception');
  });
  test('The linked list is of a size 1', () => {
    let List = new LinkedList();
    List.Insert('a');
    expect(List.kthFromEnd(1)).toBe('a');
  });
  test('k is not at the end, but somewhere in the middle of the linked list', () => {
    let List = new LinkedList();
    List.Insert('a');
    List.Insert('b');
    List.Insert('c');
    expect(List.kthFromEnd(2)).toBe('b');
  });
  it("Zip together", () => {
    const linkedList1 = new LinkedList();
    const linkedList2 = new LinkedList();
    let lList=new LinkedList();
    linkedList1.append(1);
    linkedList1.append(2);
    linkedList1.append(3);
    linkedList2.append(4);
    linkedList2.append(5);
    linkedList2.append(6);
    lList=linkedList1.zipLists(linkedList1,linkedList2);
    expect(lList.ToString()).toBe("1 -> 4 -> 2 -> 5 -> 3 -> 6 -> ");
  });

  it("Zip together, one of the lists is null", () => {
    const linkedList1 = new LinkedList();
    const linkedList2 = new LinkedList();
    let lList=new LinkedList();
    linkedList1.append(1);
    linkedList1.append(2);
    lList=linkedList1.zipLists(linkedList1,linkedList2);
    expect(lList.ToString()).toBe("1 -> 2 -> ");
  });

  it("Zip together, one of the lists had more length", () => {
    const linkedList1 = new LinkedList();
    const linkedList2 = new LinkedList();
    let lList=new LinkedList();
    linkedList1.append(1);
    linkedList1.append(2);
    linkedList1.append(3);
    linkedList2.append(4);
    linkedList2.append(5);
    lList=linkedList1.zipLists(linkedList1,linkedList2);
    expect(lList.ToString()).toBe("1 -> 4 -> 2 -> 5 -> 3 -> ");
  });
});
