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


//using 'require statement', which is a built-in function that is globally available in node.js
//it allows app.js to access the 'fs module' functions
//modules: any reusable piece of code from the core library or even a separate JS file



const fs = require('fs');

const profileDataArgs = process.argv.slice(2);
// const name = profileDataArgs[0];
// const github = profileDataArgs[1];
//above is same as:
const [name, github] = profileDataArgs;

const generatePage = (name, github) => {
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

fs.writeFile('./index.html', generatePage(name, github), err => {
  if (err) throw new Error(err);

  console.log('Portfolio complete! Check out index.html to see the output!');
});

  //now when you make a command line argument (i.e. node app jane janehub), the result shows in the html template