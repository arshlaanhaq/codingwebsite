const express = require("express");
const path = require("path");
const app = express();
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
// const { hostname } = require("os");
const  hostname  = '192.168.108.80';
mongoose.connect('mongodb://localhost:27017/contactAcademy');
const port = 8000;


// define mongoose Schema
const contactSchema = new mongoose.Schema({
    name: String,
    phone: Number,
    email: String,
    address: String,
    desc : String,
  });
const contact = mongoose.model('contact', contactSchema);

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory
 
// ENDPOINTS
app.get('/', (req, res)=>{
const params = { }
    res.status(200).render('home.pug', params);
})


app.get('/contact', (req, res)=>{
const params = { }
    res.status(200).render('contact.pug', params);
})


app.post('/contact', (req, res)=>{
    var mydata =new contact(req.body)
    mydata.save().then(()=>{
        res.send("This item has been saved to the database")
    }).catch(()=>{
        res.status(400).send("Item was not saved to the database")
    })
    // res.status(200).render('contact.pug');
})



// START THE SERVER
// app.listen(port,()=>{
//     console.log(`The application started successfully on ${port}`);
// });
app.listen(port,hostname,()=>{
    console.log(`The application started successfully on http://${hostname}:${port}/`);
});