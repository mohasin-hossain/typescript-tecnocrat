{
//

// Function with Generics
//////

const createArray = (param: string): string[] => {
    return [param]
}

const res1 = createArray("Mohasin"); /// Ouput --> ["Mohasin"]

const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param]
}

const res2 = createArrayWithGeneric<boolean>(true); /// Ouput --> [true]
const res3 = createArrayWithGeneric<string>("Mohasin"); /// Ouput --> ["Mohasin"]

// const resGenericObj = createArrayWithGeneric<{id: number; name: string}>({id: 1, name: "Mohasin"});
// OR
type User = {id: number; name: string}
const resGenericObj = createArrayWithGeneric<User>({id: 1, name: "Mohasin"});


// With Tuple
/////////////

const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2]
}

const res4 = createArrayWithTuple<string, number>("Bangladesh", 1011); 
const res5 = createArrayWithTuple<string, string>("Bangladesh", "Germany"); 
const res6 = createArrayWithTuple<string, {name: string}>("Bangladesh", {name: "Mohasin"}); 


// Another example
///////


const addCourseToStudent = <T>(student: T) => {
    const course = "Python course";
    return {
        ...student,
        course
    }
}

const student1 = addCourseToStudent({name: 'mohasin', id: 2,});
const student2 = addCourseToStudent({name: 'rahim', id: 3, hasWatch: true});

//
}