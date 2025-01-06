{
// Abstraction: two ways --> 1. interface 2. abstract
//////


// 1. Interface
/////

// Idea
interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
}

// Real Implementation
class Car1 implements Vehicle1 {
    startEngine(): void {
        console.log(`I am starting the car engine`)
    }
    stopEngine(): void {
        console.log(`I am stopping the car engine`)
    }
    move(): void {
        console.log(`I am moving the car`)
    }
    test() {
        console.log(`I am testing the car`)
    }
}

const toyotaCar = new Car1();
toyotaCar.startEngine();



// 2. Abstract
////

// Idea
abstract class Car2 {
    abstract startEngine(): void 
    abstract stopEngine(): void 
    abstract move(): void 
    test() {
        console.log(`I am testing`)
    } 
}

class ToyotaCar extends Car2 {
    startEngine(): void {
        console.log(`I am starting car engine`);
    }
    stopEngine(): void {
        console.log(`I am stopping the car`)
    }
    move(): void {
        console.log(`I am moving the car`)
    }
}





//
}