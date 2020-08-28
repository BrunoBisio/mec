import React from 'react';
import RestService from './RestService';
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
    console.log("entro al getDocTypes")
    debugger
    return RestService.get('/doctypes');
}

export function getRaces(){
    return RestService.get('/races');
}

export function getCities() {
    return RestService.get('/cities');
}

export function getInsurances() {
    //return RestService.get('/clinics');
}

export function getRoles() {
    return RestService.get('/roles');
}

export function getPlans () {
    return RestService.get('/plans');
}

export function getSpecialties () {
    return RestService.get('/specialties');
}

export function getClinics () {
    return RestService.get('/clinics');
}

export function getDocTypesWithPatients() {
    return {
        "status": 200,
        "data": [
            {
                "id": 1,
                "docTypeCode": "DD",
                "docTypeName": "Documento Enano",
                "RaceId": 2,
                "Users": []
            },
            {
                "id": 2,
                "docTypeCode": "DE",
                "docTypeName": "Documento Elfo",
                "RaceId": 1,
                "Users": []
            },
            {
                "id": 3,
                "docTypeCode": "DH",
                "docTypeName": "Documento Hobbit",
                "RaceId": 4,
                "Users": []
            },
            {
                "id": 4,
                "docTypeCode": "DM",
                "docTypeName": "Documento Mago",
                "RaceId": 3,
                "Users": []
            },
            {
                "id": 5,
                "docTypeCode": "DN",
                "docTypeName": "Documento Nazgul",
                "RaceId": 6,
                "Users": []
            },
            {
                "id": 6,
                "docTypeCode": "DO",
                "docTypeName": "Documento Orco",
                "RaceId": 7,
                "Users": []
            },
            {
                "id": 7,
                "docTypeCode": "DU",
                "docTypeName": "Documento Humano",
                "RaceId": 5,
                "Users": []
            },
            {
                "id": 8,
                "docTypeCode": "EMPLEADO",
                "docTypeName": "Id Empleado",
                "RaceId": 8,
                "Users": [
                    {
                        "id": 3,
                        "password": "$2a$10$Oe3fq/5jsTscChRnMzEAaeZ3/cKsYO.6.W770urDcRhzVexGqIaka",
                        "docNumber": "2",
                        "name": "Sauron",
                        "lastName": "Master of All",
                        "gender": "M",
                        "birthdate": "1993-12-27T00:00:00.000Z",
                        "address": "Torre de Sauron, Mordor",
                        "phone": "48248786",
                        "cellphone": "1534219816",
                        "mail": "SauronADMIN@gmail.com",
                        "createdAt": "2020-08-22T00:00:00.000Z",
                        "updatedAt": "2020-08-24T04:43:24.000Z",
                        "deleteRequest": false,
                        "deletedAt": null,
                        "RoleId": 1,
                        "CityId": 4,
                        "DocTypeId": 8,
                        "RaceId": 8,
                        "PlanId": null
                    },
                    {
                        "id": 1,
                        "password": "123456",
                        "docNumber": "11111111",
                        "name": "Sauron",
                        "lastName": "Master of All",
                        "gender": "M",
                        "birthdate": "1993-12-27T00:00:00.000Z",
                        "address": "Torre de Sauron, Mordor",
                        "phone": "48248786",
                        "cellphone": "1534219816",
                        "mail": "SauronADMIN@gmail.com",
                        "createdAt": "2020-08-22T00:00:00.000Z",
                        "updatedAt": "2020-08-22T00:00:00.000Z",
                        "deleteRequest": false,
                        "deletedAt": null,
                        "RoleId": 1,
                        "CityId": 4,
                        "DocTypeId": 8,
                        "RaceId": 8,
                        "PlanId": null
                    }
                ]
            }
        ]
    }
}
 
export function getSpecialtiesWithClinicsWithMedics() {
    return {
        "status": 200,
        "data": [
            {
                "id": 1,
                "name": "Addicciones",
                "description": "Addiciones a substancias u objetos",
                "Clinics": [
                    {
                        "id": 1,
                        "name": "Clinica Gondor",
                        "createdAt": "2020-08-22T00:00:00.000Z",
                        "updatedAt": "2020-08-22T00:00:00.000Z",
                        "deletedAt": null,
                        "CityId": 2,
                        "Users": [
                            {
                                "id": 1,
                                "password": "123456",
                                "docNumber": "11111111",
                                "name": "Sauron",
                                "lastName": "Master of All",
                                "gender": "M",
                                "birthdate": "1993-12-27T00:00:00.000Z",
                                "address": "Torre de Sauron, Mordor",
                                "phone": "48248786",
                                "cellphone": "1534219816",
                                "mail": "SauronADMIN@gmail.com",
                                "createdAt": "2020-08-22T00:00:00.000Z",
                                "updatedAt": "2020-08-22T00:00:00.000Z",
                                "deleteRequest": false,
                                "deletedAt": null,
                                "RoleId": 1,
                                "CityId": 4,
                                "DocTypeId": 8,
                                "RaceId": 8,
                                "PlanId": null
                            }
                        ]
                    }
                ]
            },
            {
                "id": 2,
                "name": "Clinica Medica",
                "description": "Controles generales",
                "Clinics": []
            },
            {
                "id": 3,
                "name": "Heridas Magicas",
                "description": "Heridas causadas por maleficios o hechizo",
                "Clinics": []
            },
            {
                "id": 4,
                "name": "Nutricion",
                "description": "Dietas y estilos de vida saludables",
                "Clinics": []
            },
            {
                "id": 5,
                "name": "Psicologia",
                "description": "Cuidados de la salud mental",
                "Clinics": []
            },
            {
                "id": 6,
                "name": "Mordeduras",
                "description": "Mordeduras de animales magicos",
                "Clinics": []
            },
            {
                "id": 7,
                "name": "Picadura Araña gigante",
                "description": "Picaduras venenosas",
                "Clinics": []
            },
            {
                "id": 8,
                "name": "Quemaduras",
                "description": "Quemaduras de animales magicos",
                "Clinics": []
            },
            {
                "id": 9,
                "name": "Cortes de Nazgul",
                "description": "Cortes de Nazgul",
                "Clinics": []
            },
            {
                "id": 10,
                "name": "Embrujos Irreversibles",
                "description": "Embrujos cronicos",
                "Clinics": []
            },
            {
                "id": 11,
                "name": "Maleficios",
                "description": "Maleficios oscuros",
                "Clinics": []
            },
            {
                "id": 12,
                "name": "Encantamientos mal realizados",
                "description": "Encantamientos propios o ajenos",
                "Clinics": []
            },
            {
                "id": 13,
                "name": "Accidentes de aguilas",
                "description": "Accidentes en las alturas",
                "Clinics": []
            },
            {
                "id": 14,
                "name": "Necrologia",
                "description": "Autopsias",
                "Clinics": []
            }
        ]
    }
}