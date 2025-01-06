{
  //

  // OOP - Inheritance

class Parent {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }

    getSleep(numOfHours: string) {
      console.log(`${this.name} will sleep for ${numOfHours}`);
    } 
}


  class Student extends Parent {
    constructor(name: string, age: number, address: string) {
        super(name, age, address);
    }

  }

  const student1 = new Student("Alex", 20, "Sweden");

  class Teacher extends Parent{
    designation: string;

    constructor(name: string, age: number, address: string, designation: string) {
        super(name, age, address);
      this.designation = address;
    }

    takeClass(numOfClasses: number) {
      console.log(`${this.name} will take ${numOfClasses} classes`);
    }
  }

  const teacher1 = new Teacher("Phillip", 40, "Italy", "Proff");

  //
}
