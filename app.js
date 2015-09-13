var Bot = require('node-telegram-bot'),
	config = require('./config.json'),
	assembly = require('./package.json')

var bot = new Bot({
	token: config.token
})
.on('message', function (msg) {
	console.log(msg);


	if (msg.from.username == config.admin) {		
		msg.text = msg.text.toLowerCase();
		
		if (msg.text == '/hi') hello(msg);
		if (msg.text == '/assembly') assembly(msg);
		if (msg.text == 'hello') hello(msg);
	}
})
.start();

function hello(msg) {	
	bot.sendMessage({chat_id: msg.chat.id, text: "Hello @" + msg.from.username});
}

console.log('Assembly: ' + assembly.version);