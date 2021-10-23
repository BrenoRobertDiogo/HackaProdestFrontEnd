import { Router } from 'express'
const api_v1 = Router()

import rAuth from './routes/auth.route'

const routes_api_v1 = [rAuth]

api_v1.use('/api/v1', ...routes_api_v1)

export { api_v1 }
