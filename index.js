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
    message: 'Please enter your email address.\n',
    default: 'marquez.jay444@gmail.com',
  },
  {
    type: 'input',
    name: 'github',
    message: 'Please enter your GitHub username.\n',
    default: 'Jay-MM',
  },
  { 
    type: "input",
    name:"linkedin",
    message:"What is your LinkedIn profile sub-domain?\n",
    default: 'marquez-jesus'
  },
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?\n',
  },
  {
    type: 'input',
    name: 'motivation',
    message: 'What was your motivation?\n',
  },
  {
    type: 'input',
    name: 'buildReason',
    message: 'Why did you build this project?\n',
  },
  {
    type: 'input',
    name: 'problemSolved',
    message: 'What problem does it solve?\n',
  },
  {
    type: 'input',
    name: 'lessonsLearned',
    message: 'What did you learn?\n',
  },
  {
    type: 'editor',
    name: 'installation',
    message: 'What are the steps required to install your project? \nProvide a step-by-step description of how to get the development environment running.\n',
  },
  {
    type: 'editor',
    name: 'usage',
    message: 'Provide instructions and examples for use. \nInclude screenshots as needed by:\n (1)creating an `assets/images` folder in your repo\n (2)upload your screenshot to it.\n (3)using the relative filepath, add it to your README using the following syntax:\n ![alt text](assets/images/screenshot.png)\n'
  },

  {
    type: 'editor',
    name: 'credits',
    message: 'List your collaborators, if any, with links to their GitHub profiles.\nIf you used any third-party assets that require attribution, list the creators with links to their primary web presence.\nIf you followed tutorials, include links.\n',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project. If you need help choosing a license, refer to https://choosealicense.com/.\n',
    choices: ['MIT' ,'ISC' , 'apache-2.0', 'gpl-3.0', 'none'],
  },
  {
    type: 'confirm',
    name: 'featureConfirm',
    message: 'Does this project have alot of features?',
    default: false,
  },
  {
    type: 'editor',
    name: 'features',
    message: 'List all the features here :',
    when: (answers) => answers.featureConfirm
  },
  {
    type: 'confirm',
    name: 'contributeConfirm',
    message: 'Do you want to add / create any contribution guidelines?',
    default: false,
  },
  {
    type: 'editor',
    name: 'contribute',
    message: 'Add contribution guidelines here. \n\nThe Contributor Covenant (https://www.contributor-covenant.org/version/2/1/code_of_conduct/) is an industry standard\n\nYou can write your own if you prefer.',
    when: (answers) => answers.contributeConfirm
  },

  {
    type: 'confirm',
    name: 'addTests',
    message: 'Did you include any tests?',
    default: false,
  },
  {
    type: 'editor',
    name: 'tests',
    message: 'Provide examples on how to run your tests.',
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

