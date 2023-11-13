// This class represents a todo item and its associated
// data: the todo title and a flag that shows whether the
// todo item is done.

class Todo {
  static DONE_MARKER = "X";
  static UNDONE_MARKER = " ";

  constructor(title) {
    this.title = title;
    this.done = false;
  }

  toString() {
    let marker = this.isDone() ? Todo.DONE_MARKER : Todo.UNDONE_MARKER;
    return `[${marker}] ${this.title}`;
  }

  markDone() {
    this.done = true;
  }

  markUndone() {
    this.done = false;
  }

  isDone() {
    return this.done;
  }

  getTitle() {
    return this.title;
  }
}


// omitted code

// This class represents a collection of Todo objects.
// You can perform typical collection-oriented actions
// on a TodoList object, including iteration and selection.

class TodoList {
  constructor(title) {
    this.title = title;
    this.todos = [];
  }
  add (todo) {
    if (!(todo instanceof Todo)) {
      throw new TypeError('can only add Todo objects');
    }

    this.todos.push(todo);
  }
  size() {
    return this.todos.length;
  }
  first(){
    if (!this.todos.length) {
      return undefined;
    } else {
      return this.todos[0];
    }
  }
  last(){
    if (!this.todos.length) {
      return undefined;
    } else {
      return this.todos[this.todos.length - 1];
    }
  }
  itemAt(index) {
    this._validateIndex(index);
    return this.todos[index];
  }

  _validateIndex(index) {
    if (!(index in this.todos)) {
      throw new ReferenceError(`invalid index: ${index}`);
    }
  }
  markDoneAt(index) {
    this.itemAt(index).markDone();
  }
  markUndoneAt(index) {
    this.itemAt(index).markUndone();
  }
  isDone() {
    return this.todos.every(todo => todo.isDone()); // OR (todo => todo.done === true);
  }
  shift() {
    return this.todos.shift();
  }
  pop() {
    return this.todos.pop();
  }
  removeAt(index) {
    this._validateIndex(index);    // this.itemAt(index); also worked
    return this.todos.splice(index, 1);
  }
  toString() {
    let title = `---- ${this.title} ----`;
    let list = this.todos.map(todo => todo.toString()).join("\n");
    return `${title}\n${list}`
  }
}

let list = new TodoList("Today's Todos");
console.log(list); //

// Omitted code

let todo1 = new Todo("Buy milk");
let todo2 = new Todo("Clean room");
let todo3 = new Todo("Go to the gym");
let todo4 = new Todo("Go shopping");

list.add(todo1);
list.add(todo2);
list.add(todo3);
list.add(todo4);
console.log(list.size());  // 4

// Omitted code

console.log(list.first());
console.log(list.last());

let emptyList = new TodoList("Empty List");
console.log(emptyList.first());
console.log(emptyList.last());

console.log(list.itemAt(1));

list.markDoneAt(1);
console.log(list);

list.markUndoneAt(1);
console.log(list);
// Omitted code

// Omitted code

console.log(list.isDone()); // false

list.markDoneAt(0);
list.markDoneAt(1);
list.markDoneAt(2);
list.markDoneAt(3);
console.log(list.isDone()); // true

list.markUndoneAt(2);
console.log(list.isDone()); // false

// Omitted code

console.log(list.shift());
console.log(list.pop());
console.log(list);

console.log(emptyList.shift());
console.log(emptyList.pop());
console.log(emptyList);

// Omitted code

// First, let's create some new todos.
let todo5 = new Todo("Feed the cats");
let todo6 = new Todo("Study for Launch School");
list.add(todo5);
list.add(todo6);
console.log(list);

console.log(list.removeAt(2));
console.log(list.removeAt(0));
console.log(list.removeAt(1));
console.log(list);

// Omitted code

list.add(todo1);
list.add(todo2);
list.add(todo4);
list.add(todo5);
list.add(todo6);
console.log(`${list}`);
