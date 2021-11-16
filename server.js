const express = require("express");
const compression = require('compression');
const cors = require("cors");

const path = require("path");

const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(compression());

app.use(express.static('public'));

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, "./public/index.html"));
})

app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});