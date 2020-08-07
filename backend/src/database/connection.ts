import knex from 'knex'
import { resolve } from 'path'

const connect = knex({
  client: "sqlite3",
  connection: {
    filename: resolve(__dirname, "db.sqlite")
  },
  useNullAsDefault: true,
})

export default connect;
