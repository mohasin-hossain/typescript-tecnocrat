{
//

// Utility Type
/////////////////////


type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
}
// Pick
///////
// type Name = Pick<Person, 'name'>;
type NameAge = Pick<Person, 'name' | 'age'>;


// Omit
//////
type ContactInfo = Omit<Person, 'name' | 'age'>;

// Required 
///////
type PersonRequired = Required<Person>;

// Partial
//////
type PersonPertial = Partial<Person>;

// Readonly
/////

type PersonReadonly = Readonly<Person>;

const person1: PersonReadonly = {
    name: "John",
    age: 33,
    contactNo: "555",
}

// person1.name = "David"; // It wont allow to change the name as it is readonly

// Record 
///////////

// type MyObj = {
//     a: string;
//     b: string;
// }

// const obj1: MyObj = {
//     a: 'aa',
//     b: 'bb',
//     c: 'cc',
// } // it wont allow to add c 

// now to make it dynamic - 
type MyObj = Record<string, string>;

const obj1: MyObj = {
    a: 'aa',
    b: 'bb',
    c: 'cc',
}


// usecase

const EmplyObj: Record<string, unknown> = {}




//
}