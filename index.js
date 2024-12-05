import inquirer from "inquirer";
import fs from "fs";

// this line of code is a function that takes in an object with the following properties: instruct, title, description, tableOfContents, installation, usage, features, credits, license, contributing, tests, questions
const generateReadMe = ({ instruct, title, description, tableOfContents, installation, usage, features, credits, license, contributing, tests, questions } ) =>


`# ${instruct=null}

## Title
${title}

## Description
${description}

## Table of Contents (optional if you have more less than 3 sections)

${tableOfContents}

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Credits](#credits)

## Installation
${installation}

## Usage
${usage}

![screenshot](./assets/images/screenshot.png)

## Features
${features}

## Credits

${credits}

[GitHub Profile](https://www.github.com/username)

## License 
*If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).*
${license}

## How to Contribute
*If you created an application or package and would like other developers to contribute to it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.cont
${contributing}

## Tests
${tests}

## Questions 
* If you have questions about the application, you can contact me via my GitHub profile: [GitHub Profile](https://www.github.com/username)
${questions}
`;

inquirer
    .prompt([
        {
    type: "input",
    name: "instruct",
    message: "instructions: Enter info or return to skip, when you see 'success' a file will be created in the root of your project folder. Press 'enter' to continue.",
},
{
    type: "input",
    name: "title",
    message: "Title: What is the title of your project?",
},
{
    type: "input",
    name: "description",
    message: "Description: Provide a short description your project.",
},
{
    type: "input",
    name: "tableOfContents",
    message: "Table of Contents; Enter the table of contents, number them and separate by a comma.",
    
},
{
    type: "input",
    name: "installation",
    message: "Installation: What are the steps required to install your project?",
},
{
    type: "input",
    name: "usage",
    message: "Usage: Provide instructions on how to use.",
},        
{
    type: "input",
    name: "credits",
    message: "Credits: List your collaborators, if any, and use dash - before their name to create an unordered list. A template is included for links to their GitHub profiles",
},        
{
    type: "input",
    name: "license",
    message: "License: Which license, are you using? If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).",
},
{
    type: "input",
    name: "contributing",
    message: "Contributing: If you would like other developers to contribute, provide information here on how they may do so.",
},
{
    type: "input",
    name: "tests",
    message: "Tests: optional - provide methods by which one may test your program.",
},
{
    type: "email",
    name: "questions",
    message: "Questions: optional - provide an email so developers may submit questions about your application.",
},
])
// this line of code is a function that takes in an object with the following properties: answers
.then((answers) => {
    const readMe = generateReadMe(answers);
// this line of code is a function that takes in a string and a callback function that takes in an error and a success message
    fs.writeFile("README.md", readMe, (err) =>
        err ? console.error(err,) : console.log("Success!")
    );
});

