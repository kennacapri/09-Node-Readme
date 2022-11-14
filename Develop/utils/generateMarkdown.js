
function renderLicenseBadge(license) {
  let licenseType = license.license;
  let yourLicense = ''
  if(licenseType === 'MIT') {
    yourLicense = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (licenseType === 'Apache License 2.0') {
    yourLicense = `![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)` 
  } else if (licenseType === "BSD 2-Clause 'Simplified' License") {
  yourLicense  = `![License: BSD License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
} else {
  license.license = "N/A"
}
return yourLicense;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## license
  ${renderLicenseBadge(license)}
`
}
//index.js file
const questions = [
  {
      type: "list",
      name: "license",
      message: "please select a license",
      choices: [
        "MIT License",
        "Apache License 2.0",
        'BSD 2-Clause "Simplified" License',
      ],
    }
]

module.exports = generateMarkdown;
