{
  //

  // OOP

  // class Animal {
  //     name: string;
  //     species: string;
  //     sound: string;

  //     constructor(name: string, species: string, sound: string) {
  //         this.name = name;
  //         this.species = species;
  //         this.sound = sound;
  //     }

  //     makeSound() {
  //         console.log(`The ${this.name} says ${this.sound}`);
  //     }
  // }

  // const dog = new Animal("German Shepherd", "Dog", "Ghew Ghew");
  // const cat = new Animal("Persian", "Cat", "Meaw Meaw");

  // dog.makeSound();
  // cat.makeSound();

  // In the avobe example, we have to write a lot of repititives codes. For easier solution typescirpt has parameter properteis called public
  // if we use it we do not need to write the type as property and also we do not need to write it inside contructor

  // so the same above code with parameter properties would look like htis -->

  class Animal {
    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {}

    makeSound() {
      console.log(`The ${this.name} says ${this.sound}`);
    }
  }

  const dog = new Animal("German Shepherd", "Dog", "Ghew Ghew");
  const cat = new Animal("Persian", "Cat", "Meaw Meaw");

  dog.makeSound();
  cat.makeSound();



  
  //
}
