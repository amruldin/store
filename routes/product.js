const express = require('express');
const path = require('path');
const router = express.Router();
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));


router.get('/add_product',(req, res, next) => {

    res.sendFile(path.join(__dirname,'../','views','add_product.html'));
    
});


router.post('/add_product',(req, res,exit)=>{
    console.log("Printing Body....");
    console.log(req.body)
    res.redirect('/');
});




module.exports = router;