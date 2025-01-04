{

// Union types
//////////

// type FrontendDeveloper = 'FakibazDeveloper' | 'JuniorDeveloper'; // String Literal type

// const newDeveloper: FrontendDeveloper = 'FakibazDeveloper';


// UseCase

type User = {
    name: string;
    email: string;
    gender: 'Male' | 'Female';
    bloodGroup: "O+" | "A+" | "B+";
}

const user1: User = {
    name: 'John',
    email: 'john@gmail.com',
    gender: 'Male',
    bloodGroup: "O+",
}


// Intersection types
type FrontendDeveloper = {
    skills: string[];
    designation1: "Frontend Developer";
}

type BackendDeveloper = {
    skills: string[];
    designation2: "Backend Developer";
}


type FullstackDeveloper = FrontendDeveloper & BackendDeveloper;

const fullstackDeveloper: FullstackDeveloper = {
    skills: ['HTML', 'CSS', 'JS'],
    designation1: 'Frontend Developer',
    designation2: 'Backend Developer',
}











}