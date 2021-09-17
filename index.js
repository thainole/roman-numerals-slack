const express = require('express');
const routes = require('./routes/routes');

const app = express();
const port = process.env.PORT || 8080;

// Middlewares
// For post and put request bc of the data we send
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Setting the port
app.set('port', port);

// Routes
app.use(routes);

// Initializing server
const server = app.listen(port, () => console.log(`app listening on port ${port}`));

module.exports = { app, server };
