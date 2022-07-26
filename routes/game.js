const express = require('express');
const gameRouter = express.Router({mergeParam: true});
const holdemRouter = require('./holdem');

class Game {
    constructor(params) {
        
    }
}

gameRouter.use('/holdem', holdemRouter);
module.exports = gameRouter;