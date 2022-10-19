import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import Admin from '../schemas/admin.schema.js';

const app = express();

//middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

//routes
app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.get('/testAdmin', (req, res) => {
	Admin.create({
		email: 'victor.sapuyes@correounivalle.edu.co',
		password: 'unaclavesecreta',
	}).then(admin => {
		admin
			.validPassword('unaclavesecreta', admin.password)
			.then(value => res.json(value));
	});
});

export default app;
