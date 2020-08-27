import React from 'react';
import RestService from './RestService.js';
import {getLoggedUser as repositoryGetLoggedUser} from './RolRepository';
export function add(user) {
    return RestService.post('/users', user);
}

export function getUsers() {
    return RestService.get('/users');
}

export function remove(user) {
    return RestService.delete('/users/'+ user.id);
}

export function getPendingDeletes() {
    return RestService.get('/users/delete');
}

export function deleteUser(user) {
    return RestService.delete('/users/'+ user.id);
    // internalUsers = arrayRemove(internalUsers, user)
}

export function updateUser(id, user) {
    return RestService.put('/users/'+id, user);
}

export function getLoggedUser () {
    return repositoryGetLoggedUser();
}