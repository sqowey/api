const express = require('express');
const router = express.Router();

// This route will handle the request made to "ADDRESS/helloworld/*/miau"
// The "*" is a wildcard and can match any string
router.get('/*/hw2', (req, res) => {
    res.send('H-W-2!');
});

module.exports = router;