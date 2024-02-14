//I need a  function that recevies an endpoint, a method and a body and returns a promise
//I will use this function to make requests to the server


const BASE_URL = 'http://localhost:8080/';
const request = (endpoint, method, body) => {
    return new Promise((resolve, reject) => {
        axios({
        method: method,
        url: `${BASE_URL}${endpoint}`,
        data: body,
        })
        .then((response) => {
            resolve(response);
        })
        .catch((error) => {
            reject(error);
        });
    });
};

// I need a function that receives a token, and an endpoint, a method and a body and returns a promise
// I will use this function to make requests to the server that require authentication

const authRequest = (token, endpoint, method, body) => {
    return new Promise((resolve, reject) => {
        axios({
        method: method,
        url: `${BASE_URL}${endpoint}`,
        data: body,
        headers: {
            Authorization: `Bearer ${token}`,
        },
        })
        .then((response) => {
            resolve(response);
        })
        .catch((error) => {
            reject(error);
        });
    });
};


