function randomSelection(arr){
   let index = Math.floor(Math.random()*arr.length);
   return arr[index];
 }
 
 let happiness = ['Hope', 'Joy', 'Peace', 'Love', 'Kindness', 'Puppies', 'Kittens', 'Tortoise'];
 
 let words = ['Hello', 'World', 'Python', 'JavaScript', 'Rutabaga'];
 
 for (i=0; i < 8; i++){
   console.log(randomSelection(happiness));
 }
 
 //Experiment with the code above. Try to:
//a) Print 3 random selections from each array.
console.log(randomSelection(happiness));
console.log(randomSelection(words));
console.log(randomSelection(happiness));

//b) Have the code randomly pick one array, and then print 2 random items from it.
function pickArray() {
  let randomArray = Math.floor(Math.random()*2)
  if (randomArray === 0) {
    return randomSelection(happiness)
  } else {
    return randomSelection(words)
  }
}
 
console.log(pickArray())

//c) Create a new array, then fill it with one random item from words and happiness. Print the new array.
let newArray = []

for (i = 0; i < 5; i++){
  newArray.push(pickArray())
}
 
console.log(newArray)