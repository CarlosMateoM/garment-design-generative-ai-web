import  Axios  from "axios";

const axios = Axios.create({
    baseURL: "https://mateodevelopment.online/api/v1",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    withCredentials: true,
    withXSRFToken: true,
});

export default axios;