const express = require('express')
const mongoose = require('mongoose')
const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/covid.html', (req, res) => {
    res.render('covid')
})

app.get('/about.html', (req, res) => {
    res.render('about')
})

app.get('/home.html', (req, res) => {
    res.render('home')
})


app.listen('4000', ()=> {
    console.log('Listening on port 4000')
})
