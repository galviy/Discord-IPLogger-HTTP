var http = require('http'); 
var server = http.createServer(function (req, res) {  

    if (req.url == '/') { 
    
var ip = (req.headers['x-forwarded-for'] || '').split(',').pop().trim() || 
        req.connection.remoteAddress || 
        req.socket.remoteAddress || 
        req.connection.socket.remoteAddress
		var ipAddress = req.connection.remoteAddress;
		 if (ipAddress.substr(0, 7) == "::ffff:") {
    ipAddress = ipAddress.substr(7)
  }
  console.log('New Connection')
  console.log('======================================')
  console.log('IP-Logger : ' + ipAddress)
  console.log('Method : ' + req.method)
  console.log('Route : ' + req.url)
  console.log('Headers : ' + req.headers['user-agent'])
  console.log('Host/IP : ' + req.headers['host'])
  console.log('Connection : ' + req.headers['connection'])
  console.log('Accept : ' + req.headers['accept'])
  console.log('HTTP Version : ' + req.httpVersion)
  ///Coded by !GalvinID#3839
  console.log('======================================')
  
  res.write('<p>Hi There &#128526;</p>')			
		res.write('<meta http-equiv = "refresh" content = "0.1; url = https://PUT YOUR WEBSITE LINK " /')
		res.write('</body>') ;
		res.write('</html>') ;
		
        res.end();
    }
    
else  
req.connection.remoteAddress || 
        req.socket.remoteAddress || 
        req.connection.socket.remoteAddress
		var ipAddress = req.connection.remoteAddress;
        res.end('');
});

server.listen(80); 
console.log('Simple IP-Logger by GalvinID')
console.log('Server UP in Port '+ server._connectionKey)



