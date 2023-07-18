import create from 'zustand';
import {postFetch} from "./useful";
// define the store

export const userStore = create(set => ({
    userID: -1,
    username: "",
    isLoggedIn: false,
    email: "",
    phoneNumber: ""
}));