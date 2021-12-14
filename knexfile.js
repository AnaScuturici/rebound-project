// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: "127.0.0.1",
      user: process.env.DB_USER,
      password: process.env.DB_PW,
      database: process.env.DB_NAME || 'rebound'
    },
    migrations: {
      directory: __dirname + '/knex/migrations',
    },
    seeds: {
      directory: __dirname + '/knex/seeds'
    }
  },
};
