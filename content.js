console.log('Chrome extension ready to go');

let imgs = document.getElementsByTagName('img');

var filenames = [
	'230px-Kitten_in_Rizal_Park,_Manila.jpg',
	'A-gray-kitten-meowing.jpg',
	'Cats-animals-grass-kittens--800x960.jpg',
	'kitten-looking-at-camera-521981437-57d840213df78c583374be3b.jpg',
	'petmd-kitten-facts.jpg'
]

for (var i = 0; i < imgs.length; i++) {
	if (i > 0) {
		let r = Math.floor(Math.random() * filenames.length);
		let file = 'kittens/' + filenames[r];
		let url = chrome.extension.getURL(file);
		imgs[i].src = url; 
		console.log(imgs[i].src);
	}
}

// for (img of imgs) {
// 	let r = Math.floor(Math.random() * filenames.length);
// 	let file = 'kittens/' + filenames[r];
// 	let url = chrome.extension.getURL(file);
// 	img.src = url; 
// 	console.log(img.src);
// }


chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
	console.log(message.txt);
	if (message.txt === 'hello') {
		let paragraphs = document.getElementsByTagName("p");
		for (ele of paragraphs) {
			ele.style['background-color'] = '#FF00FF';
		}
	}
}