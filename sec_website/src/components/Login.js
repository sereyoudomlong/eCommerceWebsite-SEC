import React, {useEffect, useState} from 'react';
import InputField           from "./InputField";
import SubmitButton         from "./SubmitButton";
import {userStore} from "../lib/userStore";
import { useNavigate } from "react-router-dom"
import {encrypterStore} from "../lib/encrypterStore";
import {decryptThis, encryptThis} from "../lib/useful";

const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [buttonDisabled, setButtonDisabled] = useState(false)
    const [res, setRes] = useState()
    const navigate = useNavigate()

    const setInputValue = (property, value) => {
        // string check
        value = value.trim();
        //Setting a max length of both username and password
        if (value.length > 12) {
            return;
        }
        if (property==='username') {
            setUsername(value)
        }
        else{
            setPassword(value)
        }
    }

    const resetForm = () => {
        setUsername('')
        setPassword('')
        setButtonDisabled(false)
    }

    const postFetch = async (url , data) => {
        return await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

    }

    const doLogin = async () => {
        if (!username) {
            return;
        }
        if (!password) {
            return;
        }
        const data = {
            username: encryptThis(username),
            password: encryptThis(password)
        }
        console.log(data)
        const url = 'http://localhost:8080/login'

        const response = await postFetch(url, data).then(resp => resp.json())
        if (response.success) {
            userStore.setState({
                userID: response.userID,
                username: response.username,
                isLoggedIn: true,
                email: response.email,
                phoneNumber: response.phoneNumber
            })
            console.log(userStore.getState())
            navigate("/")
        }

        return
    }


    return (
    <div>
        <div className="subLoginTitle">
            <h1>Welcome to Mech-Shop!</h1>
            <small>Please log in to continue...</small>
        </div>
        <div className="container">
            <div align='center' className="loginForm">
                <div className="subLoginTitle">Log In</div>
                <InputField
                    type='text'
                    placeholder='Username'
                    value={username ? username : ''}
                    onChange={ (value) => setInputValue('username', value) }
                />
                <InputField
                    type='password'
                    placeholder='Password'
                    value={password ? password : ''}
                    onChange={ (value) => setInputValue('password', value) }
                />
                <SubmitButton
                    text = 'Login'
                    /*might need to change below to "this.state.buttonDisabled*/
                    disabled={buttonDisabled}
                    onClick={ () => doLogin() }
                />


            </div>

        </div>
    </div>
    );

}

export default Login;