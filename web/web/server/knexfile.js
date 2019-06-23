module.exports = {
    development: {
        client: 'mysql',
        debug: true,
        connection: {
            host: '192.168.99.100',
            user: 'david',
            password: '1qaz2wsx',
            database: 'db',
            port: '3306',
            charset: 'utf8mb4',
            collate: 'utf8mb4_unicode_ci'

        },
        migrations: {
            directory: './db/migrations',
        }
    }
};