// Problem 1
// Design a TypeScript function that takes a parameter of a union type (e.g., string | number). If it's a string, return its length. If it's a number, return the square of that number.

const getLengthOrSquare = (param: string | number): number => {
  if (typeof param === "number") {
    return param * param;
  } else {
    return param.length;
  }
};

const res1 = getLengthOrSquare(2);
const res2 = getLengthOrSquare("Mohasin");
console.log(res1);
console.log(res2);

// Problem 2
// Create an interface called Person with optional properties address and phone. The address property itself will be another object containing city and street properties. Implement a function named getAddressCity that takes an argument of type Person and returns the city from the address property of the Person object. Use optional chaining to prevent any type errors.

interface Address {
  city: string;
  street: string;
}

interface Person {
  name: string;
  age: number;
  address?: Address;
  phone?: number;
}

const getAddressCity = (person: Person): string | undefined => {
  return person.address?.city;
};

const person: Person = {
  name: "John",
  age: 20,
  address: {
    city: "Washington",
    street: "St. Wegner 24",
  },
  phone: 3333,
};

const res3 = getAddressCity(person);
console.log(res3);

// Problem 3
// Create a type guard function isCat that checks if an object is an instance of a Cat class. If it does, the function says "yes, it's a cat." If it doesn't match, the function says "no, it's not a cat."

class Cat {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    makeSound() {
        console.log("Meaw!");
    }
}

const isCat = (obj: unknown): obj is Cat => {
    return obj instanceof Cat;
}

const checkCat = (obj: unknown) => {
    if(isCat(obj)) {
        console.log("yes, it's a cat.");
    } else {
        console.log("no, it's not a cat");
    }
}

const myCat = new Cat("Kitty", 3);
checkCat(myCat);

// Problem 4:
// You got a list that has numbers and words mixed together. Your job is to make a function that will take the list as an argument and return the total by adding them up.
// To solve this in TypeScript, you'll look at each thing in the list named mixedData, which looks like this: [1, 'two', 3, 'four', 5]. You'll go through the list, find the numbers, and add them together.
// Every time you find a number in the list, you'll add it to a total. You'll start at zero and then keep adding the numbers you find. If no number is found in the list return 0. To make sure TypeScript knows these things are numbers, you'll use type assertions.

const sumNumbers = (mixedData: (number | string)[]): number => {
  let total = 0;

  for (const item of mixedData) {
    if (typeof item === "number") total += item;
  }

  return total;
};

const mixedData: (number | string)[] = [1, "two", 3, "four", 5, "six", 7];
const res5 = sumNumbers(mixedData);
console.log(res5);

// Problem 5:
// Define two interfaces: Car with properties like make, model, and year, and Driver with properties like name and licenseNumber. Create a function that takes two objects of type Car and Driver and returns an object with the combined properties of both types.

interface Car {
  maker: string;
  model: string;
  year: number;
}

interface Driver {
  name: string;
  licenseNumber: number;
}

const getDriverDetails = (car: Car, driver: Driver): Car & Driver => {
  return {
    ...driver,
    ...car,
  };
};

const car: Car = {
  maker: "BMW",
  model: "M456",
  year: 2023,
};

const driver: Driver = {
  name: "Alex",
  licenseNumber: 648274290,
};

const res6 = getDriverDetails(car, driver);
console.log(res6);

// Problem 6:
// Write a TypeScript function that takes a parameter of type unknown and uses a type guard to check whether the parameter is an array of numbers. If it is, calculate the sum of the numbers and log it. If it's not, log an error message.

// const checkParameters = (param: unknown): number | string => {
//     let total = 0;
//     if(Array.isArray(param)) {
//         for(const item of param) {
//             if(typeof item === 'number') {
//                 total += item;
//             }
//         }
//         return total;
//     }

//     return "Not a Number Array!"
// }

// const data = [1, 2, 3];
// const data2 = "I am John";
// const res8 = checkParameters(data);
// console.log(res8);

const checkParameters = (param: unknown): number | string => {
  if (Array.isArray(param) && param.every((item) => typeof item === "number")) {
    const total = param.reduce((sum, cv) => sum + cv, 0);
    return total;
  }

  return "Not a Number Array!";
};

const data = [1, 2, 3];
const data2 = "I am John";
const res8 = checkParameters(data);
console.log(res8);
