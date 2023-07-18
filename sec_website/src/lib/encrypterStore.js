import create from 'zustand';
import {JSEncrypt} from "jsencrypt";

export const encrypterStore = create(set => ({
    key: "",
    clientKey: ""
}));