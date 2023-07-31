import axios from "axios";

export const api = axios.create({
    baseURL: "https://coodeshchallenge-node-js.onrender.com"
})