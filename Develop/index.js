// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const createREADME = (title, description, contents, installation, usage, license, contributing, tests, questions ) => {
const README = 
`#${title}

##Description
${description}

##Contents
${contents}

##Installation
${installation}

##Usage
${usage}

##License
${license}
Please refer to license in repo.

##Contributions
${contributing}

##Tests
${tests}

##Questions
${questions}
`;

}

const questions = [

    {
        type: 'input',
        name: 'title',
        message: 'what is the title of your README?',
        validate: (titleInput) => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a title for your README!');
            return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'write a short description of your project',
        validate: (descriptionInput) => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please add a description for your README!');
            return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contents',
        message: 'only useful if README file is long',
        validate: (contentInput) => {
            if (contentInput) {
                return true;
            } else {
                console.log('Please add table of contents if your README file is long!');
            return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'what is the title of your README?',
        validate: (titleInput) => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter an installation guide!');
            return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'what is the title of your README?',
        validate: (usageInput) => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please add info on how you are going to use your project!');
            return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'please select a license',
        choices: [
            'MIT License',
            'Apache License 2.0',
            'BSD 2-Clause "Simplified" License'
        ]

    },
    {
        type: 'input',
        name: 'contributing',
        message: 'who are the contributors of your project?',
        validate: (contInput) => {
            if (contInput) {
                return true;
            } else {
                console.log('Please add any contributions!');
            return false;
            }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'what are the test instructions if you have any?',
        validate: (testInput) => {
            if (testInput) {
                return true;
            } else {
                console.log('Please add test instructions inf applicable!');
            return false;
            }
        }
    },
    {
        type: 'input',
        name: 'questions',
        message: 'what are possible questions if you have any?',
        validate: (questionsInput) => {
            if (questionsInput) {
                return true;
            } else {
                console.log('Please add applicable questions to your README!');
            return false;
            }
        }
    },

];
module.exports = questions;

// TODO: Create a function to write README file
function linkFile(fileName, data) {
    const fileData = generateMarkdown(data);
    fs.linkFile(fileName, fileData, (error) => {});
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => linkFile('README.,md', answers));
}

        

// Function call to initialize app
init();
