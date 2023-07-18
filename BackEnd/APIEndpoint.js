const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const NodeRSA = require('node-rsa');


class APIEndpoint {
    //will contain our API endpoint

    constructor(app, db, dcryp, encryp) {
        this.login(app, db, dcryp, encryp);
        this.getAllProducts(app, db, encryp);
        this.order(app, db, dcryp)
        this.getPublicKey(app, db, dcryp)
        this.postPrivateKey(app, db, dcryp)
        this.clientKey = ""
        this.id = -1;

    }

    createToken = async (data) => {
        try {
            let payload = data
            let token = await jwt.sign(payload, process.env.JWT_SECRET)
            return token
        } catch(e){
            return e
        }
    }

    login(app, db, dcryp, encryp) {
        try {
            app.post('/login', async (req, res) => {
                console.log(req.body)
                let username = dcryp.decrypt(req.body.username, 'utf8');
                let password = dcryp.decrypt(req.body.password, 'utf8');
                console.log(username)
                if (username.length > 12) {
                    res.json({
                        success: false,
                        msg: 'An error has occured, please try again'
                    })
                    return;
                }
                let cols = [username];
                db.query('SELECT * FROM user WHERE username = ? LIMIT 1', cols, (err, data, fields) => {
                    if (err) {
                        res.json({
                            success: false,
                            msg: 'An error has occured, please try again'
                        })
                        return;
                    }
                    // Found 1 user with this username
                    if (data && data.length === 1) {
                        // console.log(data[0].password)
                        // console.log(bcrypt.compare(password, data[0].password))
                        bcrypt.compare(password, data[0].password, (bcryptErr, verified) => {
                            if (bcryptErr) {
                                console.log(bcryptErr)
                                res.json({
                                    success: false,
                                    msg: 'There was an error'
                                })
                                return;
                            }
                            if (verified) {
                                req.session.userID = data[0].userID;
                                const token = this.createToken({userID: data[0].userID, username: data[0].username})
                                res.json({
                                    success: true,
                                    username: data[0].username,
                                    userID: data[0].userID,
                                    email: data[0].email,
                                    phoneNumber: data[0].phoneNumber,
                                    jwtToken: token
                                })
                                return;
                            } else {
                                res.json({
                                    success: false,
                                    msg: 'Incorrect Password'
                                })
                                return;
                            }
                        });
                    } else {
                        res.json({
                            success: false,
                            msg: 'No user with that username exists'
                        })
                    }
                })
            })
        }
        catch (e) {
            console.log(e)
        }
    }

    encryptThis(something, encryp){
        encryp.setKey(this.clientKey)
        return encryp.encrypt(something, 'base64', 'utf-8')
    }

    getAllProducts(app, db){
        try {
            app.get('/getAllProducts', async (req, res) => {
                console.log('Made it to API')
                db.query('SELECT * FROM catalog', (err, data, fields) => {
                if (err) {
                    res.json({
                        success: false,
                        msg: 'An error has occured, please try again'
                    })
                    return;
                }

                if (data) {
                    let res_data = []
                    for (let i = 0; i < data.length; i++) {
                        res_data.push({
                            itemID: data[i].itemID,
                            itemName: data[i].itemName,
                            itemDescription: data[i].itemDescription,
                            itemPrice: data[i].itemPrice,
                            inStock: data[i].inStock,
                            href: data[i].href
                        })
                    }
                    res.json(res_data)
                }
                else {
                    res.json({
                        success: false,
                        msg: 'No items in catalog'
                    })
                }
                return
                })
            })
        } catch (e) {
            console.log(e)
        }
    }

    getProduct(app, db){
        try {
            app.get('/getAllProducts', async (req, res) => {
                console.log('Made it to API')
                db.query('SELECT * FROM catalog', (err, data, fields) => {
                    if (err) {
                        res.json({
                            success: false,
                            msg: 'An error has occured, please try again'
                        })
                        return;
                    }

                    if (data) {
                        let res_data = []
                        for (let i = 0; i < data.length; i++) {
                            res_data.push({
                                itemID: data[i].itemID,
                                itemName: data[i].itemName,
                                itemDescription: data[i].itemDescription,
                                itemPrice: data[i].itemPrice,
                                inStock: data[i].inStock,
                                href: data[i].href
                            })
                        }
                        res.json(res_data)
                    }
                    else {
                        res.json({
                            success: false,
                            msg: 'No items in catalog'
                        })
                    }
                    return
                })
            })
        } catch (e) {
            console.log(e)
        }
    }

    order(app, db){
        try {
            app.post('/order', async (req, res) => {
                console.log('Made it to API')
                let userID = req.userID
                let address = req.address
                let products = req.products
                db.query('INSERT INTO order (items, userID, address) VALUES ("' + products + '", "' + userID + '", "' +
                    address+'")' , (err, data, fields) => {
                    if (err){
                        console.log(err)
                        res.json({
                            success: false,
                            msg: 'An error has occured, please try again'
                        })
                        return;
                    }
                    else{
                        res.json({
                            success: true
                        })
                        return true;
                    }
                })
            })
        } catch (e) {
            console.log(e)
        }
    }

    getPublicKey(app, db, dcryp) {
        try{
            app.get('/getPublicKey', function (req, res) {
                console.log('Made it to API?')
                let key = dcryp.exportKey('public')
                res.json({
                    Key: dcryp.exportKey('public')
                });
            });

        } catch (e) {
            console.log(e)
        }
    }

    postPrivateKey(app, db, dcryp) {
        try {
            app.post('/postPrivateKey', function(req, res) {
                console.log("Private key posted.")
                this.clientKey = dcryp.decrypt(req.body.key)
                res.json({
                    success: true
                })
                return true
            })

        } catch (e) {

        }
    }
}

module.exports = APIEndpoint
