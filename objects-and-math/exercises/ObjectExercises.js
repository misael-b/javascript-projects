let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   move: function () {
      return Math.ceil(Math.random() * 10);
   }
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5, 
   move: function () {
      return Math.ceil(Math.random() * 10);
   }
};

let superChimpTw0 = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6, 
   move: function () {
      return Math.ceil(Math.random() * 10);
   }
}

let dog = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5, 
   move: function () {
      return Math.ceil(Math.random() * 10);
   }
}

let animalFive = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1, 
   move: function () {
      return Math.ceil(Math.random() * 10);
   }
}

// After you have created the other object literals, add the astronautID property to each one.
function addAstronautID(animal,newID) {
   return(animal["AstronautID"]= newID)
};



let idArray = []

for (i = 0; i < 5; i++) {
   let idNumber = Math.ceil(Math.random() * 10)
   
   while (idArray.includes(idNumber)) {
      idNumber = Math.ceil(Math.random() * 10);
   }
   idArray.push(idNumber);
}

let animals = [superChimpOne, salamander, superChimpTw0, dog, animalFive]; 

for (i = 0; i < animals.length; i++){
   addAstronautID(animals[i], idArray[i])
}



// Create an array to hold the animal objects.

function crewReports(crewMember) {
   return `${crewMember["name"]} is a ${crewMember["species"]}. They are ${crewMember["age"]} years old and ${crewMember["mass"]} kilograms. Their ID is ${crewMember["AstronautID"]}.`
}

// Print out the relevant information about each animal.
for (i = 0; i < animals.length; i++){
   console.log(crewReports(animals[i]));
}

// Start an animal race!

function fitnessTest(animalArray) {
   let results = []; 
   for (i = 0; i < animalArray.length; i++){
      let steps = 0
      let turns = 0; 
     while (steps < 20) {
        let newSteps = animalArray[i].move();
        steps += newSteps;
        turns += 1;
      } 
      results.push(`${animalArray[i].name}took ${turns} turns to take 20 steps.`)
   }
   return results
   
}

console.log(fitnessTest(animals));

