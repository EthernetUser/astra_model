require('module-alias/register')
const express = require('express')
const path = require('path')
const cors = require('cors')
const PORT = Number(process.env.PORT || require('@config').PORT)
const app = express()

app.use(express.json())
app.use(cors())

app.use('/api/auth', require('@routers/auth-router'))
app.use('/api/role', require('@routers/role-router'))
app.use('/api/roleapi', require('@routers/roleapi-router'))
app.use('/api/post', require('@routers/post-router'))
app.use('/api/task', require('@routers/task-router'))
app.use('/api/user', require('@routers/user-router'))

if(process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.join('build')))
    
    app.get('*', (req, res) => {
        res.sendFile(path.resolve('build', 'index.html'))
    })
}

async function start() {
    try {
        app.listen(PORT, () => {
            console.log(`Server was launched on ${PORT} port...`);
        })
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}

start()