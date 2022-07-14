var exp = require('express');
var mysql = require('mysql2');

var app = exp();

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "shri@1234",
	database: "knowitdb"
});

app.listen(8082,function(){
	console.log("server started on 8082");
});

con.connect(function(err){
	if(!err)
		console.log('connected');
	else
		console.log(err.toString());
});

app.get('/emp',function(req,res){
	res.sendFile(__dirname+"/emp_dept.html");
});

app.get('/empdetails',function(req,res){
	var did = req.query.did;
	con.query('select * from emp where DEPTNO='+did,function(err,result){
		if(!err)
			{
				res.write("<table border=1>");
				res.write("<th>EmpNo</th><th>EmpName</th><th>EmpSal</th><th>EmpDeptNo</th>")
				result.forEach(function(v){
					res.write("<tr>");
					res.write("<td>"+v.EMPNO+"</td>");
					res.write("<td>"+v.ENAME+"</td>");
					res.write("<td>"+v.SAL+"</td>");
					res.write("<td>"+v.DEPTNO+"</td>");
					res.write("</tr>")
				});
				res.write("</table>");
				res.end();
			}
	});
});

app.all('*',function(req,res){
    res.send("Wrong URL ");
});