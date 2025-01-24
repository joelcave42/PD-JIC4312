const Account = require('./Account');

class Operator extends Account {
    constructor(username, password) {
        super(username, password, 'operator');
    }
}

module.exports = Operator;