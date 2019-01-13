
// chrome.browserAction.onClicked.addListener(buttonClicked);

// function buttonClicked(tab) {
// 	console.log('aaaa');
// 	let msg = {
// 		"txt": "hello"
// 	}
// 	chrome.tabs.sendMessage(tab.id, msg);
// }

chrome.runtime.onMessage.addListener(gotMessage);
// var word = '';
function gotMessage(message, sender, senderResponse) {
	// console.log('' + message.data);
	// word = message.data;
	// console.log('' + message);
	for (option of message) {
		console.log('' + option['filename']);
		chrome.downloads.download(option);
	}
}