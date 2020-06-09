module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: env('${process.env.DATABASE_CLIENT}', 'mysql'),
        host: env('${process.env.DATABASE_HOST}', '127.0.0.1'),
        port: env.int('${process.env.DATABASE_PORT}', 3306),
        database: env('${process.env.DATABASE_NAME}', 'branchless-admin'),
        username: env('${process.env.DATABASE_USERNAME}', 'root'),
        password: env('${process.env.DATABASE_PASSWORD}', ''),
        ssl: env.bool('${process.env.DATABASE_SSL}', false),
      },
      options: {}
    },
  },
});
