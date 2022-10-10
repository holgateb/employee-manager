const inquirer = require("inquirer");
const db = require("./db");
require("console.table");

//View all departments
// //SELECT * FROM department

// //View all roles
// //SELECT * FROM role

// //View all employees
// //SELECT * FROM employee

// //Create new departments

// //Prompt the user for the "name" of the department

//     //THEN run the query
//     //INSERT INTO department (name)
//     //VALUES ("Sales")

//         //THEN ask the user what they want to do next

// //Create a new role
// function createRole () {

// //GET the existing departments from the 'deparment' table

//     //THE prompt the user for the "title", "salary",  and "department" for the role

//         //THEN run the query
//         //INSERT INTO role (title, salary, department_id)
//         //VALUES ("Manager", "120000, 1")

//             //THEN ask the user what they want to do next
//         }

// const createPost = async () => {
//     const users = await db.query("SELECT * FROM users");

//     const userChoices = users.map( user => {
//         name: user.username,
//         value: user.id
//     }) };

//     const answers = inquirer.prompt ([
//         {
//             message: "What is the title of the post?",
//             name: "title",
//             type: "input"
//         },
//         {
//             message: "What is the content of the post?",
//             name: "content",
//             type: "input"
//         },
//         {
//             message: "What is the author of the post?",
//             name: "title",
//             type: "list",
//             choices: userChoices
//         }
//     ]);

// createPost();

// GIVEN a command-line application that accepts user input
// WHEN I start the application
// THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
function start() {
  inquirer
    .prompt({
      type: "list",
      name: "q1",
      message: "What would you like to do?",
      choices: [
        "View all departments",
        "View all roles",
        "View all employees",
        "Add a department",
        "Add a role",
        "Add an employee",
        "Update an employee role",
        "Quit",
      ],
    })
    .then((answers) => {
      console.log(answers.q1);
      switch (answers.q1) {
        case "View all departments":
          viewAllDepartments();
          break;
        case "View all roles":
          viewAllRoles();
          break;
        case "View all employees":
          viewAllEmployees();
          break;
        case "Add a department":
          addDepartment();
          break;
        case "Add a role":
          addRole()
          break;
        case "Add an employee":
          break;
        case "Update an employee role":
          break;
        default:
          process.exit();
          break;
      }
    });
}

function viewAllDepartments() {
  db.findAllDepartments()
    .then(([data]) => {
      console.table(data);
    })
    .then(() => start());
}

function viewAllRoles() {
  db.findAllRoles()
    .then(([data]) => {
      console.table(data);
    })
    .then(() => start());
}

function viewAllEmployees() {
  db.findAllEmployees()
    .then(([data]) => {
      console.table(data);
    })
    .then(() => start());
}

function addDepartment() {
  inquirer
    .prompt({
      name: "name",
      type: "input",
      message: "Which department would you like to add?",
    })
    .then((response) => db.insertDepartment(response).then(() => start()));
}

function addRole() {
  db.findAllDepartments().then(([data]) => {
    const departArray = data.map(({ id, name }) => ({
      name: name,
      value: id,
    }));

    inquirer.prompt([
      {
        name: "title",
        type: "input",
        message: "What is the title of the role?",
      },
      {
        name: "salary",
        type: "input",
        message: "What is the salary of this role?",
      },
      {
        name: "department_id",
        type: "list",
        message: "Which department is the role in?",
        choices: departArray
      },
    ]).then((response) => db.insertRole(response).then(() => start()));
  });
}

function addEmployee () {
  db.findAllEmployees().then(([data]) => {
    const empArray = data.map(({first_name, last_name, id})=>({
      name: `${first_name} ${last_name}`,
      value: id
    }));

    db.findAllRoles().then(([data]) => {
      
    })

  })
}

function updateEmployee () {

}

// WHEN I choose to view all departments
// THEN I am presented with a formatted table showing department names and department ids
// WHEN I choose to view all roles
// THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
// WHEN I choose to view all employees
// THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
// WHEN I choose to add a department
// THEN I am prompted to enter the name of the department and that department is added to the database
// WHEN I choose to add a role
// THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
// WHEN I choose to add an employee
// THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
// WHEN I choose to update an employee role
// THEN I am prompted to select an employee to update and their new role and this information is updated in the database

start();
