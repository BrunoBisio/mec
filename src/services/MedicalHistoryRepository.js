import React from 'react';

let medicalHistory = [
    {
        id: '123456',
        nombre: 'Frodo Baggins',
        raza: 'Hobbit',
        sexo: 'M',
        edad: 33,
        alergias: { active: false, comment: '' },
        cardiovasculares: { active: false, comment: '' },
        pulmonar: { active: false, comment: '' },
        digestivas: { active: false, comment: '' },
        renales: { active: false, comment: '' },
        neurologicas: { active: true, comment: 'PTS del viaje a Mordor' },
        diabetes: { active: true, comment: 'Tipo 1' },
        quirurjicos: { active: true, comment: 'Dedo extirpado' },
        medicamentos: { active: true, comment: 'Rivotril' },
        embarazos: { active: false, comment: '' },
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
        alergias: { active: false, comment: '' },
        cardiovasculares: { active: false, comment: '' },
        pulmonar: { active: false, comment: '' },
        digestivas: { active: false, comment: '' },
        renales: { active: false, comment: '' },
        neurologicas: { active: false, comment: '' },
        diabetes: { active: false, comment: '' },
        quirurjicos: { active: false, comment: '' },
        medicamentos: { active: false, comment: '' },
        embarazos: { active: true, comment: '1' },
        alcohol: { recurrence: '0', comment: '' },
        tabaco: { recurrence: '0', comment: '' },
        drogas: { recurrence: '0', comment: '' },
        otros: { recurrence: '2', comment: 'Poder del anillo unico' }
    }
]

let generaInformationFormat = [
    { fieldName: "Nombre Completo", value: "" },
    { fieldName: "Raza", value: "" },
    { fieldName: "Sexo", value: "" },
    { fieldName: "Edad", value: "" }
]
  
let patalogicHistoryFormat = [
    { fieldName: "Alergia a medicamentos", value: { active: false, comment: '' } },
    { fieldName: "Enfermedades Cardiovasculares", value: { active: false, comment: '' } },
    { fieldName: "Enfermedades Pulmonares", value: { active: false, comment: '' } },
    { fieldName: "Enfermedades Digestivas", value: { active: false, comment: '' } },
    { fieldName: "Enfermedades Renales", value: { active: false, comment: '' } },
    { fieldName: "Enfermedades Neurológicas", value: { active: false, comment: '' } },
    { fieldName: "Diabetes", value: { active: false, comment: '' } },
    { fieldName: "Antecedentes Quirugicos", value: { active: false, comment: '' } },
    { fieldName: "Medicamentos", value: { active: false, comment: '' } },
    { fieldName: "Embarazos", value: { active: false, comment: '' } }
]
  
let nonPatologicHistoryFormat = [
    {fieldName: "Alcohol", value: { recurrence: '0', comment: '' } },
    {fieldName: "Tabaco", value: { recurrence: '0', comment: '' } },
    {fieldName: "Drogas", value: { recurrence: '0', comment: '' } },
    {fieldName: "Otros", value: { recurrence: '0', comment: '' } }
]

export function getPatientHistory() {
    return medicalHistory;
}

export function updatePatientHistory(id, patientHistory) {

}
/*
export function getGeneraInformation(userId){
    const user = medicalHistory.find((mh) => { return mh.id === userId});
    if (user !== null && user !== undefined)
        return [
            { fieldName: "Nombre Completo", value: user.nombre },
            { fieldName: "Raza", value: user.raza },
            { fieldName: "Sexo", value: user.sexo },
            { fieldName: "Edad", value: user.edad } 
        ]
    return generaInformationFormat;
}

export function getPatalogicHistory(userId) {
    const user = medicalHistory.find((mh) => { return mh.id === userId });
    if (user !== null && user !== undefined)
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
    return patalogicHistoryFormat;
}

export function getNonPatologicHistory(userId) {
    const user = medicalHistory.find((mh) => { return mh.id === userId });
    if (user !== null && user !== undefined)
        return [
            {fieldName: "Alcohol", value: user.alcohol },
            {fieldName: "Tabaco", value: user.tabaco },
            {fieldName: "Drogas", value: user.drogas },
            {fieldName: "Otros", value: user.otros }
        ]
    return nonPatologicHistoryFormat;
}*/