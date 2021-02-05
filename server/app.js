const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const PORT = Number(process.env.PORT || require('./config/config.json').PORT)

app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

app.use('/api/auth', require('./routers/auth-router'))
app.use('/api/role', require('./routers/role-router'))
app.use('/api/roleapi', require('./routers/roleapi-router'))

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