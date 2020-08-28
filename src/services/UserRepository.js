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

export function getUser(id) {
    return RestService.get('/users/' + id);
}

export function getUsers() {
    return RestService.get('/users');
}

export function getPendingDeletes() {
    return RestService.get('/users/delete');
}

export function getUsersByRole(roleId) {
    return RestService.get('/users/role/' + roleId);
}