'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Role extends Model {

    };
    Role.init({
        name: {
            allowNull: false,
            type: DataTypes.STRING,
            unique: true
        }
    }, {
        sequelize,
        modelName: 'Role',
        timestamps: false
    });
    return Role;
};