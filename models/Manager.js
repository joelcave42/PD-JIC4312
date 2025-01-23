const Account = require('./Account');

class Manager extends Account {
    constructor(username, password) {
        super(username, password, 'manager');
    }
}

module.exports = Manager;