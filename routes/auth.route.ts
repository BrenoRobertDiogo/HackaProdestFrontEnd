import { Response, Request, Router } from 'express'
import knex from '../database/index.database'
import Usuario from '../models/Usurio.model'

const routes = Router()

routes.get('/auth', async (request: Request, response: Response) => {
    const values: Usuario[] = await knex<Usuario[]>().from('usuario')
    response.status(200).json({ ok: values })
})

export default routes
