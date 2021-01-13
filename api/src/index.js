const express = require("express");
const app = express();

app.get('/test', (req, res) => {
    res.send('express working!!!');
});

app.listen(3000, () => {
    console.log('Startes API service');
});