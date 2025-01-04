{


    // Ternary Operator, 
    const age: number = 18;
    const isAdult = age >= 18 ? 'Adult' : 'Not Adult';
    console.log(isAdult)


    // Nullish coalescing Operator
    // null / undefined --> Decision making
    // This operator is only used when we need to make a decision based on null/undefined


    const isAuthenticated = null; // Guest will be result only if the value is either null or undefined
    const result1 = isAuthenticated ?? "Guest";

    console.log(result1);



    // Optional Chaining with Nullish coalescing Operator
    type User = {
        name: string;
        address: {
            city: string;
            road: string;
            presentAddress: string;
            permanentAddress?: string;
        }
    }

    const user: User = {
        name: "MOhasin",
        address: {
            city: "san Francisco",
            road: 'Moltkes. 3',
            presentAddress: 'Ctg road',
        }
    }

    // const permanentAddress = user?.address?.permanentAddress
    // console.log(permanentAddress)   // this is result in undefined in our app
    // So to avoid this we can use nullish coalescing operator

    const permanentAddress = user?.address?.permanentAddress ?? "No Permanent Address";
    console.log(permanentAddress)














}