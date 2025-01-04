{

// Nullable Types

const searchName = (value: string | null) => {
    if(value) {
        console.log("Searching");
    } else {
        console.log("There is nothing to search")
    }
}

searchName("Hello");
searchName(null);


// Unknown Types

const getSpeedInMeterPerSecond = (value: unknown) => {
    if(typeof value === 'number') {
        const convertedSpeed = (value * 1000 / 3600);
        console.log(`The speed is ${convertedSpeed} ms^-1`)
    } else if(typeof value === 'string') {
        const [result, unit] = value.split(" ");
        const convertedSpeed = (parseFloat(result) * 1000) / 1000;
        console.log(`The speed is ${convertedSpeed} ms^-1`);
    } else {
        console.log("Wrong Input")
    }
}

getSpeedInMeterPerSecond(1000)
getSpeedInMeterPerSecond(`1000 ms^-1`)


// Never Type

const throwError = (message: string): never => {
    throw new Error(message);
}

throwError("Something went wrong");















}