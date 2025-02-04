import express from 'express';
import bodyParser from 'body-parser';
import { get } from 'http';

const app = express();
const port = 4000;

const addItem = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    // res.send('Hello World');
    const d = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
    });
    res.render('index.ejs', {
        day: d,
        newItems: addItem,
    });
});
app.post('/', (req, res) => {
    const newItem = req.body.newItem;
    if(newItem.trim() !== '') {
        addItem.push(newItem);
    }
    res.redirect('/');
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});