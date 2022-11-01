const express = require('express')
const { json } = require('express/lib/response')
const morgan = require('morgan')
const postRoutes = require('./routes/posts.routes')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.use(postRoutes)

/*app.use((err, req, res, next) => {
    return res,json({
        message: err.message
    })
})*/

app.listen(3000)

console.log("running on PORT 3000")