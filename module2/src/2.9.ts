{
//

// Conditional Type

type a1 = null;
type b1 = undefined;

type x = a1 extends null ? true : false; // Result = True
type y = a1 extends number ? true : false; // Result = False


type z = a1 extends string ? true : b1 extends undefined ? undefined : any;


// Another example
type Sheikh = {
    bike: string;
    car: string;
    ship: string;
}

// type CheckVehicle<T> = T extends 'bike' | 'car' | 'ship' ? true : false;
// or we can do with
type CheckVehicle<T> = T extends keyof Sheikh ? true : false;

type HasBike = CheckVehicle<'bike'>



//
}