//make a var to hold process.argv array minus the execPath and JS file path -- isolating command-line arguments only
const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);

// const printProfileData = profileDataArr => {
//     for (let i=0; i<profileDataArr.length; i++) {
//         console.log(profileDataArr[i]);
//     }
// };

// printProfileData(profileDataArgs);

const printProfileData = profileDataArr => {
    // This...
    for (let i = 0; i < profileDataArr.length; i += 1) {
      console.log(profileDataArr[i]);
    }
  
    console.log('================');
  
    // Is the same as this...
    // profileDataArr.forEach((profileItem) => {
    //   console.log(randomWord)  });

    //also the same as this...
    profileDataArr.forEach((profileItem => console.log(profileItem)));
   };

  printProfileData(profileDataArgs);

  //this is test on develop branch through develop branch on mac