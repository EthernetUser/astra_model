const { Post } = require('@models')

class PostController {
    static async get(req, res, next) {
        try {
            const result = await Post.getPosts()
            res.status(result.status).json(result)
        } catch (error) {
            return res.status(500).json({ message: "Ошибка сервера" })
        }
    }

    static async create(req, res, next) {
        try {
            const { name } = req.body
            const result = await Post.createPost(name)
            res.status(result.status).json(result)
        } catch (error) {
            return res.status(500).json({ message: "Ошибка сервера" })
        }
    }

    static async update(req, res, next) {
        try {
            const { id, name } = req.body
            const result = await Post.updatePost(id, name)
            res.status(result.status).json(result)
        } catch (error) {
            return res.status(500).json({ message: "Ошибка сервера" })
        }
    }

    static async delete(req, res, next) {
        try {
            const { id } = req.body
            const result = await Post.deletePost(id)
            res.status(result.status).json(result)
        } catch (error) {
            return res.status(500).json({ message: "Ошибка сервера" })
        }
    }
}

module.exports = {
    PostController
}