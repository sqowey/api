const express = require('express');
const router = express.Router();

// This route will handle the request made to "ADDRESS/helloworld"
router.get('/', (req, res) => {
    res.send('Hello world!');
});

module.exports = router;