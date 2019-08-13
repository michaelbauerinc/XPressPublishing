const express = require('express');
const apiRouter = express.Router();
const artistsRouter = require('./artists.js');
const seriesRouter = require('./series.js');

apiRouter.use('/artist', artistsRouter);
apiRouter.use('/series', seriesRouter);

module.exports = apiRouter;