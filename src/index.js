import express, { json } from 'express';
import morgan from 'morgan';
import cors from 'cors';
const port = 3000;

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(json());

app.listen(port, () => {
	console.log(`I am an app on port ${port}`);
});

app.get('/', (req, res) => {
	res.send('Hello World!');
});
