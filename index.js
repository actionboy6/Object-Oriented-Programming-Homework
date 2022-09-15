//running v11.17.0 of VSCode. Unable to run index.js via node.js
const inquirer = require('inquirer');
const fs = require('fs');
const buildHTML = require('./generate')
const { errorMonitor } = require('events');
const jest = require('jest')


const test = []

inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name?",
        },
        // {
        //     type: "input",
        //     name: "position",
        //     message: "What is your current role in the company?",
        // },
        {
            type: "input",
            name: "id",
            message: "Please input your employee ID",
            // Unable to validate employee ID's due to file not existing.
        },
        {
            type: "input",
            name: "email",
            message: "What is your work email?"
        },
        {
            type: "list",
            name: "role",
            message: "Are you a ",
           choices: [
            "Manager",
            "Engineer",
            "Student",
           ]
        },
        {
            input: "input",
            name: "Github",
            message: "What is your Github?",
        },
        // {
        //   type: "list",
        //   name: "student",
        //   message: "Are you a student?",
        //   choices: [
        //     "Yes",
        //     "No",
        //   ]
        //   //if yes, input school user is attending.
        // },
    ])

        .then((answers) => {
            
            //  fs.writeFileSync ("index.html", JSON.stringify(buildHTML(answers) ))
           //deleted render(answers) and replaced with JSON.stringify 
            
        })
        .catch((error) => {
            if (error.isTtyError) {
                console.log("console enviornment not supported")
            } else {
                console.log(error)
            }
            
        })