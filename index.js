// import required packages
import inquirer from 'inquirer'

const questions = [
  {
    type: 'input',
    name: 'username',
    message: '\nPlease enter your GitHub username.',
    default: 'Jay-MM',
  },
  {
    type: 'input',
    name: 'email',
    message: '\nPlease enter your email address.',
    default: 'marquez.jay444@gmail.com',
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
    message: '\nWhat are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
  },
  {
    type: 'editor',
    name: 'usage',
    message: '\nProvide instructions and examples for use. Include screenshots as needed.',
  },
  {
    type: 'editor',
    name: 'credits',
    message: '\nList your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. If you followed tutorials, include links to those here.',
  },
  {
    type: 'list',
    name: 'license',
    message: '\nChoose a license for your project. If you need help choosing a license, refer to https://choosealicense.com/.',
    choices: ['mit' ,'isc' , 'apache-2.0', 'gpl-3.0', 'none'],
  },
  {
    type: 'confirm',
    name: 'addTests',
    message: 'Would you like to add any tests?',
    default: false,
  },
  {
    type: 'editor',
    name: 'testExamples',
    message: '\nProvide examples on how to run your tests.',
    when: (answers) => answers.addTests,
  },
  
];



inquirer.prompt(questions)
.then(answers => console.log(answers))
.catch(err => console.log(err))
