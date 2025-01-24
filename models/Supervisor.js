const Account = require('./Account');
const Manager = require('./Manager');
const Operator = require('./Operator');
const Clerk = require('./Clerk');
const Maintainer = require('./Maintainer');

class Supervisor extends Account {
    constructor(username, password) {
        super(username, password, 'supervisor');
    }

    createUser(username, password, role) {
        switch (role) {
            case 'manager':
                return new Manager(username, password);
            case 'operator':
                return new Operator(username, password);
            case 'clerk':
                return new Clerk(username, password);
            case 'maintainer':
                return new Maintainer(username, password);
            case 'supervisor':
                return new Supervisor(username, password);
            default:
                throw new Error('Invalid role');
        }
    }
}

module.exports = Supervisor;