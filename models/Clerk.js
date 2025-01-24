const Account = require('./Account');

class Clerk extends Account {
    constructor(username, password) {
        super(username, password, 'clerk');
    }
}

module.exports = Clerk;