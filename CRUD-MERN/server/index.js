const express = require('express');
const mongoose = require('mongoose');
const app = express();
const FoodeModel = require('./models/Food.js');

app.use(express.json());

mongoose.connect('mongodb+srv://newuser:password1234@crud.elo3a5a.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
});

app.get('/', async (req, res) => {
    const food = FoodeModel({
        foodName: "Apple",
        daysSinceIAte: 3,
    });
    try {
        await food.save();
        res.send('inserted data');
    } catch (err) {
        console.log(err);
    }
});

app.listen(3001, () => {
    console.log('Server running on port 3001...')
});