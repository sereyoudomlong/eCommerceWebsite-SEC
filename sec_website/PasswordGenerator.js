const bcrypt = require('bcrypt');

// User pswrd = 'password'
// Admin pswrd = 'admin'

const pswrd = 'admin'
const saltRounds = 10
var pwdHash = ''
const run = () => {
    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(pswrd, salt, function(err, hash) {
            // returns hash
            console.log(hash);
            pwdHash = hash
        });
    });
    return pwdHash
}

run()
