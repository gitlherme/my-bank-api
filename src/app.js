import express from 'express'
import bodyParser from 'body-parser'
import accountRouter from './routes/accounts.routes.js'

const app = express()
const port = 3333

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/accounts', accountRouter)

app.listen(port, () => console.log(`App is running in localhost:${port}`))