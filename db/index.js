const db = require('./connection')

class Query {
    constructor(db) {
        this.db = db
    }

    findAllDepartments(){
        return this.db.promise().query('SELECT * FROM department;')
    }

}

module.exports = new Query(db)