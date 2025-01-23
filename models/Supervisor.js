const Account = require('./Account');

class Supervisor extends Account {
    constructor(username, password) {
        super(username, password, 'supervisor');
    }
}

module.exports = Supervisor;