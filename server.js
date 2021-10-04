const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 40000;

app.use(bodyParser.json({limit: '100mb'}));
app.use(bodyParser.urlencoded({
    extended: true,
    limit: '100mb'
}));

app.use(cors());

app.all('*',function(req,res,next){
    res.header('Access-Control-Allow-Origin','*'); 
    res.header('Access-Control-Allow-Methods','PUT,GET,POST,DELETE,OPTIONS'); 
    res.header('Access-Control-Allow-Headers','Content-Type'); 
    next();
});

app.get('/',function(req,res){
    res.send('Node API');
});

app.get('/currentDate',function(req,res){
    let currentDate = new Date();
    let localeDate = currentDate.toLocaleDateString('es-MX');
    res.send(localeDate);
});

app.get('/fullName',function(req,res){
    res.send('Francisco Albear Cardenas');
});

app.get('/city',function(req,res){
    res.send('Monterrey, N.L');
});

app.get('/school',function(req,res){
    res.send('FIME');
});

app.post('/sumTwoNumbers',function(req,res){
    let _requestBody = req.body;
    let first_number = _requestBody.firstNumber;
    let second_number = _requestBody.secondNumber;
    let sum = first_number + second_number;
    res.send(JSON.stringify(sum));
});

app.post('/multThreeNumbers',function(req,res){
    let _requestBody = req.body;
    let first_number = _requestBody.firstNumber;
    let second_number = _requestBody.secondNumber;
    let third_number = _requestBody.thirdNumber;
    let multiplication = first_number * second_number * third_number;
    res.send(JSON.stringify(multiplication));
});

app.post('/squareArea',function(req,res){
    let _requestBody = req.body;
    let side = _requestBody.side;
    let area = side ** 2;
    res.send(JSON.stringify(area));
});

app.post('/triangleArea',function(req,res){
    let _requestBody = req.body;
    let base = _requestBody.base;
    let height = _requestBody.height;
    let area = base * height / 2;
    res.send(JSON.stringify(area));
});

app.listen(port, function(){
    console.log('My app is running at the port' + port);
});