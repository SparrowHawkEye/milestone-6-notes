## JavaScript six core parts (module 31.1)

## Map string array, array of objects map, foreach array (module 32.5)

- map method is used to create a new array with the results of calling a provided function on every element in the calling array.

- From array of objects, we can create a new array of objects Property by using map method.

```
const arr = [
  {name: 'John', age: 20},
  {name: 'Peter', age: 30},
  {name: 'Mary', age: 25}
  ];

const newArr = arr.map(function(item) {
  return item.name;
});
```

- map work similar like for loop. we can use `return` to return the value.
- forEach method is used to call a provided function once for each array element. It is similar to map method.

## Implement filter, find on an array of objects (module 32.6)

- `filter` method is used to create a new array with all elements that pass the test implemented by the provided function.
- `filter` method is similar to map method but only return the elements that pass the test.
- `filter` also works with array of objects.
- `filter` if the test object is not found, it will return an empty array.

```
const numbers = [1, 2, 23, 40, 55, 16, 72, 78, 9, 100];
const bigNumbers = numbers.filter(function(number) {
  return number > 50;
});
const smallNumbers = numbers.filter(function(number) {
  return number < 50;
});
```

- `find` method is used to find the first element of an array that pass the test implemented by the provided function.
- `find` method is similar to filter method but only return the first element that pass the test.
- `find` method if the test object is not found, it will return `undefined`.

## Class, constructor, method, create object from class (module 32.7)

- `class` is a blueprint for creating objects.
- `class` `constructor` is a function that is called when a new object is created.
- to access a property in class we use `this` keyword.
- `this` keyword is used to access the property of the object.

```
class Support{
  name;
  designation = 'Support Web Developer';
  address = "BD";
  constructor(name,address) {
    this.name = name;
    this.address = address;
  }
  startSession(){
    console.log(`Start this support session`);
}
const aamir = new Support("Aamir Khan", "Dhaka");
const Salman = new Support("Salman Khan", "Chittagong");
console.log(aamir);
```

## Inheritance, extends class, super, class method (module 32.8)

- `inheritance` is a way to create a new class from an existing class.
- `extends` keyword is used to inherit the properties and methods of an existing class.
- `super` keyword is used to call the constructor of the parent class.

```
class StudentCare{
  name;
  designation = 'Student Care';
  address = "BD";
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
  buildARoutine(){
    console.log(` ${this.name} Build a routine for student`);
  }
}
```

> <strong> MATHAR UPOR DIYE GECHE LEARN MORE </strong> 😋😋😋😋

## Prototypical inheritance and module summary (module 32.9)

- prototypical chain is a chain of objects, where each object is linked to the next one by a reference to the previous object.
