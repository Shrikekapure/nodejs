var exp = require('express');
var app = exp();

app.get('/login',function(req,res){
       res.sendFile(__dirname+"/login.html");
});
app.get('/logincheck',function(req,res){
	if(req.query.username=="object" && req.query.pwd=="knowit")
		res.send("Login successful");
	else
		res.send("Failed to Login");	
});

app.all('*',function(req,res){
	res.send("Invalid URL...");
});

app.listen(9800,function(){
	console.log("Express is at Port 9800");	
});

