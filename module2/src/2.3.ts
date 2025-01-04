{
//

// Generic Type

// const rollNumbers: number[] = [23, 52, 51];
const rollNumbers: Array<number> = [23, 52, 51];

// const mentors: string[] = ['rajib', 'rakib', 'leo', 'xain'];
const mentors: Array<string> = ['rajib', 'rakib', 'leo', 'xain'];

// const boolArray: boolean[] = [true, false, false]
const boolArray: Array<boolean> = [true, false, false]

// We can make dynamic reusable type with the help of generic
/////////////////////

type GenericArray<T> = Array<T>;  /// here T is acting like funcitons param, T will receive our type arguments 

const rollNumbers1: GenericArray<number> = [23, 52, 51];

const mentors1: GenericArray<string> = ['rajib', 'rakib', 'leo', 'xain'];

const boolArray1: GenericArray<boolean> = [true, false, false]


// Using generics on objects
////////////////

const user: GenericArray<{name: string; age: number}> = [
    {
        name: 'rahim',
        age: 2,
    },
    {
        name: 'jiniya',
        age: 20,
    }
]


// Using generics on Tuple
///////////

type GenericTuple<X, Y> = [X, Y];

const users: GenericTuple<string, string> = ['Mohasin', 'Rajib'];


const userWithId: GenericTuple<number, {name: string; email: string}> = [1, {name: 'mohasin', email: 'abc@gmail.com'}]

















//    
}