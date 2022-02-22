//////! others Problem //////

const numbers = [16, 25, 19, 53, 46, 12, 9, 15, 78, 100];

const getNumber = numbers.filter(xy => xy>20);
console.log(getNumber);

function bigNumber(){
  return numbers.filter(showNumber);
}
function showNumber(xy){
  if (xy>20){
    return xy;
  }
}
console.log(bigNumber());



/* 
const getNumber = numbers.filter(xy=> xy>20);
console.log(getNumber);

 */

/* function showNumber(xy){
  let newNumber = [];
 for (let i = 0; i < xy.length; i++) {
  if (xy[i]>20) {
    newNumber.push(xy[i]);
  }
}
return newNumber;
}
console.log(showNumber(numbers));
 */


//////! others Problem //////


//TODO ১. কখন const আর কখন let দিয়ে ভেরিয়েবল ডিক্লেয়ার করতে হয় সেটা তোমাকে জানতেই হবে। তুমি নিজে নিজে একটা const দিয়ে আরেকটা let দিয়ে ভেরিয়েবল ডিক্লেয়ার করে ফেলো।
//! Solution:

const myFatherName =
{name: "Md. Abdul Khaleque",
height: 170,
weight: 80,
birthYear: 1953,
job: "Accountant"  }

let myAddress = "Uttara";
myAddress = "Cumilla";



//TODO ২. টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং তৈরি করো। সেটার মধ্যে উপরে ডিক্লেয়ার করা ভেরিয়েবল এর মান ডাইনামিক ভাবে বসাও। একইভাবে উপরে একটা অবজেক্ট ডিক্লেয়ার করো। এবং ডাইনামিকভাবে উপরের অবজেক্ট এর দুইটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। 

//! Solution:

console.log(`${myFatherName.name} born in ${myFatherName.birthYear} at his place ${myAddress} .`);


//TODO ৩.১ একটা প্যারামিটার ওয়ালা arrow ফাংশন ডিক্লেয়ার করো। এবং সেই ফাংশনের কাজ হবে তুমি কোন ইনপুট দিলে সেই ইনপুট সংখ্যাকে ৫ দিয়ে ভাগ করে আউটপুট দিবে। 

//! Solution:

const multiplyByFive = number => number*5;

console.log(`Number Multiplied by five is:`, multiplyByFive(6));


//TODO  ৩.২ তুমি দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। সেই ফাংশনের ভিতরে কাজ হবে। প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো 

//! Solution:

const duoNumberMultiplication = (num1,num2) => (num1+2) * (num2+2) ;

console.log(`Duo Number Multiplied after adding 2 with those number is:`, duoNumberMultiplication(6,3));

//TODO  ৩.৩ এইবার তিনটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করো। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটারকে গুণ করে সেই রেজাল্ট রিটার্ন করবে। 

//! Solution: 

const trioNumberMultiplication = (num1,num2,num3) => num1 * num2 * num3 ;

console.log(`Three Number Multiplication result is:`, trioNumberMultiplication(2,3,4));

//TODO  ৩.৪ এইবার দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো। 

//! Solution:

const arrowWthTwoParm = (parm1,parm2) => {
  const firstAdd = parm1+2;
  const secondAdd = parm2+2;
  const total = firstAdd * secondAdd;
  return total;
}

console.log("arrowWithTwoParm:", arrowWthTwoParm(3,4));

//TODO  ৪. [হোম ওয়ার্ক] একটু গুগলে সার্চ দাও: javascript function declaration vs arrow function তারপর কয়েকটা আর্টিকেল পড়ে বুঝার চেষ্টা করো। 

//! Solution:
//? regular function syntax  const regularFunction = function function_name(parameter){//body of function};
//? arrow function syntax  const arrow_function = (parameter) => {//body of function};
//? regular function has their this keyword, arrow function doesn't have their this keyword.
//? Arguments objects are not available in arrow functions, but are available in regular functions.
//? regular function are callable and constructiable so new keyword can be used to create new objects in arguments objects whereas arrow function are callable but not constructiable. so new keyword show a run-time error on try to construct an object.
//? coinstructiable means 
function arg(){
  console.log(arguments);
}
arg(1,2,3,4);

 const arrowArg = () => console.log(...arguments);
 console.log(arrowArg(1,2,3));


//TODO  ৪.৫. [এক্সট্রা আরেকটা হোম ওয়ার্ক। এইটা ভিডিওতে বলা নাই]: জাভাস্ক্রিপ্ট এর var, let, const এর মধ্যে প্রার্থক্য কি? 

//! Solution:

//? var origin before ES2015, let and const are introduced in ES2015
//? var is function scoped attached to window object, let and const are block scoped or global scoped any one scope
//? var is hoisted to the top of its execution and initialized as undefined. Whereas let and const are hoisted to the top of their block and left uninitialized.
//? var can be redeclared within th scope, let and const cannot be redeclared witin the same scope.
//? var and let can be reassigned within the scope, const cannot be reassigned within the scope.


//TODO  ৫. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৫ দিয়ে গুন্ করে গুনফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে। 

//! Solution:

const numArray = [1,2,3,4,5,6,7,8,9]
const newArrayMultipliedByFive = numArray.map(num => num*5)
console.log(newArrayMultipliedByFive);

