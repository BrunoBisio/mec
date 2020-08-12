import React from 'react';

let patientHistory = [
    {
        id: '1',
        nombre: 'Frodo Baggins',
        raza: 'Hobbit',
        sexo: 'M',
        edad: 33,
        alergiaM: '',
        cardiovasculares: '',
        pulmonar: '',
        digestivas: '',
        renales: '',
        neurologicas: 'PTS del viaje a Mordor',
        diabetes: 'Tipo 1',
        quirurjicos: 'Dedo extirpado',
        medicamentos: 'Rivotril',
        Embarazos: 0,
        alcohol: 'Despues del segundo desayuno',
        tabaco: 'Cuando viene a visitar Gandalf',
        Drogas: '',
        otros: ''
    },
    {
        id: '2',
        nombre: 'Galadriel',
        raza: 'Elfo',
        sexo: 'F',
        edad: 3684,
        alergiaM: '',
        cardiovasculares: '',
        pulmonar: '',
        digestivas: '',
        renales: '',
        diabetes: '',
        quirurjicos: '',
        medicamentos: '',
        Embarazos: 1,
        alcohol: '',
        tabaco: '',
        Drogas: '',
        otros: 'Poder del anillo unico'
    }
]

export function getPatientHistory() {
    return patientHistory;
}
