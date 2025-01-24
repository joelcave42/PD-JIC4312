const bcrypt = require('bcryptjs');

class Account {
    constructor(username, password, accountType) {
        this.username = username;
        this.password = this.hashPassword(password);
        this.accountType = accountType

    }


    //creates salt based
    hashPassword() {
        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        return bcrypt.hashSync(this.password.salt)
    }

    verifyPassword(inputPassword) {
        return bcrypt.compareSync(inputPassword, this.password);
    }



}

module.exports = Account;