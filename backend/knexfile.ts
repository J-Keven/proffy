import { resolve } from 'path'

module.exports =  {
  client: "sqlite3",
  connection: {
    filename: resolve(__dirname, 'src', 'database', 'db.sqlite'),
  },
  migrations: {
    directory: resolve(__dirname, 'src', 'database', 'migrations')
  },
  useNullAsDefault: true,
}
