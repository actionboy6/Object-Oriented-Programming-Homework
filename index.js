//running v11.17.0 of VSCode. Unable to run index.js via node.js
const inquirer = require('inquirer');
const path = require('path')
const fs = require('fs');
const { errorMonitor } = require('events');
const jest = require('jest');
const Manager = require('./lib/manager');
const Interim = require('./lib/interim');
const Engineer = require('./lib/Engineer');
const { listenerCount } = require('process');
const file = path.resolve(__dirname, 'dist');
const distFile = path.join(file, 'team.html');
const buildHTML = require('./src/generate')


const teamMembers = []
function menu () {
    function createManager () {
inquirer
    .prompt([
        {
            type: "input",
            name: "ManagerName",
            message: "What is your manager name?",
        },
        // {
        //     type: "input",
        //     name: "position",
        //     message: "What is your current role in the company?",
        // },
        {
            type: "input",
            name: "managerId",
            message: "Please input your manager ID",
            // Unable to validate employee ID's due to file not existing.
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is your work email?"
        },
        {
            type: "input",
            name: "managerOffice",
            message: "What is your office number?"
        }

        // {
        //     type: "list",
        //     name: "role",
        //     message: "Are you a ",
        //    choices: [
        //     "Manager",
        //     "Engineer",
        //     "Student",
        //    ]
        // },
        // {
        //     input: "input",
        //     name: "Github",
        //     message: "What is your Github?",
        // },
        // // {
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
            const manager = new Manager(
                answers.managerName, answers.managerId, answers.managerEmail, answers.managerOffice
            );
                teamMembers.push (manager);
                createTeam ();
        })
        .catch((error) => {
            if (error.isTtyError) {
                console.log("console enviornment not supported")
            } else {
                console.log(error)
            }
          
        }) 
    };
        function createTeam () {
            inquirer.prompt ([
                {
                type: 'list',
                name: 'numberChoice',
                message: 'Choose team member',
                choices: ['engineer', 'intern', 'none'],
                }
            ])
            .then ((userAnswer) => {
                if (userAnswer.numberChoice === 'engineer') {
                    addEngineer ();
                } else if (userAnswer.numberChoice === 'intern') {
                    addIntern ();
                } else {
                    teamBuild();
                }
                
            })
        }
        function addEngineer () {
            inquirer
    .prompt([
        {
            type: "input",
            name: "EngineerName",
            message: "What is your engineer name?",
        },
        // {
        //     type: "input",
        //     name: "position",
        //     message: "What is your current role in the company?",
        // },
        {
            type: "input",
            name: "engineerId",
            message: "Please input your engineer ID",
            // Unable to validate employee ID's due to file not existing.
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What is your work email?"
        },
        {
            type: "input",
            name: "engineerGithub",
            message: "What is your Github?"
        }

        // {
        //     type: "list",
        //     name: "role",
        //     message: "Are you a ",
        //    choices: [
        //     "Manager",
        //     "Engineer",
        //     "Student",
        //    ]
        // },
        // {
        //     input: "input",
        //     name: "Github",
        //     message: "What is your Github?",
        // },
        // // {
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
            const engineer = new Engineer(
                answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub
            );
                teamMembers.push (engineer);
                createTeam ();
        })
        .catch((error) => {
            if (error.isTtyError) {
                console.log("console enviornment not supported")
            } else {
                console.log(error)
            }
          
        }) 
        };
        function addIntern () {
            console.log('intern')
        }
        function teamBuild () {
            fs.writeFileSync (distFile, buildHTML (teamMembers), 'utf-8')
        }
        











createManager ();
    };

    menu();