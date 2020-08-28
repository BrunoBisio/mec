import React from 'react';
import axios from 'axios';


const RestService = axios.create({
});

export const haveToken = function () {
    return !!RestService.defaults.headers.common['Authorization'];
}
export const saveToken = function (token) {
    RestService.defaults.headers.common['Authorization'] = 'Bearer ' + token;
}

export const deleteToken = function () {
    RestService.defaults.headers.common.delete('Authorization');
}
export default RestService;