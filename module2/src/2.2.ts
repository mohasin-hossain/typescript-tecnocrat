{


// Interface



type User1 = {
    name: string;
    age: number;
}

interface User2 {
    name: string;
    age: number;
}
//  we can define a object type by using both type alias and interface

// const user1: User1 = {
//     name: 'John',
//     age: 42,
// }

const user1: User2 = {
    name: 'John',
    age: 42,
}

// we can use interface for only object types data
// but for premitive types data we cant use type interface, because with interface we can't add = which is necessary for defining types in premitive types, for ex,

type roolNumber = number; // it is a premitive type data

// But we can use type alias for both objects and premitive types data


// to add a new property with type alias in objects
///////////////
type UserWithRole1 = User1 & { role : string }; // we can do it with the help of intersection

const userwithroleUsingAlias: UserWithRole1 = {
    name: "mohasin",
    age: 20, 
    role: 'admin'
}

// to add a new property with interface in objects
///////////////

interface UserWithRole2 extends User2 {
    role: string
}

const userwithroleUsingInterface: UserWithRole2 = {
    name: "mohasin",
    age: 20, 
    role: 'admin'
}


// we can also extends type as interface

///////////////////////////
// Type alias On Array

type Roll1 = number[];
const rollNumber1: Roll1 = [1, 2, 3];


///////////////////////////
// Interface On Array

interface Roll2 {
    [index: number]: number
}

const rollNumber2: Roll2 = [1, 2, 4];



////////////////////////
// Type alias on Function

type Add = (num1: number, num2: number) => number;

const add: Add = (num1, num2) => num1 + num2;


 
////////////////////////
// Interface on Function
interface Add2 {
    (num1: number, num2: number) : number
}

const add2: Add2 = (num1, num2) => num1 + num2;

 




}