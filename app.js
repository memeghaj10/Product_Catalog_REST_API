const express = require('express');
const bodyParser = require('body-parser');
const mongojs = require('mongojs');

const app = express();

const PORT=3000;

app.use(bodyParser.json());


//Home
app.get('/',(req,res,next) => {
	res.send('Hello World');
});


//Fetch all Products
app.get('/api/products',(req,res,next) => {
	res.send('Please use /api/Products');
});


//Fetch single Products
app.get('/api/products/:id',(req,res,next) => {
	res.send('fetch product '+req.params.id);
});

//Add Product
app.post('/api/products',(req,res,next) => {
	res.send('Add Products');
});


//Update Products
app.put('/api/products/:id',(req,res,next) => {
	res.send('Update Products with that ID '+req.params.id);
});


//Delete Products
app.delete('/api/products/:id',(req,res,next) => {
	res.send('Delete product '+req.params.id);
});



app.listen(PORT,()=>{
	console.log('Server started on port '+PORT);
});