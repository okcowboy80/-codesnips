const express = require('express');
const snipRouter = express.Router();

snipRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the snips to you');
})
.post((req, res) => {
    res.end(`Will add the snip: ${req.body.title} with author: ${req.body.author}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /users');
})
.delete((req, res) => {
    res.end('Deleting all snips');
});

module.exports = snipRouter;