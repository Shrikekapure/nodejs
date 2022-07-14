ovar exp = require('express');
var mysql = require('mysql2');

var app = exp();

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "Shri@1234",
	database: "knowitdb"
});

con.connect(function(err){
	if(!err)
		console.log("Connected to MySQL");
	else
		console.log("connection failed");
});



app.get('/emp',function(req,res){
     con.query("select empno,ename,job,mgr from emp",function(err,result){
	 if(!err)
	 {
		res.write("<table><tr><th>empno</th><th>ename</th><th>job</th><th>mgr</th>");
		result.forEach(function(v){
			res.write("<tr>");
			res.write("<td>"+v.empno+"</td>");
			res.write("<td>"+v.ename+"</td>");
			res.write("<td>"+v.job+"</td>");
			res.write("<td>"+v.mgr+"</td>");
			res.write("</tr>");	
		});
		res.write("</table>");
		res.end();
	 }
     });

});

app.get('/empadd',function(req,res){
	con.query("insert into emp (empno,ename,job) values(1001,'mayur','manager')",function(err,result){
		if(!err)
		{
			res.write("data inserted");
			res.end();
		}
	});
});
app.all('*',function(req,res){
	res.send("Invalid URL...");
});
app.listen(9000, function(){
	console.log("Express is at Port 9000");
});