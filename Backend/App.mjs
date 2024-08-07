import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import routes from './Routes/routes.mjs'
const app = express()

app.use(cors())
app.use(bodyParser.json())


app.use('/api', routes);

app.listen(5000, () => {
    console.log('Server running on port 5000')
})