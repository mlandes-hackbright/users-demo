import { config } from 'dotenv';
import { Sequelize } from 'sequelize';

config();

const { CONNECTION_STRING } = process.env;
const sql = new Sequelize(CONNECTION_STRING);

const SQL = `
DROP TABLE IF EXISTS users;

CREATE TABLE users (
	id SERIAL PRIMARY KEY,
	username TEXT NOT NULL,
	password TEXT NOT NULL
);
`;

sql.query(SQL).then(sqlResult => {
    console.log('successfully seeded the database');
}).catch(err => {
    console.log('failed to seed database', err);
});
