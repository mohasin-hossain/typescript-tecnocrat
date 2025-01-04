{


// Object Destructuring
const user = {
    id: 1,
    name: {
        firstName: "Mohasin",
        lastName: "Hossain",
    },
    contactNo: "+4900000000",
    address: "Germany",
}

const {contactNo: phoneNum, name: {firstName: fName}} = user; // fName is now an alias of firstName, this is why we wont be able to declare type while destructuring it



// Array Destructuring

const myFriends = ['xain', 'leo', 'moen', 'alim', 'daar', 'david'];
// const [a, b, c] = myFriends;

// to skip values 
// const [,, c] = myFriends;
// if we want to keep the rest of the friends name in a single variable
const [,, c, ...rest] = myFriends;







 

}