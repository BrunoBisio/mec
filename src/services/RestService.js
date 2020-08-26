import React from 'react';
import axios from 'axios';


const instance = axios.create({
  });
  
exports.haveToken = function() {
    return !!instance.defaults.headers.common['Authorization'];
}
exports.saveToken = function(token) {
    instance.defaults.headers.common['Authorization'] = 'Bearer ' + token;
}

exports.deleteToken = function() {
    instance.defaults.headers.common.delete('Authorization');
}
exports.restClient = instance;