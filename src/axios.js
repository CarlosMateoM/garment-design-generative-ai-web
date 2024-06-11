import  Axios  from "axios";

const axios = Axios.create({
    baseURL: "https://api.designfashionai.com/api/v1",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    withCredentials: true,
    withXSRFToken: true,
});

export default axios;