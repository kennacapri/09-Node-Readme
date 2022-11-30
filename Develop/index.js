const inquirer = require("inquirer");
const fs = require("fs");


//table of contents for README
const createREADME = (
  title,
  description,
  installation,
  usage,
  license,
  contributions,
  tests,
  questions,
  username,
  email
) => {
  const README =`
  # ${title}
  ![badge](https://img.shields.io/badge/license-${license}-brightgreen)<br />

  ## Description
  ${description}
  
  ## Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributions](#contributions)
  - [Tests](#tests)
  - [Questions](#questions)
   
  ## Installation
  ${installation}
  
  ## Usage
  ${usage}

  ## License
  ![badge](https://img.shields.io/badge/license-${license}-brightgreen)
  <br/>
  This application is covered by the ${license} license. 
  
  ## Contributions
  ${contributions}
  
  ## Tests
  ${tests}

  ## Questions
  ${questions}<br/>
  Find me on GitHub: [${username}](https://github.com/${username})<br/>
  Email me with any questions: ${email}<br /><br />
  `;

  return README;
};

// questions that user will answer
inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "what is the title of your README?",
      validate: (titleInput) => {
        if (titleInput) {
          return true;
        } else {
          console.log("Please enter a title for your README!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "description",
      message: "write a short description of your project",
      validate: (descriptionInput) => {
        if (descriptionInput) {
          return true;
        } else {
          console.log("Please add a description for your README!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "installation",
      message: "how to install your application?",
      validate: (titleInput) => {
        if (titleInput) {
          return true;
        } else {
          console.log("Please enter an installation guide!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "usage",
      message: "How are you going to use your application?",
      validate: (usageInput) => {
        if (usageInput) {
          return true;
        } else {
          console.log(
            "Please add info on how you are going to use your project!"
          );
          return false;
        }
      },
    },
    {
      type: "list",
      name: "license",
      message: "please select a license",
      choices: [
        "MIT",
        "Apache_2.0",
        'BSD_2--Clause',
      ],
    },
    {
      type: "input",
      name: "contributions",
      message: "who are the contributors of your project?",
      validate: (contInput) => {
        if (contInput) {
          return true;
        } else {
          console.log("Please add any contributions!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "tests",
      message: "what are the test instructions if you have any?",
      validate: (testInput) => {
        if (testInput) {
          return true;
        } else {
          console.log("Please add test instructions if applicable!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "questions",
      message: "what are possible questions if you have any?",
      validate: (questionsInput) => {
        if (questionsInput) {
          return true;
        } else {
          console.log("Please add applicable questions to your README!");
          return false;
        }
      },
    },
    {
        type: "input",
        name: "username",
        message: "what is your GitHub username?",
        validate: (questionsInput) => {
          if (questionsInput) {
            return true;
          } else {
            console.log("Please enter your GitHub username!");
            return false;
          }
        },
      },
    {
      type: "input",
      name: "email",
      message: "what is your email?",
      validate: (questionsInput) => {
        if (questionsInput) {
          return true;
        } else {
          console.log("Please add your email address!");
          return false;
        }
      },
    },
  ])
  .then((answers) => {
    const {
      title,
      description,
      installation,
      usage,
      license,
      contributions,
      tests,
      questions,
      username,
      email,
    } = answers;

    console.log(answers);
    fs.writeFile(
      "README.md",
      createREADME(
        title,
        description,
        installation,
        usage,
        license,
        contributions,
        tests,
        questions,
        username,
        email
      ),

      // if there is an error, message saying "something went wrong" will display
      (error) => {
        if (error) throw error;
      }
    );
  })
  .catch((error) => {
    if (error.isTtyError) {
    } else {
      `Something went wrong`;
    }
  });
