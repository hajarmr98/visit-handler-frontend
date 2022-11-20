import { requestOptions } from "../../utils/requestOptions";
let baseUrl = import.meta.env.VITE_APP_APIURL

const postVisit = async (body: object) => {
    try {
        return fetch(`${baseUrl}visitor/form`, requestOptions('POST', body))
            .then(data => data.json())
            .then(res => {
                return res;
            })
    } catch (err) {
        throw err;
    }
};

export default postVisit;