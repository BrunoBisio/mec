import React from 'react';
import {users} from './RolRepository'
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