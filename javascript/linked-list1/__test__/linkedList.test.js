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
});
