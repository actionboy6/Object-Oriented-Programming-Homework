//running v11.17.0 of VSCode. Unable to run index.js via node.js
const inquirer = require('inquirer')
const fs = require('fs')
const generate = require('generate.js')
const { createDecipheriv } = require('crypto')

inquirer
    .createPromptModule([
        {
            type: "input",
            name: "name",
            message: "What is your name?",
        },
        {
            type: "input",
            name: "position",
            message: "What is your current role in the company?",
        },
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
            name: "office",
            message: "Do you have an office?",
            choices: "Yes",
            choices: "No",
            //if yes, input office number
        },
        {
            input: "list",
            name: "Github",
            message: "Do you have a Github account?",
            choices: "Yes",
            choices: "No",
            //if yes, input Github account
        },
        {
          type: "list",
          name: "student",
          message: "Are you a student?",
          choices: "Yes",
          choices: "No",
          //if yes, input school user is attending.
        },
    ])
    .then((answers) => {
        fs.writeFile("index.html", "style.css" , generate(answers) , (err) => {
            if(err) throw err;
            console.log('HTML has been created')
            console.log('style.css has been created')
        })
    })