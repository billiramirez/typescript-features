let apples = 5;
let speed: string = "fast";
let hasName: boolean = true;

let nothingMuch: null = null;
let nothingMuch2: undefined = undefined;

// Built in objects

let now: Date = new Date();

// Array
let colors: string[] = ["red", "green", "blue"];
let myNumbers: number[] = [1, 3, 4];
let truths: boolean[] = [true, false, true];

// classes

class Car {}

let car: Car = new Car();

// Object Literal

let point: { x: number; y: number } = {
  x: 10,
  y: 30
};

// Function

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// when to use annotations
// 1. Function that returns the 'any' type
const json = '{"X": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);
// JSON.parse will always return any type of value

// 2. When we declare a variable on one line and initialize it later
let words = ["red", "green", "blue"];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWord = true;
  }
}

// 3. Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
