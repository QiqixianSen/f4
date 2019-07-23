import axios from "axios";

function get(url, data) {
    return new Promise((resolve, reject) => {
        let params = data || {};
        axios
            .get(url, {
                params
                // headers: {
                //     Cookie: document.cookie
                // }
            })
            .then(result => {
                resolve(result);
            })
            .catch(error => {
                reject(error);
            });
    });
}
function post(url, data) {
    return new Promise((resolve, reject) => {
        let params = data || {};
        axios
            .post(url, params, {
                // baseURL: api.HOST,
                // headers: {
                //     Cookie: document.cookie
                // }
            })
            .then(result => {
                resolve(result);
            })
            .catch(error => {
                reject(error);
            });
    });
}

export default {
    get,
    post
};
