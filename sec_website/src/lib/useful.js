import {JSEncrypt} from "jsencrypt";
import {encrypterStore} from "./encrypterStore";
const NodeRSA = require('node-rsa')

export const postFetch = async (url , data) => {
    return await fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

}

export const getFetch = async(url, data) => {
    return await fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    })
}

export const encryptThis = (something) => {
    const encrypter = new JSEncrypt()
    encrypter.setKey(encrypterStore.getState().key)
    return encrypter.encrypt(something, 'base64', 'utf-8')
}

export const genPrivateKey = () => {
    const decrypter = new NodeRSA({b: 512})
    const privateKey = decrypter.exportKey('private')
    encrypterStore.setState({clientKey: privateKey})
    return privateKey
}

export const decryptThis = (something) => {
    const decrypter = new NodeRSA({b: 512})
    decrypter.importKey(encrypterStore.getState().clientKey, 'pkcs1')
    return decrypter.decrypt(something)
}
