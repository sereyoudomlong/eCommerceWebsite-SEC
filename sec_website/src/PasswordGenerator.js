const bcrypt = require('bcryptjs');

// User pswrd = 'password'
// Admin pswrd = 'admin'

// const pswrd = 'password'
const saltRounds = 10
var pwdHash = ''
export const hashIt = (pswrd) => {
    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(pswrd, salt, function(err, hash) {
            // returns hash
            pwdHash = hash
        });
    });
    console.log(pwdHash)
    return pwdHash
}

hashIt()
