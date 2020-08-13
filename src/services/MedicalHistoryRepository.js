import React from 'react';

let medicalHistory = [
    {
        id: '123456',
        nombre: 'Frodo Baggins',
        raza: 'Hobbit',
        sexo: 'M',
        edad: 33,
        alergias: { active: 'No', comment: '' },
        cardiovasculares: { active: 'No', comment: '' },
        pulmonar: { active: 'No', comment: '' },
        digestivas: { active: 'No', comment: '' },
        renales: { active: 'No', comment: '' },
        neurologicas: { active: 'Si', comment: 'PTS del viaje a Mordor' },
        diabetes: { active: 'Si', comment: 'Tipo 1' },
        quirurjicos: { active: 'Si', comment: 'Dedo extirpado' },
        medicamentos: { active: 'Si', comment: 'Rivotril' },
        embarazos: { active: 'No', comment: '' },
        alcohol: { recurrence: '2', comment: 'Despues del segundo desayuno' },
        tabaco: { recurrence: '1', comment: 'Cuando viene a visitar Gandalf' },
        drogas: { recurrence: '0', comment: '' },
        otros: { recurrence: '0', comment: '' }
    },
    {
        id: '00002',
        nombre: 'Galadriel',
        raza: 'Elfo',
        sexo: 'F',
        edad: 3684,
        alergias: { active: 'No', comment: '' },
        cardiovasculares: { active: 'No', comment: '' },
        pulmonar: { active: 'No', comment: '' },
        digestivas: { active: 'No', comment: '' },
        renales: { active: 'No', comment: '' },
        neurologicas: { active: 'No', comment: '' },
        diabetes: { active: 'No', comment: '' },
        quirurjicos: { active: 'No', comment: '' },
        medicamentos: { active: 'No', comment: '' },
        embarazos: { active: 'Si', comment: '1' },
        alcohol: { recurrence: '0', comment: '' },
        tabaco: { recurrence: '0', comment: '' },
        drogas: { recurrence: '0', comment: '' },
        otros: { recurrence: '2', comment: 'Poder del anillo unico' }
    }
]

let generaInformationFormat = [
    { fieldName: "Nombre Completo", value: {} },
    { fieldName: "Raza", value: {} },
    { fieldName: "Sexo", value: {} },
    { fieldName: "Edad", value: {} }
]
  
let patalogicHistoryFormat = [
    { fieldName: "Alergia a medicamentos", value: {} },
    { fieldName: "Enfermedades Cardiovasculares", value: {} },
    { fieldName: "Enfermedades Pulmonares", value: {} },
    { fieldName: "Enfermedades Digestivas", value: {} },
    { fieldName: "Enfermedades Renales", value: {} },
    { fieldName: "Enfermedades Neurológicas", value: {} },
    { fieldName: "Diabetes", value: {} },
    { fieldName: "Antecedentes Quirugicos", value: {} },
    { fieldName: "Medicamentos", value: {} },
    { fieldName: "Embarazos", value: {} }
]
  
let nonPatologicHistoryFormat = [
    {fieldName: "Alcohol", value: {} },
    {fieldName: "Tabaco", value: {} },
    {fieldName: "Drogas", value: {} },
    {fieldName: "Otros", value: {} }
]

export function getPatientHistory() {
    return medicalHistory;
}

export function getGeneraInformation(userId){
    const user = medicalHistory.find((mh) => { return mh.id === userId});
    return [
        { fieldName: "Nombre Completo", value: user.nombre },
        { fieldName: "Raza", value: user.raza },
        { fieldName: "Sexo", value: user.sexo },
        { fieldName: "Edad", value: user.edad } 
    ]
}

export function getPatalogicHistory(userId) {
    const user = medicalHistory.find((mh) => { return mh.id === userId });
    return [
        { fieldName: "Alergia a medicamentos", value: user.alergias },
        { fieldName: "Enfermedades Cardiovasculares", value: user.cardiovasculares },
        { fieldName: "Enfermedades Pulmonares", value: user.pulmonar },
        { fieldName: "Enfermedades Digestivas", value: user.digestivas },
        { fieldName: "Enfermedades Renales", value: user.renales },
        { fieldName: "Enfermedades Neurológicas", value: user.neurologicas },
        { fieldName: "Diabetes", value: user.diabetes },
        { fieldName: "Antecedentes Quirugicos", value: user.quirurjicos },
        { fieldName: "Medicamentos", value: user.medicamentos },
        { fieldName: "Embarazos", value: user.embarazos }
    ]
}

export function getNonPatologicHistory(userId) {
    const user = medicalHistory.find((mh) => { return mh.id === userId });
    return [
        {fieldName: "Alcohol", value: user.alcohol },
        {fieldName: "Tabaco", value: user.tabaco },
        {fieldName: "Drogas", value: user.drogas },
        {fieldName: "Otros", value: user.otros }
    ]
}