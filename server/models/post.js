'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Post extends Model {

        static async getPosts() {
            const posts = await Post.findAll()

            if (!posts) {
                return {
                    message: "Должностей не найдено",
                    status: 400
                }
            }

            return {
                posts,
                status: 200
            }
        }

        static async createPost(name) {
            const isExisting = await Post.findOne({
                where: { name }
            })

            if (isExisting) {
                return {
                    message: "Данная должность уже существует",
                    status: 400
                }
            }

            const post = await Post.create({
                name
            })

            if (!post) {
                return {
                    message: "Должность не была создана",
                    status: 500
                }
            }

            return {
                message: "Должность была создана",
                status: 200
            }
        }

        static async updatePost(id, name) {
            const post = Post.findByPk(id)

            if (!post) {
                return {
                    message: "Должность не была найденна",
                    status: 400
                }
            }

            if (post.name === name) {
                return {
                    message: "Новое имя должности полностью совпадает со старым",
                    status: 400
                }
            }

            const samePost = await Post.findOne({
                where: { name }
            })

            if (samePost) {
                return {
                    message: "Должность с таким именем уже существует",
                    status: 400
                }
            }

            post.name = name
            await post.save()

            return {
                message: "Имя роли было обновленно",
                status: 200
            }
        }

        static async deletePost(id) {
            const isDeleted = await Post.destroy({
                where: { id }
            })

            if (isDeleted === 0) {
                return {
                    message: "Должность не была обновленна",
                    status: 400
                }
            }

            return {
                message: "Должность была удаленна",
                status: 200
            }
        }

        static associate(models) {
            // define association here
        }
    };
    Post.init({
        name: {
            allowNull: false,
            type: DataTypes.STRING
        }
    }, {
        sequelize,
        modelName: 'Post',
        timestamps: false
    });
    return Post;
};