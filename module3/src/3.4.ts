{
    // Instanceof Guard
    /////////
  

    class Animal {
        name: string;
        species: string;


        constructor(name: string, species: string) {
            this.name = name;
            this.species = species;
        }


        makeSound() {
            console.log("I am making sound!")
        }

    }

    class Dog extends Animal {
        constructor(name: string, species: string) {
            super(name, species)
        }

        makeBark() {
            console.log("I am barking!")
        }
    }


    class Cat extends Animal {
        constructor(name: string, species: string) {
            super(name, species)
        }

        makeMeaw() {
            console.log("I am Meawing!")
        }
    }

    // const getAnimal = (animal: Animal) => {
    //     if(animal instanceof Dog) {
    //         animal.makeBark();
    //     } else if (animal instanceof Cat) {
    //         animal.makeMeaw();
    //     } else {
    //         animal.makeSound();
    //     }
    // }


    // we can also handle this in a smarter way -
    
    const isDog = (animal: Animal): animal is Dog => {
        return animal instanceof Dog;
    }

    const isCart = (animal: Animal): animal is Cat => {
        return animal instanceof Cat;
    }

    const getAnimal = (animal: Animal) => {
        if(isDog(animal)) {
            animal.makeBark();
        } else if (isCart(animal)) {
            animal.makeMeaw();
        } else {
            animal.makeSound();
        }
    }


    const dog = new Dog("Dog bhai", "dog");
    const cat = new Cat("Cat bhai", "cat");

    

    getAnimal(dog);
    getAnimal(cat);
    







    //
  }
  