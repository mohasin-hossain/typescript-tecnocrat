{
  //

  // Static

//   class Counter {
//     count: number = 0;
//     increment() {
//       return (this.count = this.count + 1);
//     }
//     decrement() {
//       return (this.count = this.count - 1);
//     }
//   }

//   const instance1 = new Counter();
//   console.log(instance1.increment()); // result = 1  --> Bcz different memory

//   const instance2 = new Counter();
//   console.log(instance2.increment()); // result = 1 --> Bcz different memory

  // if we want to make the memory centralized 


//   class Counter {
//     static count: number = 0;
//     increment() {
//       return (Counter.count = Counter.count + 1);
//     }
//     decrement() {
//       return (Counter.count = Counter.count - 1);
//     }
//   }

//   const instance1 = new Counter();
//   console.log(instance1.increment()); // result = 1  --> Bcz different memory

//   const instance2 = new Counter();
//   console.log(instance2.increment()); // result = 2 --> Bcz different memory


// we can also make the mehtods static 

class Counter {
    static count: number = 0;
    static increment() {
      return (Counter.count = Counter.count + 1);
    }
    static decrement() {
      return (Counter.count = Counter.count - 1);
    }
  }

//   const instance1 = new Counter(); // it is not needed, as static methods can be called directly 
  console.log(Counter.increment()); // result = 1  --> Bcz different memory

//   const instance2 = new Counter();
  console.log(Counter.increment()); // result = 2 --> Bcz different memory




  //
}
