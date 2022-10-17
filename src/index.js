import './config/env.js';
import httpServer from './config/http.js';

const port = process.env.PORT || 3000;

const server = () => {
	httpServer.listen(port, () => console.log(`I am an app on port ${port}`));
};

server();
