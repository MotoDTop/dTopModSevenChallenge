import inquirer from "inquirer";
import fs from "fs";

const generateReadMe = ({ title, description, tableOfContents, installation, usage, credits, license} ) =>
`## Title
${title}

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

${license}
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
    message: "Enter the table of contents",
    
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
    name: "credits",
    message: "List your collaborators, if any, with links to their GitHub profiles?",
},        
{
    type: "input",
    name: "license",
    message: "If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).?",
},
])
.then((answers) => {
    const readMe = generateReadMe(answers);

    fs.writeFile("README.md", readMe, (err) =>
        err ? console.error(err) : console.log("Success!")
    );
});

