import React from 'react';

// gets by roleId: 1, 2 and 3
export function getEmployee() {
    return [];
}

<<<<<<< HEAD
export function createEmployee(employee) {
    return RestService.restClient.post('/users',employee);
}

export function updateEmployee(employee) {
    return RestService.restClient.put('/users/' +employee.id, employee);
}

export function deleteEmployee(employeeId) {
    return RestService.restClient.delete('/users/' +employeeId);
=======
export function createEmployee() {
    return;
}

export function updateEmployee() {
    return;
}

export function deleteEmployee() {
    return;
>>>>>>> parent of c594867... Connected front with backend api
}