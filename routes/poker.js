const express = require('express');
const pokerRouter = express.Router();


class Poker {
    constructor(game) {
        this._game = game;
        this._suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
        this._ranks = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];
        this._cards = [];
        this._suits.forEach(suit => {
            this._ranks.forEach(rank => {
                this._cards.push({'suit': suit, 'rank': rank});
            });
        });
    }
    draw() {
        const randomNumber = Math.floor(Math.random() * 52);
        const card = this._cards[randomNumber];
        return `You got a ${card.rank} of ${card.suit}`;
    }
}

const bridge = new Poker('bridge');

pokerRouter.route('/')
    .get((req, res, next) => {
        res.json(bridge);
});
pokerRouter.route('/draw/:numOfCards')
    .get((req, res, next) => {
        console.log(req.params.numOfCards);
        const numberOfCards = req.params.numOfCards;
        if(!numberOfCards) {
            res.send(bridge.draw());
        } else {
                let result = '';
                for(let i = 0; i < numberOfCards; i++){
                    result = result + bridge.draw() + '\r\n';
                }
                console.log(result);
                res.send(result);
        }
});


module.exports = pokerRouter;
