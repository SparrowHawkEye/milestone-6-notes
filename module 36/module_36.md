## Module introduction Different way to Create Object (module 36.1)

1. Using object literal

```
const student = { name: "Sakib", Job:"cricketer"};
```

2. Using object constructor

```
const person = new Object();
console.log(person);
```

3. object inheritance

```
const human = Object.create(student); // inheriting student object in #1
```

4. using constructor class(syntactical Sugar)

```
class People{
  constructor(name, age){
    this.name = name
    this.age = age;
  }
}
const peop = new People("Manush",12)
```

5. using function

```
function Manush(name){
  this.name = name;
}
const man = new Manush('kader');
console.log(man)
```

## Object method property review (module 36.2)

- if object property value is a function than its called a method.
- if we want to call object property in the object method then we use `this` keyword to access the object property.
- assigning object method we use `objectName.methodName()`.

## Keys, values, entries, delete, seal, freeze (module 36.3)

- To get all keys of an object we use `Object.keys(objectName)`
- To get all values of an object we use `Object.values(objectName)`
- To get all entries of an object we use `Object.entries(objectName)`. It will return an array of arrays. Each array will contain key and value.
- To delete a property of an object we use `delete objectName.propertyName`
- To seal an object we use `Object.seal(objectName)`. It will prevent any property to be added or deleted. We can change the value of the property.
- To freeze an object we use `Object.freeze(objectName)`. It will prevent any property to be added or deleted. We can't change the value of the property.

## Loop through an object using for in, for of, object entries (module 36.4)

- To loop through an object we use `for in` loop.

```
for(let key in student){
  console.log(key, student[key]);
}
```

- To loop through an object we can also use `for of` loop.

## Compare objects, referential integrity (module 36.5)

- when comparing two objects then javascript will compare the referential integrity of the objects. Referential integrity means that if we change the value of one object then the other object will not be affected. its check if they are at the same memory location. If they are then it will return true. If not then it will return false. as object is a non primitive data type. So we can't compare them directly.

- we can compare objects after converting them into string. We can use `JSON.stringify(objectName)` to convert an object into string.
- To compare two objects we use `Object.is(object1, object2)`. It will return true if both objects are same.

- another way to compare is to call a function like below

```
const first = {a: 1, b: 2};
const second = {a: 1, b: 2};
function compareObject(object1, object2){
  if(Object.keys(object1).length !== Object.keys(object2).length){
    return false;
  }
  for (const prop in object1){
    if (object1[prop] !== object2[prop]){
      return false;
    }
  }
  return false;
}
compareObject(first,second)
```

## Use bind to borrow method from another object (module 36.6)

- if different object have same method then we can use `bind` to borrow the method from another object.

```
 objectWithMethod.methodName.bind(objectName)
```

## Difference between bind, call and apply (module 36.7)

- in a object method we can use `bind` to borrow the method from another object.
- in a object method we can use `call` to borrow the method from another object.

```
objectWithMethod.methodName.call(objectName, parameterRequiredForMethod)
```

- in a object method we can use `apply` to borrow the method from another object. similar to `call` but we pass multiple parameters in an array.

```
objectWithMethod.methodName.call(objectName, [parameterRequiredForMethodInArray])
```

## Understand this keyword in JavaScript (module 36.8)

- `this` is a execution context.
- `this` is a keyword that refers to the object that is executing the current function.
- in regular function which object is on the left of the dot(.) is the object that is executing the function. it will be the `this` keyword context.
- In arrow function `this` keyword context is upper level of arrow function.
- In DOM event if the event is on a element then `this` keyword context is the element that triggered the event.
- if we use a event handler function which will be executed later then this keyword context will be depends on the handler function.

## Module summary and checklist (module 36.9)

-
