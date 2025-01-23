const Account = require('./Account');

class Maintainer extends Account {
    constructor(username, password) {
        super(username, password, 'maintainer');
    }
}

module.exports = Maintainer;