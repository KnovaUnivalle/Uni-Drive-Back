import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

const app = express();

//middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

//routes
app.get('/', (req, res) => {
	res.send('Hello World!');
});

export default app;
