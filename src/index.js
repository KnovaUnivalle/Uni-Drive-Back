import './config/env.js';
import httpServer from './config/http.js';
import sequelize from './config/db.js';

const port = process.env.PORT || 3000;

const server = async () => {
	httpServer.listen(port, () => console.log(`I am an app on port ${port}`));
	try {
		await sequelize.sync({ force: false }).then(() => {
			console.log('Connection has been established successfully.');
		});
	} catch (error) {
		console.error('Unable to connect to the database:', error);
	}
};

server();
