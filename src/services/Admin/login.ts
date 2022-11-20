import { requestOptions } from "../../utils/requestOptions";
let baseUrl = import.meta.env.VITE_APP_APIURL;

const login = async (data: object) => {
    try {
        return fetch(`${baseUrl}admin/login`, requestOptions('POST', data))
            .then(data => data.json())
            .then(res => {
                return res;
            })
    } catch (err) {
        throw err;
    }
};

export default login;