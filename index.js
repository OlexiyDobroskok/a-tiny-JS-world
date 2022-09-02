/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: https://github.com/OlexiyDobroskok/a-tiny-JS-world
   Web app: https://olexiydobroskok.github.io/a-tiny-JS-world/
   */

// ======== OBJECTS DEFINITIONS ========

class Animals {
  constructor(species, gender, legs, saying) {
    this.species = species;
    this.gender = gender;
    this.legs = legs;
    this.saying = saying;
  }
}

class Resident extends Animals {
  constructor(species, name, gender, legs, saying, friends) {
    super(species, gender, legs, saying);
    this.friends = friends;
    this.name = name;
  }
  printPresentation() {
    const properties = [
      this.species,
      this.name,
      this.gender,
      this.legs,
      this.hands,
      this.saying,
      this.friends,
    ];
    const activeProperties = properties.filter(
      (prop) => prop !== undefined && prop !== ""
    );
    print(activeProperties.join("; "));
  }
}

class Human extends Resident {
  constructor(species, name, gender, legs, hands, saying, friends) {
    super(species, name, gender, legs, saying, friends);
    this.hands = hands;
  }
}

class Cat extends Resident {
  constructor(species, name, gender, legs, saying, friends) {
    super(species, name, gender, legs, saying, friends);
  }
}

class Dog extends Resident {
  constructor(species, name, gender, legs, saying, friends) {
    super(species, name, gender, legs, saying, friends);
  }
}

class CatWoman extends Human {
  constructor(species, name, gender, legs, hands, saying, friends) {
    super(species, name, gender, legs, hands, saying, friends);
  }
}

const man = new Human("human", "José", "male", 2, 2, "Hola, amigo!", [
  "Nerea",
  "Lalo",
]);
const woman = new Human(
  "human",
  "Martina",
  "female",
  2,
  2,
  "Buenos días!",
  "Pako"
);
const cat = new Cat("cat", "Lalo", "female", 4, "¡miau miau!", [
  "José",
  "Nerea",
]);
const dog = new Dog("dog", "Pako", "male", 4, "¡guau guau!", "Martina");

const catwoman = new CatWoman(
  "human",
  "Nerea",
  "female",
  2,
  2,
  cat.saying + " muchachos!",
  ["José", "Lalo"]
);

function showATinyWorldResidents(residents) {
  residents.forEach((resident) => resident.printPresentation());
}

const aTinyWorldResidents = [man, woman, cat, dog, catwoman];

showATinyWorldResidents(aTinyWorldResidents);
