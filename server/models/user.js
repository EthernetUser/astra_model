'use strict';
const jwtSecret = require('../config/config.json').jwtSecret
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const {
    Model, Op
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        
        /**
         * This method receives user's email and password to check him out in the database and returns auth jwt-token.
         */
        static async loginUser(email, password) {
            const user = await User.findOne({
                where: {email}
            })

            if(!user) {
                return {
                    message: "Данный пользователь не найден",
                    status: 400
                }
            }

            const isPasswordTrue = bcrypt.compareSync(password, user.password)

            if(!isPasswordTrue) {
                return {
                    message: "Ошибка логина или пароля",
                    status: 400
                }
            }

            const payload = {
                id: user.id,
                role: user.role
            }

            const token = jwt.sign(payload, jwtSecret)

            return {
                token,
                message: "Вход выполнен",
                status: 200
            }

        }

        /**
         *  This method receives user's data to register him in the database.
         */
        static async registerUser(data) {

            const isExist = await User.findOne({
                where: {
                    [Op.or]: [
                        {email: data.email},
                        {phone: data.phone}
                    ]
                }
            })

            if(isExist) {
                return {
                    message: "Пользователь с данной почтой или телефоном уже существует",
                    status: 400
                }
            }

            const salt = bcrypt.genSaltSync(6)
            const hashedPassword = bcrypt.hashSync(data.password, salt)

            const user = await User.create({
                //email and phone are unique
                email: data.email,
                password: hashedPassword,
                firstName: data.firstName,
                lastName: data.lastName,
                role: data.role,
                phone: data.phone,
                post: data.post
            })

            if (!user) {
                return {
                    message: "Пользователь не был создан",
                    status: 500
                }
            }

            return {
                message: "Пользователь был создан",
                status: 200
            }
        }

        static associate(models) {
            // define association here
        }
    };
    User.init({
        email: {
            allowNull: false,
            type: DataTypes.STRING,
            unique: true
        },
        password: DataTypes.STRING,
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        role: {
            allowNull: true,
            type: DataTypes.STRING,
            references: {
                model: 'roles',
                key: 'name',
            }
        },
        post: {
            allowNull: true,
            type: DataTypes.STRING,
            references: {
                model: 'posts',
                key: 'name'
            }
        },
        phone: {
            allowNull: false,
            type: DataTypes.STRING,
            unique: true
        }
    }, {
        sequelize,
        modelName: 'User',
        timestamps: false
    });
    return User;
};