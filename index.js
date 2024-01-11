// import fs
import {writeFile} from 'fs/promises'
// import required packages
import inquirer from 'inquirer'
import generatemkd from './utils/generatemkd.js'

const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'Please enter your full name.\n',
    default: 'Jesus Marquez',
  },
  {
    type: 'input',
    name: 'email',
    message: '\nPlease enter your email address.',
    default: 'marquez.jay444@gmail.com',
  },
  {
    type: 'input',
    name: 'github',
    message: '\nPlease enter your GitHub username.',
    default: 'Jay-MM',
  },
  { 
    type: "input",
    name:"linkedin",
    message:"\nWhat is your LinkedIn profile sub-domain?",
    default: 'marquez-jesus'
  },
  {
    type: 'input',
    name: 'title',
    message: '\nWhat is the title of your project?',
  },
  {
    type: 'input',
    name: 'motivation',
    message: '\nWhat was your motivation?',
  },
  {
    type: 'input',
    name: 'buildReason',
    message: '\nWhy did you build this project?',
  },
  {
    type: 'input',
    name: 'problemSolved',
    message: '\nWhat problem does it solve?',
  },
  {
    type: 'input',
    name: 'lessonsLearned',
    message: '\nWhat did you learn?',
  },
  {
    type: 'editor',
    name: 'installation',
    message: '\nWhat are the steps required to install your project? \nProvide a step-by-step description of how to get the development environment running.\n',
  },
  {
    type: 'editor',
    name: 'usage',
    message: '\nProvide instructions and examples for use. \nInclude screenshots as needed by:\n (1)creating an `assets/images` folder in your repo\n (2)upload your screenshot to it.\n (3)using the relative filepath, add it to your README using the following syntax:\n\n ![alt text](assets/images/screenshot.png)'
  },

  {
    type: 'editor',
    name: 'credits',
    message: '\nList your collaborators, if any, with links to their GitHub profiles.\nIf you used any third-party assets that require attribution, list the creators with links to their primary web presence.\nIf you followed tutorials, include links.',
  },
  {
    type: 'list',
    name: 'license',
    message: '\nChoose a license for your project. If you need help choosing a license, refer to https://choosealicense.com/.',
    choices: ['MIT' ,'ISC' , 'apache-2.0', 'gpl-3.0', 'none'],
  },
  {
    type: 'confirm',
    name: 'featureConfirm',
    message: '\nDoes this project have alot of features?',
    default: false,
  },
  {
    type: 'editor',
    name: 'features',
    message: '\nList all the features here :',
    when: (answers) => answers.featureConfirm
  },
  {
    type: 'editor',
    name: 'contribute',
    message: 'add contribution guidelines here. \nThe Contributor Covenant (https://www.contributor-covenant.org/version/2/1/code_of_conduct/) is an industry standard\nYou can write your own if you prefer.'
  },

  {
    type: 'confirm',
    name: 'addTests',
    message: '\nDid you include any tests?',
    default: false,
  },
  {
    type: 'editor',
    name: 'tests',
    message: '\nProvide examples on how to run your tests.',
    when: (answers) => answers.addTests,
  },
  
];

const promptUser = () => {
  return inquirer.prompt(questions)
}

const init = () => {
  promptUser()

    .then((answers) => writeFile('./README.md', generatemkd(answers)))
    .then( () => console.log('Successfully generated README.md!'))
    .catch((err) => console.error(err))
}

init()
// inquirer.prompt(questions)
// .then(answers => {
//   console.log(answers)
//   // writes README file
  
//   const readme = generatemkd(answers)

//   fs.writeFile("./README.md", readme, err => {
//     if (err) throw err
//     console.log('README file had been generated successfully')
//   })

// })
// .catch(err => console.log(err))

