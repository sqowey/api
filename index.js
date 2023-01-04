const express = require('express');
const app = express();
const config = require("./config.json");
const https = require('https');
const fs = require('fs');

// Bring in the routes for /helloworld and /helloworld/*/hw2
const helloWorldRoute = require('./routes/helloworld');
const hwRoute = require('./routes/hw2');

// Wildcard route
app.get('*', (req, res) => {
    res.send('Route not found!');
});

// Listener
if (config.secure) https.createServer({
    key: fs.readFileSync('/etc/letsencrypt/live/api.sqowey.de/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/api.sqowey.de/fullchain.pem')
}, app).listen(443);
else app.listen(config.port, () => console.log('Server listening on port ' + config.port));