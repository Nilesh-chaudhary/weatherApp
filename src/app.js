const express = require('express');

const app = express();
const path = require('path')
const port = process.env.PORT || 8000; // USABLE WHEN DEPLOYED OR HOSTED

//static path

const staticPath = path.join(__dirname,'../public')
// console.log(staticPath)

app.use(express.static(staticPath));

//routing
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
