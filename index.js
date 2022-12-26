const express = require('express')
const app = express()

app.get('/', (req, res) => {
	res.send('Hello, World!')
})

const timeout = 3000;

function handle(signal) {
	console.log(`Received ${signal}, shutting server in ${timeout} ms`);
	return new Promise(resolve => {
		setTimeout(() => {
			console.log('End of timeout, shutting down server now.');
			resolve();
			process.exit(0);
		}, timeout);
	});
}

process.on('SIGTERM', handle);


app.listen(3000, () => {
	console.log('Server listening on port 3000')
})
