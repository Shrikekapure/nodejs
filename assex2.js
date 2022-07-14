var ex=require("express");
var app=ex();
app.get('/login',function(req,res){
 res.sendFile(__dirname+"/forms_Assign1.html");
 });
 app.get('/check',function(req,res){
	if(req.query.uid=="welcome" && req.query.pass=="shri123")
		res.send("Login successful");
	else
		res.send("Failed Login");	
});
 app.listen(9000,function(){
	console.log("exp server start");	
});