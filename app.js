//**************NOTES******************/
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
//**************NOTES******************/


const inquirer = require('inquirer');
//console.log(inquirer) to verify inquirer has been successfully imported into script
// const fs = require('fs');
// const generatePage = require('./src/page-template.js');


//******************NOTES************************/
//got rid of process.arv stuff since we are now getting our info from inquiry module
// const profileDataArgs = process.argv.slice(2);
// // const name = profileDataArgs[0];
// // const github = profileDataArgs[1];
// //above is same as:
// const [name, github] = profileDataArgs;
//*****************************************/


// const pageHTML = generatePage(name, github);

// fs.writeFile('./index.html', pageHTML, err => {
//   if (err) throw err;

//   console.log('Portfolio complete! Check out index.html to see the output!');
// });

//now when you make a command line argument (i.e. node app jane janehub), the result shows in the html template


const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username (Required)',
            validate: userNameInput => {
                if (userNameInput) {
                    return true;
                } else {
                    console.log('Please enter your username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'about',
            message: 'Provide some information about yourself: ',
        }
    ]);
};



//pass in an argument portfolioData so we can add project data to the argument variable and then call the function with the modified data
const promptProject = portfolioData => {
    // If there's no 'projects' array property, create an empty projects array
    if (!portfolioData.projects) {
        portfolioData.projects = [];
    }
    console.log(`
  =================
  Add a New Project
  =================
  `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)',
            validate: projectDescription => {
                if (projectDescription) {
                    return true;
                } else {
                    console.log('Please enter your project description!');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter the GitHub link to your project. (Required)',
            validate: link => {
                if (link) {
                    return true;
                } else {
                    console.log('Please enter your Github link!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'feature',
            message: 'Would you like to feature this project?',
            default: false
        },
        {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'Would you like to enter another project?',
            default: false
        }
    ])
    .then(projectData => {
        //push project data to array
        portfolioData.projects.push(projectData);
        //if user selects yes when asked if they want to add another project, then run the function again for their next project,
        //else return portfolio data -- this data will be connected to the promptProject function since it is passed in as an argument
        if (projectData.confirmAddProject) {
            return promptProject(portfolioData);
          } else {
            return portfolioData;
          }
        })
};

//since these are promises, it is asynchronous and will need to use the .then statement for order of events
promptUser()
.then(promptProject)
.then(portfolioData => {
  console.log(portfolioData);
});