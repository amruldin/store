const express = require('express');

const path = require('path');

const app = express();

const shop = require("./routes/shop");

const products = require("./routes/product");

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));



app.use(products);
app.use(shop);


app.listen(3000);
