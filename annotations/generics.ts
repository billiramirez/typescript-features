class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfString {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

class ArrayofAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

const arr = new ArrayofAnything(["a", "b", "a"]);

//  Example of generics with functions

function printString(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printNumber(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// go ahead with the generic
// function with generics
function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// Now we can use this
printAnything<string>(["a", "bb"]);
// or
printAnything(["a", "b"]);
// Or
printAnything([2, 4, 5]);

// Generics Constraints ------------------------------------

class Car {
  print() {
    console.log("Im a car");
  }
}

class House {
  print() {
    console.log("Im a House");
  }
}

interface Printable {
  print(): void;
}

/**
 * With this interface and the extends we're basically telling to the function that we promise there will be a *print* message for
 * the type we are passing as a generic value.
 */
function printHousesOrCar<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

printHousesOrCar<House>([new House(), new House()]);
printHousesOrCar<Car>([new Car(), new Car()]);
