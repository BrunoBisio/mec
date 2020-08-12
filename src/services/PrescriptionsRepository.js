import React from 'react';

let prescriptions = [
    {   
        id: 1,
        date: new Date(),
        description: "Paracetamol x200",
        comment: "",
        status: "confirmed"
    },
    {   
        id: 2,
        date: new Date(),
        description: "Marihuana x200kg por dia",
        comment: "",
        status: "confirmed"
    },
    {   
        id: 3,
        date: new Date(),
        description: "Morfina x200cc x hora",
        comment: "",
        status: "confirmed"
    }
]

export function add(prescription) {
    prescriptions.push({
        id: prescriptions.length,
        date: new Date(),
        description: prescription.description,
        comment: prescription.description,
        specialty: prescription.specialty,
        status: "pending"
    });
}

export function get() {
    return prescriptions;
}