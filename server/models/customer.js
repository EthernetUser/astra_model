'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Customer extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    Customer.init({
        firstName: {
            allowNull: false,
            type: DataTypes.STRING
        },
        lastName: {
            allowNull: false,
            type: DataTypes.STRING
        },
        phone: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        city: {
            type: DataTypes.STRING,
        }
    }, {
        sequelize,
        modelName: 'Customer',
        timestamps: false
    });
    return Customer;
};