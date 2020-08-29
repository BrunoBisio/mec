import React from 'react';
import axios from 'axios';


const RestService = axios.create({
    baseURL: "https://limitless-anchorage-84223.herokuapp.com"
});

export const haveToken = function () {
    return !!RestService.defaults.headers.common['Authorization'];
}
export const saveToken = function (token) {
    RestService.defaults.headers.common['Authorization'] = 'Bearer ' + token;
}

export const deleteToken = function () {
    delete RestService.defaults.headers.common['Authorization'];
}
export default RestService;