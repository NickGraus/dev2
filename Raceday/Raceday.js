let raceNumber = Math.floor(Math.random() * 1000);
let registerTime = true;
let runnerAge = 19;

if(runnerAge > 18 && registerTime) {
  raceNumber += 1000;
}

if(runnerAge > 18 && registerTime) {
  console.log("Your racenumber is: " + raceNumber + ". Your race will start at 9:30am.");
} else if(runnerAge > 18 && !registerTime){
  console.log("Your racenumber is: " + raceNumber + ". Your race will start at 11:00am.");
} else if(runnerAge < 18){
  console.log("Your racenumber is: " + raceNumber + ". Your race will start at 12:30pm.");
} else {
  console.log("Please visit the registration desk");
}
