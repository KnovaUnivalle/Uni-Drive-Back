const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const port = 3000;

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.listen(port, () => {
	console.log(`I am an app on port ${port}`);
});

app.get('/', (req, res) => {
	res.send('Hello World!');
});
