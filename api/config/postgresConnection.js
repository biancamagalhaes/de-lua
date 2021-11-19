const pgp = require('pg-promise')();
const db = pgp({
	user: process.env.USER_DB,
	password: process.env.PASSWORD_DB,
	host: process.env.HOST_DB,
	port:  process.env.PORT_DB,
	database: process.env.NODE_ENV === 'test' ? process.env.DATABASE_TEST : process.env.DATABASE,
});

module.exports = db;