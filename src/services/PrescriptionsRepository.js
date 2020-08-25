import React from 'react';

const prescriptions = [
    {   
        id: 1,
        date: "10/8/2020",
        doc: '123456',
        name: 'Frodo',
        lastName: 'Baggins',
        description: "Rivotril 20mg",
        comment: "",
        status: "confirmed"
    },
    {   
        id: 2,
        date: "12/8/2020",
        doc: '123456',
        name: 'Frodo',
        lastName: 'Baggins',
        description: "agua mágica",
        comment: "",
        status: "pending"
    },
    {   
        id: 3,
        date: "12/8/2020",
        doc: '000002',
        name: 'Galadriel',
        lastName: 'del bosque',
        description: "Clonazepam 10mg",
        comment: "Necesito dormirrrr",
        status: "confirmed"
    },
    {   
        id: 4,
        date: "12/8/2020",
        doc: '123456',
        name: 'Frodo',
        lastName: 'Baggins',
        description: "Clonazepam 10mg",
        comment: "algun comentario",
        status: "pending"
    },
    {   
        id: 5,
        date: "13/8/2020",
        doc: '000002',
        name: 'Galadriel',
        lastName: 'del bosque',
        description: "agua mágica",
        comment: " no me quedan muchas ideas, buenas noches",
        status: "pending"
    }
]


export function createPrescription(prescription) {
    prescriptions.push({
        id: prescriptions.length,
        date: new Date(),
        description: prescription.description,
        comment: prescription.description,
        status: "pending"
    });
}

export function getPrescriptions() {
    return prescriptions;
}

export function getPendingPrescriptions() {
    return prescriptions.filter((p) => { return p.status == 'pending'});
}

export function updatePrescription (prescription) {

}

export function getPrescriptionByUser (userId) {

}