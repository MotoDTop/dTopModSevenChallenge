import inquirer from "inquirer";
import fs from "fs";


const inquirer = require("inquirer");
const fs = require("fs");

const generateReadMe = ({ title, description, tableOfContents, installation, usage, credits, License, howToContribute, tests } ) =>
`# ${title}
## Description

${description}

## Table of Contents

${tableOfContents}

## Installation

${installation}

## Usage

${usage}

## Credits

${credits}

## License

${License}

## Features

${features}

## How to Contribute

${howToContribute}

## Tests

${tests}

## Questions

${questions}
`;

inquirer
    .prompt([
        {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
},
{
    type: "input",
    name: "description",
    message: "Provide a short description your project?",
},
{
    type: "input",
    name: "tableOfContents",
    message: " 'Enter the table of contents, (use newline fore each item):'
},
{
    type: "input",
    name: "title",
    message: "What is the title of your project?",
},        
{
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project?",
},
{
    type: "input",
    name: "usage",
    message: "Provide instructions and examples for use?",
},        
{
    type: "input",
    name: "screenShot",
    message: "To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative file path, add it to your README using the following syntax: ![alt text](assets/images/screenshot.png)",
},
{
    type: "input",
    name: "credits",
    message: "List your collaborators, if any, with links to their GitHub profiles '\t'. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section '\t'?",
},        
{
    type: "input",
    name: "license",
    message: "The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).?",
},
       
{
    type: "input",
    name: "features",
    message: "If your project has special features, list them here?",
},
{   type: "input",  
    name: "howToContribute",
    message: "If you created an application or package and would like other developers to contribute to it, you will want to add guidelines for how to do so?",   
},
{
    type: "input",
    name: "usage",
    message: "Provide instructions and examples for use?",
},    
{
    type: "input",
    name: "tests",
    message: "Go the extra mile and write tests for your application. Then provide examples on how to run them?",
},        
{
    type: "input",
    name: "questions",
    message: "If you have any questions, please contact me at [GitHub], [email]?",
},
])
.then((answers) => {
    const readMe = generateReadMe(answers);
    return writeFileAsync("README.md", readMe);
})
.then(() => console.log("Successfully wrote to README.md"))
.catch((err) => console.error(err));

fs.writeFile("README.md", readMe, (err) => {
    if (err) {
        throw err;
    }
    console.log("README.md has been created!");
});

const init = () => {
    promptUser();
}
init();
