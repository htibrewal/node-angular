const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const login = require('./routes/login');
const questions = require('./routes/questions');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

app.use((req, res, next) => {
    console.log(`${new Date().getTime()} | Request: ${req.originalUrl}`);
    next();
});

// Routes
app.use('/login', login);
app.use('/questions', questions);

app.listen(PORT, () => {
    console.log(`Server is up on ${PORT}`);
});