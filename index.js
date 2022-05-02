const inquirer = require('inquirer');
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

var manager;
var engineers = [];
var interns = [];

inquirer
  .prompt([
    {
      type: "input",
      message: "What is the Manager's Name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is the Manager's ID?",
      name: "id",
    },
    {
      type: "input",
      message: "What is the Manager's email?",
      name: "email",
    },
    {
      type: "input",
      message: "What is the Manager's office number?",
      name: "officeNumber",
    },
  ])
  .then((answers) => {
    console.log(answers);
    manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
    showMainMenu();
  });

function showMainMenu() {
  inquirer
    .prompt([
      {
        type: "rawlist",
        message: "What would you like to do?",
        choices: ["Add Engineer", "Add Intern", "Finished"],
        name: "choice",
      }
    ])
    .then((answers) => {
      console.log(answers);
      switch(answers.choice) {
        case "Add Engineer":
          showAddEngineer();
          break;
        case "Add Intern":
          showAddIntern();
          break;
        case "Finished":
          generateHTML();
          break;
        default:
          showMainMenu();
      }
    })
}

function showAddEngineer() {
  inquirer
  .prompt([
    {
      type: "input",
      message: "What is the Engineer's Name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is the Engineer's ID?",
      name: "id",
    },
    {
      type: "input",
      message: "What is the Engineer's email?",
      name: "email",
    },
    {
      type: "input",
      message: "What is the Engineer's GitHub?",
      name: "gitHubUser",
    },
  ])
  .then((answers) => {
    console.log(answers);
    engineers.push(new Engineer(answers.name, answers.id, answers.email, answers.gitHubUser));
    showMainMenu();
  });
}

function showAddIntern() {
  inquirer
  .prompt([
    {
      type: "input",
      message: "What is the Intern's Name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is the Intern's ID?",
      name: "id",
    },
    {
      type: "input",
      message: "What is the Intern's email?",
      name: "email",
    },
    {
      type: "input",
      message: "What is the Intern's school?",
      name: "school",
    },
  ])
  .then((answers) => {
    console.log(answers);
    interns.push(new Intern(answers.name, answers.id, answers.email, answers.school));
    showMainMenu();
  });
}

function generateHTML() {
  console.log(manager);
  console.log(engineers);
  console.log(interns);
  
}
