const APIEndpoint = require("./APIEndpoint")
const cors = require('cors')
const express = require("express");
const app = express();
const mysql = require('mysql');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')//(session)
const https = require("https");
const fs = require("fs");
const NodeRSA = require('node-rsa');
global.navigator = {appName: 'nodejs'}; // fake the navigator object
global.window = {}; // fake the window object
const JSEncrypt = require('jsencrypt').default;


const port = 8080;
app.use(express.json());
app.use(cors({
    origin: '*'
}));

app.use(session({
        secret:  "2435098fdbkasdfkj23",
        key: process.env.JWT_SECTRET,
        saveUninitialized: true,
        resave: false,
        cookie: {
            httpOnly: true,
            maxAge: 60*60*1000, //1Hr in ms
        }
    }
))

// The database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sec_website',
    port: '3308'
});

db.connect(function(err) {
    if(err) {
        console.log('DB Error');
        throw err;
        return false;
    }
    else {
        console.log("DB Connected!")
    }
});

const sessionStore = new MySQLStore({
    // Set expiration to be one year for the session
    expiration: (365*86400*100),
    endConnectionOnClose: false
}, db);

// https.createServer(// Provide the private and public key to the server by reading each
//     // file's content with the readFileSync() method.
//     {
//         key: fs.readFileSync("key.pem"),
//         cert: fs.readFileSync("cert.pem"),
//     },
//     app).listen(port, () => console.log(`Example app listening on port ${port}!`));

app.use((req, res, next) => {
    console.log(req.session)
    next()
})

app.get('/', (req,res)=> {
    res.send("Hello from express server.")
})
const myDecrypter = new NodeRSA({b: 512});
myDecrypter.setOptions({encryptionScheme: 'pkcs1'})
const myEncrypter = JSEncrypt

new APIEndpoint(app, db, myDecrypter, myEncrypter);
// myDecrypter.exportKey('private')
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

