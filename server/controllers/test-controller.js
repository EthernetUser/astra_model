const {Test} = require('../models')

async function add(req, res, next) {
    try {
        await Test.create({
            login: req.body.login,
            name: req.body.name,
            age: req.body.age
        })
        res.status(200).json({message: 'ok'})
    } catch (error) {
        res.status(500).json({message: 'error1', error})
    }
}

module.exports = {
    add
}