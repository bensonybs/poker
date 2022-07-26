const express = require('express');
const app = express();
const pokerRouter = require('./routes/poker');
const gameRouter = require('./routes/game');

app.get('/', (req, res, next) => {
    res.send('<h1>Welcome To The Poker World!</h1>'); 
});
app.use('/cards', pokerRouter);
app.use('/games', gameRouter);






const PORT = 5050;
const starter = () => {
    console.log(`The server is listening on port ${PORT}.`);
}
app.listen(PORT, starter);