import axios from "axios";

let BASE_API_URL = "https://616d4ce837f997001745d96d.mockapi.io/api";

const CallApi = async (endPoint, method = "GET", body) => {
    try {
        return axios({
            method,
            url: `${BASE_API_URL}/${endPoint}`,
            data: body,
        });
    } catch (error) {
        console.log("error", error);
    }
};

export default CallApi;
