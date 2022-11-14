// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
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
        name: 'table of contents',
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
        type: 'input',
        name: 'license',
        message: 'what is the title of your README?',
        validate: (titleInput) => {
            if (licenseInput) {
                return true;
            } else {
                console.log('Please enter a title for your README!');
            return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contributing',
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
        name: 'tests',
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
        name: 'questions',
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

];
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