//TODO  ৬. [ চ্যালেঞ্জিং। গুগলে সার্চ দিয়ে বের করো ] অনেকগুলা সংখ্যার একটা array থেকে শুধু বিজোড় সংখ্যা বের করে নিয়ে আসার জন্য filter ইউজ করো 

//! Solution:

const arrayOfRandomNum = [28,35,67,54,95,46,17,38,79,85,125];
const arrayOfOddNumber = arrayOfRandomNum.filter(num => num%2)
console.log(arrayOfOddNumber);

//TODO  ৭. একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো। 

//! Solution:

const productArray = [
  {
    productName: "Hajmola",
    objectType: "food",
    price: 100
  },
  {
    productName: "Chicken Fry",
    objectType: "food",
    price: 500
  },
  {
    productName: "Mobile",
    objectType: "Usable things",
    price: 20000
  },
  {
    productName: "Money Bag",
    objectType: "Usuable Things",
    price: 5000
  }
]

const  findingPriceFromArray = productArray.find(arr => arr.price === 5000);
console.log(findingPriceFromArray);

//TODO  ৭.৫ [এক্সট্রা] জাভাস্ক্রিপ্ট এ array এর map, forEach, filter, find কোনটা দিয়ে কি হয়। সেটার একটা সামারি লিখে ফেলো। 

//! Solution:
/* 
/////! MAP /////

The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

/////! FOR EACH /////
The forEach() method executes a provided function once for each array element. but return nothing

/////! FILTER /////
The filter() method creates a new array with all elements that pass the test implemented by the provided function.
/////! FIND /////
The find() method returns the value of the first element in the provided array that satisfies the provided testing function.
 */

const mapRandom = arrayOfRandomNum.map(num => num*0.5);
const filterRandom = arrayOfRandomNum.filter(num => num>50);
const findRandom = arrayOfRandomNum.find(num => num>80);
const forEachRandom = arrayOfRandomNum.forEach((number) => console.log(number))
console.log("Maping:", mapRandom);
console.log("For Each:", forEachRandom);
console.log("Filter:", filterRandom);
console.log("Find:", findRandom);

//TODO  ৮. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। 

//! Solution:

const moneyBag = {
  name: "Money Bag",
  objectType: "Usuable Things",
  price: 5000,
  contain: ["cash", "images", "visiting cards"]
}

const {contain,objectType} = moneyBag
console.log(contain);
console.log(objectType);

//TODO  ৯. [চ্যালেঞ্জিং] array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর থার্ড পজিশন এর উপাদান কে destructuring করে 'three' নামক একটা ভেরিয়েবল এ রাখবে। 

//! Solution:

const arrayDestructuringOfRandomNum = [28,53,67,95,5,46,1,308,179,85,125];

const [one,two,three] = arrayDestructuringOfRandomNum;
console.log(three);


//TODO  ১০. তিনটা প্যারামিটার ওয়ালা একটা ফাংশন লিখবে। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটার এর যোগ করে যোগফল রিটার্ন করবে। আর থার্ড প্যারামিটার এর একটা ডিফল্ট ভ্যালু থাকবে। সেটা হবে ৭। 

//! Solution:

function addThree(parm1,parm2=0,parm3=0){
  return parm1+parm2+parm3;
}
console.log("adding three number with all value", addThree(2,3,8));
console.log("adding three number without third value", addThree(2,8));

//TODO  [অপশনাল]

//TODO  ১১. একটা nested অবজেক্ট ডিক্লেয়ার করো (অর্থাৎ একটা অবজেক্ট এর প্রপার্টি এর মধ্যেও যে অবজেক্ট থাকতে পারে। আবার সেই অবজেক্ট এর প্রপার্টি এর মধ্যেও সে অবজেক্ট থাকতে পারে। সেই রকম একটা অবজেক্ট ডিক্লেয়ার করো। এবং যেকোন একটা প্রপার্টি এর মান একটা array হবে। জাস্ট এমন একটা অবজেক্ট )

//! Solution:

const favBands = {
     warfaze: {
       album:
       {
         warfaze:  {
          vocal:"sunjoy",
          released: 1991,
          bestSong:["boshe Achi","asha",]
        },
        jibondhara:{
          vocal:"sunjay",
          released: 1994,
          bestSong:["obak valobasha","nirbashan",]
        },
        jibondhara:{
          vocal:"sunjay",
          released: 1994,
          bestSong:["rupachad","mounota","jibondhara","tumi", "jononi"]
        },
        alo: {
          vocal:"mizan",
          released: 2000,
          bestSong:["hotasha","jotodur","alo"]
        },
        shotto:{
          vocal:"mizan",
          released: 2012,
          bestSong:["agami","projonmo","shotto"]
        }
       }
     }
  }


//TODO  ১২. উপরের অবজেক্ট এ ডট এর আগে যে প্রশ্নবোধক চিহ্ন দিয়ে যে অপশনাল চেইনিং করা যায়। সেটা একটু প্রাকটিস করো। 

//! Solution: 

//* The ?. operator is like the . chaining operator, except that instead of causing an error if a reference is nullish (null or undefined), the expression short-circuits with a return value of undefined. When used with function calls, it returns undefined if the given function does not exist.

const shararat = favBands.warfaze.album.shararat?.released
console.log(shararat);