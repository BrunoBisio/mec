import React from 'react';

const docTypes = [
    {
        id: 1,
        codigo: 'DD',
        raza: 'Enano'
    },
    {
        id: 2,
        codigo: 'DE',
        raza: 'Elfo'
    },
    {
        id: 3,
        codigo: 'DH',
        raza: 'Hobbit'
    },
    {
        id: 4,
        codigo: 'DM',
        raza: 'Mago'
    },
    {
        id: 5,
        codigo: 'DN',
        raza: 'Nazgul'
    },
    {
        id: 6,
        codigo: 'DO',
        raza: 'Orco'
    },
    {
        id: 7,
        codigo: 'DU',
        raza: 'Humano'
    },
    {
        id: 8,
        codigo: 'Otro',
        raza: 'Empleado'
    }
]

const races = [
    {
        id: 1,
        name: 'Elfo'
    },
    {
        id: 2,
        name: 'Enano'
    },
    {
        id: 3,
        name: 'Mago'
    },
    {
        id: 4,
        name: 'Hobbit'
    },
    {
        id: 5,
        name: 'Humano'
    },
    {
        id: 6,
        name: 'Nazgul'
    },
    {
        id: 7,
        name: 'Orco'
    }
]

const cities = [
    {
        id: 1,
        name: 'Erebor'
    },
    {
        id: 2,
        name: 'Gondor'
    },
    {
        id: 3,
        name: 'Hobbiton'
    },
    {
        id: 4,
        name: 'Mordor'
    },
    {
        id: 5,
        name: 'Moria'
    },
    {
        id: 6,
        name: 'Rohan'
    }
]

const insurances = [
    {
        id: 1,
        name: 'MEC10'
    },
    {
        id: 2,
        name: 'MEC20'
    },
    {
        id: 3,
        name: 'MEC30'
    },
    {
        id: 4,
        name: 'MEC50'
    },
    {
        id: 5,
        name: 'MEC60'
    },
    {
        id: 6,
        name: 'MEC-ELFOS'
    }
]


export function getDocTypes() {
    return docTypes;
}

export function getRaces(){
    return races;
}

export function getCities() {
    return cities;
}

export function getInsurances() {
    return insurances;
}

export function getRoles() {
    return [];
}

export function getPlans () {
    return;
}

export function getSpecialties () {

}

export function getClinics () {
    
}