'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Role extends Model {
        static async getRole() {
            const roles = await Role.findAll()

            if (!roles) {
                return {
                    message: "Ролей не найдено",
                    status: 400
                }
            }

            return {
                roles,
                status: 200
            }
        }

        static async createRole(name) {
            const isExisting = await Role.findOne({
                where: { name }
            })

            if (isExisting) {
                return {
                    message: "Данная роль уже существует",
                    status: 400
                }
            }

            const role = await Role.create({
                name
            })

            if (!role) {
                return {
                    message: "Не удалось создать роль",
                    status: 400
                }
            }

            return {
                message: "Роль была создана",
                status: 200
            }
        }

        static async updateRole(data) {
            for (let i = 0; i < data.length; i++) {
                await Role.update({ name: data[i].name }, { where: { id: data[i].id } })
            }

            return {
                message: "Роли были обновленны",
                status: 200
            }
        }

        static async deleteRole(id) {
            const isDeleted = await Role.destroy({ where: { id } })

            if(isDeleted === 0){
                return {
                    message: "Роль не была удалена",
                    status: 400
                }
            }

            return {
                message: "Роль была удалена",
                status: 200
            }
        }
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