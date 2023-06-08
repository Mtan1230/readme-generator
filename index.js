const fs = require('fs');
const prompt = require('inquirer').prompt;
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your Github username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is your project name?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install?',
        default: 'npm i'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the project?'
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'How can others contribute?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command should be run to run tests?',
        default: 'npm test'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    {
        type: 'input',
        name: 'location',
        message: 'What is the location you want to store the file?',
        default: './'
    }
];

function writeToFile(data) { 
    const fileName = `${data.location}README.md`;
    const content = generateMarkdown(data);
    fs.writeFile(fileName, content, (err) => 
        err ? console.log(err) : console.log('Created README.md.')
    );
}

function init() {
    prompt(questions)
    .then((answer) => {
        console.log('Generating README...');
        writeToFile(answer);
    })
 }

init();
