import { requestOptions } from "../../utils/requestOptions";
let baseUrl = import.meta.env.VITE_APP_APIURL

const rejectVisit = async (id: number) => {
    try {
        return fetch(`${baseUrl}admin/visits/:${id}`, requestOptions('DELETE'))
            .then(data => data.json())
            .then(res => {
                return res;
            })
    } catch (err) {
        throw err;
    }
};

export default rejectVisit;