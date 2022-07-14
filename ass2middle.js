var exp=require('express');
var fs = require('fs');

var app=exp();

app.listen(9000,function(){
console.log("Express aplication started at server 9000");
});


app.get('/login',function(req,res, next){
	res.sendFile(__dirname +"/login.html");
}); 

app.use( function(req,res,next){
	var cdate=new Date();
	var str = "Request Received for" + req.url + " at "+ cdate.toString()+"\n";
	fs.appendFile("log.txt",str,function(err){
	if(!err)
	{
		console.log("Log gernerated");
	}
	});
	next();
});