import React from 'react';
import RestService from './RestService.js';

export function add(user) {
    return RestService.post('/users', user);
}

export function remove(user) {
    return RestService.delete('/users/' + user.id);
}

export function deleteUser(user) {
    return RestService.delete('/users/' + user.id);
}

export function updateUser(id, user) {
    return RestService.put('/users/' + id, user);
}

export function getLoggedUser() {
    const promise = Promise;
    if (!user) {
        return RestService.get('/users/logged').then(data => {
            user = data.data;
            return user;
        });
    }
    return promise.resolve(user);
}

export function getUser(id) {
    return RestService.get('/users/' + id);
}

export function getUsers() {
    return RestService.get('/users');
}

export function getPendingDeletes() {
    return RestService.get('/users/delete');
}

export function login(docNumber, docType, password) {
    return RestService.post('/users/login', {
        docNumber: docNumber,
        docType: docType,
        password: password
    }).then(data => {
        saveToken(data.data.data.token);
        return getLoggedUser();
    });
}

export function isAuthenticated() {
    return !!user;
}



export function singout() {
    user = null;
}