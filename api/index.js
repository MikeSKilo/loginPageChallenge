const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require("./routes/auth.js");

const app = express();
const PORT = process.env.PORT || 5000;

require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.use('/auth', authRoutes)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
