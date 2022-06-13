const express = require('express');

const app = express();
const path = require('path');
const hbs = require('hbs');
const port = process.env.PORT || 8000; // USABLE WHEN DEPLOYED OR HOSTED

//static path

const staticPath = path.join(__dirname,'../public')
const template_path = path.join(__dirname,'../templates/views');
const partials_path = path.join(__dirname,'../templates/partials');
// console.log(staticPath)

app.use(express.static(staticPath)); // USING MIDDLEWARE


// USING TEMPLATE ENGINE HBS
app.set('view engine', 'hbs');
app.set('views',template_path);
hbs.registerPartials(partials_path);

//routing
app.get("/",(req,res) => {
    res.render('index');
});


app.get("/about",(req,res) => {
    res.render('about');
});


app.get("/weather",(req,res) => {
    res.render('weather')
});


app.get("/*", (req, res) => {
    res.render('404error',{
        errmsg : "OOPS ! PAGE NOT FOUND"
    });
});

app.listen(port,() => {
    console.log(`listening to port ${port}`);
});
