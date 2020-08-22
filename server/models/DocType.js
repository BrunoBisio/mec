const { Sequelize, DataTypes } = require('sequelize');
const db = require('../database');
const race = require('./Race');

const DocType = db.define('DocType', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    docTypeCode: {
        type: DataTypes.STRING
    },
    docTypeName: {
        type: DataTypes.STRING
    },
    createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    },
    updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    }
}, {
    tableName: 'documentTypes'
});

DocType.belongsTo(race);

module.exports = DocType;