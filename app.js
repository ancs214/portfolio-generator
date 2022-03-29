//make a var to hold process.argv array minus the execPath and JS file path -- isolating command-line arguments only
// const profileDataArgs = process.argv.slice(2, process.argv.length);
// console.log(profileDataArgs);

// const printProfileData = profileDataArr => {
//     for (let i=0; i<profileDataArr.length; i++) {
//         console.log(profileDataArr[i]);
//     }
// };

// printProfileData(profileDataArgs);

// const printProfileData = profileDataArr => {
//     // This...
//     for (let i = 0; i < profileDataArr.length; i += 1) {
//       console.log(profileDataArr[i]);
//     }
  
//     console.log('================');
  
//     // Is the same as this...
//     // profileDataArr.forEach((profileItem) => {
//     //   console.log(randomWord)  });

//     //also the same as this...
//     profileDataArr.forEach((profileItem => console.log(profileItem)));
//    };

//   printProfileData(profileDataArgs);


const profileDataArgs = process.argv.slice(2, process.argv.length);
// const name = profileDataArgs[0];
// const github = profileDataArgs[1];
//above is same as:
const [name, github] = profileDataArgs;



const generatePage = (userName, githubName) => {
    return `
  <!DOCTYPE html> 
  <html lang="en"> 
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
  </head>

  <body>
    <h1>${name}</h1>
    <h2><a href="https://github.com/${github}">Github</a></h2>
  </body>
  </html>
  `;
};


  console.log(name, github);
  console.log(generatePage(name, github));