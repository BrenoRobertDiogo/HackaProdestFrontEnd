import express, { Request, Response } from 'express'
import cors from 'cors'

import { api_v1 } from './routes'

const app = express()

app.use(cors())
app.use(express.json())

app.use(api_v1)

app.listen(5000, () => {
    console.log('Server Inicializado ...')
})
