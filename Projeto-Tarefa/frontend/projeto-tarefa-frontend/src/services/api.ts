import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3333/tasks"
})

export default api;