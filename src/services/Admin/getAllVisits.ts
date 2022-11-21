let baseUrl = import.meta.env.VITE_APP_APIURL;

const getAllVisits = async (id: number) => {
    try {
        return fetch(`${baseUrl}admin/visits`)
            .then(data => data.json())
            .then(res => {
                return res
            })
    } catch (err) {
        throw err;
    }
};

export default getAllVisits;