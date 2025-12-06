import axios from "axios";

const API = "http://localhost:8080/api/devices";

export const getDevices = () => axios.get(API);

export const getDevice = (id) => axios.get(`${API}/${id}`);

export const registerDevice = (deviceId) =>
    axios.post(`${API}/register`, { deviceId });
