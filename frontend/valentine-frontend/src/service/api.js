import axios from "axios";

const API = "http://localhost:8080/api/valentine";

export const getValentine = (id) => axios.get(`${API}/${id}`);
export const acceptValentine = (id) =>
    axios.post(`${API}/${id}/accept`);
