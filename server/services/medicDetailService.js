const MedicDetail = require('../models/MedicDetail');
const User = require('../models/User');

exports.createMedic = function (fullMedicDetail) {
    let myPromise = new Promise((resolve, reject) => {
        User.create(fullMedicDetail.user).then((persistedUser) => {
            MedicDetail.create({
                ClinicId: fullMedicDetail.clinic.id,
                SpecialtyId: fullMedicDetail.specialty.id,
                UserId: persistedUser.id
            }).then((persistedMedicDetail) => {
                resolve(persistedMedicDetail);
            }).catch((medicDetailCreationError) => {
                reject(medicDetailCreationError);
            });
        }).catch((userCreationError) => {
            reject(userCreationError);
        });
    });
    return myPromise;
}