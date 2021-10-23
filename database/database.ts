import { knex } from 'knex'
import dbsettings from '../settings/database.settings'
export default knex(dbsettings)
