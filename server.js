//Server Instantiate
const express=require('express');
const app=express();


//used to parse req.body in server
const bodyParser=require('body-parser')  ///Initialization of bodtparser object
//specifically pass json data and add to the requst body
app.use(bodyParser.json());

//activate the server on port 3000
app.listen(3000, ()=>{
    console.log("Hey server is ready")
}); 

//Routes
 
app.get('/',(req,res)=>{
    res.send(" hi here")
})

app.post('/api/cars', (req,res)=>{
    const{name,brand}=req.body;
    console.log(name);
    console.log(brand);
    res.send("sagar always alaways awalways here")
})

const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/myDatabase',{
    //Permanant Configuration for connecting DB and application
    useNewUrlParser:true,
    useUnifiedTopology:true
})

.then(()=>{console.log("Connection Successfull")})
.catch((err)=>{console.log("Recieved Error")});