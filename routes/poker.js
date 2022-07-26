const express = require('express');
const pokerRouter = express.Router();


class Poker {
    constructor(hasJokers) {
        this._suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
        this._ranks = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];
        this._cards = [];
        this._suits.forEach(suit => {
            this._ranks.forEach(rank => {
                this._cards.push({'suit': suit, 'rank': rank});
            });
        });
        if (hasJokers) {
            const joker1 = {'suit': 'Joker', 'rank': 'Joker1'};
            const joker2 = {'suit': 'Joker', 'rank': 'Joker2'};
            this._cards.push(joker1);
            this._cards.push(joker2)
        }
    }
    draw() {
        const cardCounts = this._cards.length;
        const randomNumber = Math.floor(Math.random() * cardCounts);
        const card = this._cards[randomNumber];
        this._cards.splice(randomNumber, 1)
        return `You got a ${card.rank} of ${card.suit}`;
    }
}


const drawing = new Poker(false);

//Test for draw the cards and jokers
// const joker = new Poker(true);
// for (let i = 1; i< 53; i++) {
//     console.log(drawing.draw());
// }
// console.log(drawing._cards);
// console.log(joker._cards);


//Router
pokerRouter.route('/')
    .get((req, res, next) => {
        res.json(drawing._cards);
});
// pokerRouter.route('/draw/:numOfCards')
//     .get((req, res, next) => {
//         console.log(req.params.numOfCards);
//         const numberOfCards = req.params.numOfCards;
//         if(!numberOfCards) {
//             res.send(drawing.draw());
//         } else {
//                 let result = '';
//                 for(let i = 0; i < numberOfCards; i++){
//                     result = result + drawing.draw() + '\r\n';
//                 }
//                 console.log(result);
//                 res.send(result);
//         }
// });


module.exports = pokerRouter;
