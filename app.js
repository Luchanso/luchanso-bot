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
		
		if (msg.text == '/hi' ||
			msg.text == 'hello' ||
			msg.text == 'hi'
			) sendHello(msg);

		if (msg.text == '/assembly') sendAssembly(msg);

		if (msg.text == '/about@luchanso-bot') sendGitRepository(msg);
	}
})
.start();

function sendGitRepository(msg) {
	sendResponse(assembly.homepage, msg);
}

function sendHello(msg) {
	sendResponse("Hello @" + msg.from.username, msg);
}

function sendAssembly(msg) {
	sendResponse(JSON.stringify(assembly), msg);
}

function sendResponse(text, msg) {
	bot.sendMessage({chat_id: msg.chat.id, text: text});
}

console.log('Assembly: ' + assembly.version);