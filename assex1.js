var ex=require("express");
var app=ex();
app.get('/greet',function(req,res){
 res.send("<h1>WELCOME TO WEB APP</h1>");
 });
 app.listen(9000,function(){
	console.log("exp server start");	
});