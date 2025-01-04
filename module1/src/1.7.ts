{

// Spread Operator
const brothers1: string[] = ['xain', 'leo', 'rony'];
const brothers2: string[] = ['Xen', 'Tony', 'Kim'];
// brothers1.push(brothers2) 
brothers1.push(...brothers2) 


// Learn spread operator
const mentors1 = {
    typescript: 'Mezba',
    redux: 'Mir',
    dbms: 'Mizan',
}

const mentors2 = {
    prisma: 'Firoz',
    next: 'Tanmoy',
    cloud: 'Nahid',
}

const mentorsList = {
    ...mentors1,
    ...mentors2,
}


// Learn rest operator
// const greetFriends = (f1: string, f2: string, f3: string) => {
//     console.log(`Hi ${f1}, ${f2}, ${f3}`);
// }

// greetFriends('leo', 'teo', 'xain') // but we cann't add more than 3 freinds 


const greetFriends = (...friends: string[]) => {
    friends.forEach((friend: string) => console.log(`Hi ${friend}`))
}

greetFriends('leo', 'teo', 'xain') // but we cann't add more than 3 freinds 





}