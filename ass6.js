var http = require('http');
var url = require('url');
var fs = require('fs');
var count=0;

var server = http.createServer(function(req,res){	
	var url_p = url.parse(req.url,true).pathname;	
	if(url_p != '/favicon.ico')
	{
	    count++;
	    var str = ""+count+"";
	    fs.writeFile("visited.txt",str,function(err){
			if(!err)
			{
				console.log("file is updated");
			}
			else
				console.log("error in updating");
		});
		fs.readFile('visited.txt', function(err, data){
			if(!err)
			{
				console.log("counted visitor");	
				res.writeHead(200,{'content-type':'text/html'});
				res.write(data);
				res.end();							
			}
		else		
			console.log(err.toString());
	
		});		
	   		
	}	
});

server.listen(9000, function(){
	console.log("server running at 9000");
})