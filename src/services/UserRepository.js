import React from 'react';
import {users} from './RolRepository'
import axios from 'axios';
function arrayRemove(array, value) { return array.filter(function(item){ return item !== value; });}

let internalUsers;
export function add(user) {
    internalUsers.push(user);
}

export function get() {
    if(!internalUsers) {
        internalUsers = users;
    }
    return internalUsers;
}

export function remove(user) {
    internalUsers = arrayRemove(internalUsers, user)
}

export function getPendingDeletes() {
    return axios.get('/users/delete');/*.then((response) => {
        return response.data.data;
    }).catch(() => {
        return [];
    });*/
}

export function deleteUser(user) {
    internalUsers = arrayRemove(internalUsers, user)
}