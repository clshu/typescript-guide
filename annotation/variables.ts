let apples: number = 5;
let speed: string = 'fast';
let more: boolean = false;

let what: null = null;
let nothing: undefined = undefined;
// Object
let now: Date = new Date();

// Array

let color: string[] = ['red', 'green'];
let myNumbers: number[] = [1, 2, 3, 5];
let truths: boolean[] = [true, false, true];

// Classes
class Car {

}

let car: Car = new Car();

// Object leteral

let point: { x: number; y: 20 } = {
  x: 10,
  y: 20
}

// Function

const logNumber: (i: number) => void = (n: number) => {
  console.log(n);
}

// When to use annotation
// 1) Function that returns 'any' type

const json = '{ "x": 10, "y": 20 }'
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates); // {x: 10, y: 20}

// 2) Delay initialization.
//  When we decalre a varaible in one line
// and initialize it later

let found: boolean;

found = true;

// 3) Varaibles whos type can't be inferred correctly.

let numbers = [-10, -1, 20];
let numberAboveZero: boolean | number = false;

numberAboveZero = 20;









