const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const path=require('path');
const mongoose=require('mongoose');
const app=express();

//Import our route file here
const route=require('./route/routes');


//Database connection
mongoose.connect('mongodb://chanti:chanti123@ds131137.mlab.com:31137/shoplist',{
    useMongoClient:true
});
//Check the db connection

mongoose.connection.on('connected',function(){
    console.log('Mongodb is connected successfully');
})
mongoose.connection.on('error',function(err){
    if(err){
        console.log('Error in databse connection' +err);
    }
})

//Port, on which our app is gonna run
const port=process.env.PORT||8080;


//Adding Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.use('/api',route);
//Default Routing

app.use(express.static(path.join(__dirname,'public')));
app.get('*',function(req,res){
    res.sendfile(path.join(__dirname,'publlic/index.html'));
})

app.get('/',function(req,res){
    res.send('Response from server');
})



app.listen(port,function(err){
    if(err)
    {
        console.log('Error in connecting port '+err);
    }
    else{
        console.log('Server started running on port '+port);
    }
})