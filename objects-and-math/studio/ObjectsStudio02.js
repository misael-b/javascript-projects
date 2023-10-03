// Code your orbitCircumference function here:
function orbitCircumference(radiusOrAltitude) {

  let c = 2 * Math.PI * radiusOrAltitude;
  return c
}

// Code your missionDuration function here:
function missionDuration(numOrbits, radius = 2000, orbitalSpeed= 28000) {
  let time = Math.round(((orbitCircumference(radius)*numOrbits) / orbitalSpeed) * 100) / 100;
  // console.log(`The mission will travel ${orbitCircumference(radius)} km around the planet, and it will take ${time} hours to complete.'`)
return time
};



// Candidate data & crew array.
let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
let crew = [candidateA, candidateB, candidateC, candidateD, candidateE, candidateF];

 
// Copy/paste your selectRandomEntry function here:
function selectRandomEntry(numOfEntries) {
  return numOfEntries[Math.floor(Math.random() * 6)]
}
let idNumbers = [291, 414, 503, 599, 796, 890];
let choosenForLaunchID = [selectRandomEntry(idNumbers)];


function buildCrewArray(selectedIDs, candidates) {
  let crew = [];
  for (let i = 0; i < selectedIDs.length; i++) {

    for (let j = 0; j < candidates.length; j++) {

      if (selectedIDs[i] === candidates[j].astronautID) {
        crew.push(candidates[j])
      }
    }
  };
  return crew
}

let choosenObject = buildCrewArray(choosenForLaunchID, crew)[0]



// Code your oxygenExpended function here:
function oxygenExpended(candObject, numOrbits = 3, radius = 2000, orbitalSpeed = 28000) {
  let time = missionDuration(numOrbits, radius, orbitalSpeed)
  let oxygenUsed = Math.round(candObject.o2Used(time) * 1000) / 1000;
  
  return `${candObject.name} will perform the spacewalk, which will last ${missionDuration(numOrbits, radius, orbitalSpeed)} hours and require ${oxygenUsed} kg of oxygen.`
}

console.log(oxygenExpended(choosenObject, 9, 1000, 280));

 