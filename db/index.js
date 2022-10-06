const db = require('./connection')

class Query {
    constructor(db) {
        this.db = db
    }

    findAllDepartments(){
        // WHEN I choose to view all departments
        // THEN I am presented with a formatted table showing department names and department ids
        return this.db.promise().query('SELECT * FROM department;')
    }

    findAllRoles(){
     // WHEN I choose to view all roles
    // THEN I am presented with the role title, role id, the department that role belongs to, and the salary for that role
        return this.db.promise().query('SELECT role.title, role.id, department.name, role.salary from role JOIN department ON role.department_id = department.id')
    }

    findAllEmployees(){
    // WHEN I choose to view all employees
    // THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
        return this.db.promise().query('SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name, role.salary, CONCAT (manager.first_name, " ", manager.last_name) AS fullname from employee JOIN role ON employee.role_id = role.id JOIN department ON role.department_id = department.id JOIN employee AS manager ON manager.id = employee.manager_id')
    }

    insertDepartment(){
        return this.db.promise().query('INSERT')
    }
    
    insertRole(){
        return this.db.promise().query('')
    }

    
    insertEmployee(){
        return this.db.promise().query('')
    }

    
    updateEmployeeRole(){
        return this.db.promise().query('')
    }

   


}

module.exports = new Query(db)