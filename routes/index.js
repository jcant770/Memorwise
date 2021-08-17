const express = require('express');

const NRouter = require('./notes');

const app = express();

app.use('/notes', NRouter);

module.exports = app;