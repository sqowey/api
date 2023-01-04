const express = require('express');
const app = express();

// Bring in the routes for /helloworld and /helloworld/*/hw2
const helloWorldRoute = require('./routes/helloworld');
const hwRoute = require('./routes/hw2');

// Use the routes for their respective endpoints
app.use('/helloworld', helloWorldRoute);
app.use('/helloworld', hwRoute);

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});