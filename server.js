const express=require("express");
const app=express();
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
  res.sendFile(__dirname+"/bmiCalc.html");
})
app.post("/",function(req,res){
  var weight=Number(req.body.weight);
  var height=Number(req.body.height);
  var bmi=weight/(height*height);
  res.send("Your BMI is "+bmi);
})
app.listen(3000,function(){
  console.log("Server is Running");
})
