import React from 'react';
import RestService from './RestService.js'

// gets by roleId: 1, 2 and 3
export function getEmployee() {
    return RestService.restClient.get('/users/employee');
}

export function createEmployee(employee) {
    return RestService.restClient.post('/users/employee',employee);
}

export function updateEmployee(employee) {
    return RestService.restClient.put('/users/employee/' +employee.id, employee);
}

export function deleteEmployee(employeeId) {
    return RestService.restClient.delete('/users/employee/' +employeeId);
}