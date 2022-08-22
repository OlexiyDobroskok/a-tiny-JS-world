/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: _put repo URL here_
   Web app: _put project's github pages URL here_
   */

// ======== OBJECTS DEFINITIONS ========

const aTinyWorld = [
  {
    man: {
      species: "human",
      name: "José",
      gender: "male",
      legs: 2,
      hands: 2,
      saying: "Hola, amigo!",
      friends: ["Nerea", "Lalo"],
    },
  },
  {
    woman: {
      species: "human",
      name: "Martina",
      gender: "female",
      legs: 2,
      hands: 2,
      saying: "Buenos días!",
      friends: ["Pako"],
    },
  },
  {
    cat: {
      species: "cat",
      name: "Lalo",
      gender: "female",
      legs: 4,
      hands: 0,
      saying: "¡miau miau!",
      friends: ["José", "Nerea"],
    },
  },
  {
    dog: {
      species: "dog",
      name: "Pako",
      gender: "male",
      legs: 4,
      hands: 0,
      saying: "¡guau guau!",
      friends: ["Martina"],
    },
  },
  {
    сatwoman: {
      species: "human",
      name: "Nerea",
      gender: "female",
      legs: 2,
      hands: 2,
      saying: " muchachos!",
      friends: ["José", "Lalo"],
    },
  },
];

// ======== OUTPUT ========
aTinyWorld.forEach((el) => print(`${obj.prop1}; ${obj.prop2}; ${obj.prop3};`));

/* Use print(message) for output.
   Default tag for message is <pre>. Use print(message,'div') to change containing element tag.

   Message can contain HTML markup. You may also tweak index.html and/or styles.css.
   However, please, REFRAIN from improving visuals at least until your code is reviewed
   so code reviewers might focus on a single file that is index.js.
   */

/* Print examples:
   print('ABC');
   print('<strong>ABC</strong>');
   print('<strong>ABC</strong>', 'div');

   print('human; John; male; 2; 2; Hello world!; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny', 'div');
   */
