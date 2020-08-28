import React from 'react';

// gets by roleId: 1, 2 and 3
export function getEmployee() {
    return RestService.get('/users/employee');
}

export function createEmployee(employee) {
    return RestService.post('/users',employee);
}

export function updateEmployee(employee) {
    return RestService.put('/users/' +employee.id, employee);
}

export function deleteEmployee(employeeId) {
    return RestService.delete('/users/' +employeeId);
}