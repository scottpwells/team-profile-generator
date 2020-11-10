const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

var teamMembers = [];

function switchStatement() {
    inquirer.prompt([{
        type: "list",
        name: "switch",
        message: "Would you like to add an employee?",
        choices: ["Manager", "Engineer", "Intern", "Done"]
    }]).then(response => {
        switch(response.switch) {
            case "Manager":
             askManager();
              break;
            case "Engineer":
                askEngineer();
              break;
            case "Intern":
            askIntern();
            default:
             buildTeam()
          }
    })
}

function buildTeam() {
    if(!fs.existsSync(OUTPUT_DIR)) {

        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(teamMembers), "utf-8" )

}

const ManagerQuestions = [
    {
        type: "input",
        name: "managerName",
        message: "What is your name?",
        validate: answer => {
            if(answer !== "") {
                return true;
            } 
            return "Please enter your name"
        }
    },
    {
        type: "input",
        name: "managerID",
        message: "What is your ID?",
        validate: answer => { 
            const pass = answer.match(/^[1-9]\d*$/)
            if(pass) {
                return true;
            }
            return "Please enter a valid number"
         }
    },
    {
        type: "input",
        name: "managerEmail",
        message: "What is your Email",
        validate: answer => {
            const email = answer.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
            if(email) {
                return true;
            }   
            return "please enter a valid email"
        }
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is your office number?",
    }
]

    const EngineerQuestions = [
        {
            type: "input",
            name: "engineerName",
            message: "What is your name?",
        },
        {
            type: "input",
            name: "engineerID",
            message: "What is your ID?",
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What is your Email",

        },
        {
            type: "input",
            name: "Github",
            message: "What is your Github username?",
        }
    ]
    
const InternQuestions = [
    {
        type: "input",
        name: "internName",
        message: "What is your name?",
    },
    {
        type: "input",
        name: "internID",
        message: "What is your ID?",
    },
    {
        type: "input",
        name: "internEmail",
        message: "What is your Email",
    },
    {
        type: "input",
        name: "schoolName",
        message: "What school did you attend?",
    },


]

function askManager() {
inquirer.prompt(ManagerQuestions)
.then(response => {
    const manager = new Manager(response.managerName, response.managerID, response.managerEmail, response.officeNumber)
    teamMembers.push(manager);
    switchStatement()
})

}
function askEngineer() {
    inquirer.prompt(EngineerQuestions)
    .then(response => {
        const engineer = new Engineer(response.engineerName, response.engineerID, response.engineerEmail, response.Github)
        teamMembers.push(engineer);
        switchStatement()
    })
}
    function askIntern() {
        inquirer.prompt(InternQuestions)
        .then(response => {
            const intern = new Intern(response.internName, response.internID, response.internEmail, response.schoolName)
            teamMembers.push(intern);
            switchStatement()
        })
    
    }

askManager();

// array of questions for Engineer and engineer Intern
// matching the Constructor

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```