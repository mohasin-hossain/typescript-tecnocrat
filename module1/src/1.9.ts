{

// Type Alias in Object
//////////////////

// const stud1: {
//     name: string;
//     age: number;
//     gender: string;
//     contactNo: string;
//     address: string;
// } = {
//     name: "John",
//     age: 50,
//     gender: "Male",
//     contactNo: "444",
//     address: "France",
// }


// const stud2: {
//     name: string;
//     age: number;
//     gender: string;
//     address: string;
// } = {
//     name: "David",
//     age: 50,
//     gender: "Male",
//     address: "Italy",
// }

// In the above way if we want to add more students we have to type again n again 
// So -->

type Student = {
    name: string;
    age: number;
    gender: string;
    contactNo?: string;
    address: string;
}

const stud1: Student = {
    name: "John",
    age: 50,
    gender: "Male",
    contactNo: "444",
    address: "France",
}

const stud2: Student = {
    name: "David",
    age: 50,
    gender: "Male",
    address: "Italy",
}

// Type alias in string
type UserType = string;
const userName: UserType = 'Mohasin';


// Type alias in boolean
type IsAdmin = boolean;
const isAdmin: IsAdmin = true;

// Type alias in function
type Add = (num1: number, num2: number) => number;

const add: Add = (num1, num2) => num1 + num2;











}