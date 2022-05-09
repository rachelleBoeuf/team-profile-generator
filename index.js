const fs = require('fs-extra');
const inquirer = require('inquirer');
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

var manager;
var engineers = [];
var interns = [];

//loadSeedData();
showAddManager();

function showAddManager() {
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
}

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
  
  let html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <link rel="stylesheet" href="./styles.css">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Generator</title>

      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    </head>
    <body>
      <header>
        ~ My Team ~
      </header>`;

  html += `
  <!-- Manager Card -->
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${manager.getName()}</h5>
        <h5 class="card-title bolder">${manager.getRole()}</h5>
        <p class="card-text"><b>ID: </b>${manager.getId()}</p>
        <p class="card-text"><b>Email: </b><a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
        <p class="card-text"><b>Office ID: </b>${manager.getOfficeNumber()}</p>
      </div>
    </div>`;

  for (e of engineers) {
    html += `
      <!-- Engineer Card -->
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${e.getName()}</h5>
          <h5 class="card-title bolder">${e.getRole()}</h5>
          <p class="card-text"><b>ID: </b>${e.getId()}</p>
          <p class="card-text"><b>Email: </b><a href="mailto:${e.getEmail()}">${e.getEmail()}</a></p>
          <p class="card-text"><b>GitHub: </b><a target="_blank" href="//github.com/${e.getGitHubUser()}">${e.getGitHubUser()}</a></p>
        </div>
      </div>`;
  }

  for (i of interns) {
    html += `
      <!-- Intern Card -->
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${i.getName()}</h5>
          <h5 class="card-title bolder">${i.getRole()}</h5>
          <p class="card-text"><b>ID: </b>${i.getId()}</p>
          <p class="card-text"><b>Email: </b><a href="mailto:${i.getEmail()}">${i.getEmail()}</a></p>
          <p class="card-text"><b>School: </b>${i.getSchool()}</p>
        </div>
      </div>`;
  }

  html += `
    <footer>
      <hr width="80%">
    </footer>
    </body>
    </html>`;

  fs.writeFile('./dist/index.html', html, (error) => {
    if (error) console.log(error);
    else {
      console.log('index.html written successfully');
    }
  });

  fs.copyFile('./src/styles.css', './dist/styles.css', (error) => {
    if (error) console.log(error);
    else {
      console.log('styles.css copied successfully');
    }
  });
}

function loadSeedData() {
  manager = new Manager('Rachel', '001', 'rachel@email.com', 'DEN01');
  engineers.push(new Engineer('Amber', '002', 'amber@email.com', 'edinhurem'));
  engineers.push(new Engineer('Edin', '003', 'edin@email.com', 'edinhurem'));
  interns.push(new Intern('Samual', '004', 'samdaman@email.com', 'UNLV'));
  generateHTML();
}
