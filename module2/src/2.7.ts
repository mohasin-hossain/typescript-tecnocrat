{
//

// Generic constrants with key of operator


const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
}

const user = {
    name: "Mohasin",
    age: 26,
    address: "Dhaka",
}

const res1 = getPropertyValue(user, "name");








//
}