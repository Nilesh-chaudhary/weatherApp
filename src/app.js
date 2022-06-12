const express = require('express');

const app = express();
const port = process.env.PORT || 8000; // USABLE WHEN DEPLOYED OR HOSTED

app.get("/",(req,res) => {
    res.send("A Weather App!")
});


app.get("/about",(req,res) => {
    res.send("Welcome to about us page!")
});


app.get("/weather",(req,res) => {
    res.send("Welcome to weather page!")
});


app.get("/*",(req,res) => {
    res.send("Welcome to ERROR 404 page!")
});

app.listen(port,() => {
    console.log(`listening to port ${port}`);
});
