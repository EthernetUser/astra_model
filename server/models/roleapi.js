'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class RoleApi extends Model {
        static associate(models) {
            // define association here
        }
    };
    RoleApi.init({
        name: DataTypes.STRING,
        roles: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'RoleApi',
        timestamps: false
    });
    return RoleApi;
};