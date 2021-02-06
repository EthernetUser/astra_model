'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class RoleApi extends Model {
        static async getRoleApi() {
            const roleApi = await RoleApi.findAll()
            if (!roleApi) {
                return {
                    message: "Нет списка ролей для API",
                    status: 400
                }
            }

            return {
                roleApi,
                status: 200
            }
        }

        static async updateRoleApi(id, data) {
            const roleApi = await RoleApi.findByPk(id)

            if (!roleApi) {
                return {
                    message: "Роли для API не найдены",
                    status: 400
                }
            }

            try {
                JSON.parse(data)
            } catch (error) {
                return {
                    message: "Поле data должна быть стрингифицированным json",
                    status: 400
                }
            }

            roleApi.roles = data
            await roleApi.save()

            return {
                message: "Роли для API были обновленны",
                status: 200
            }
        }

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