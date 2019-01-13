// let imgs = document.getElementsByTagName('img');

// var filenames = [
// 	'230px-Kitten_in_Rizal_Park,_Manila.jpg',
// 	'A-gray-kitten-meowing.jpg',
// 	'Cats-animals-grass-kittens--800x960.jpg',
// 	'kitten-looking-at-camera-521981437-57d840213df78c583374be3b.jpg',
// 	'petmd-kitten-facts.jpg'
// ]

// for (var i = 0; i < imgs.length; i++) {
// 	if (i > 0) {
// 		let r = Math.floor(Math.random() * filenames.length);
// 		let file = 'kittens/' + filenames[r];
// 		let url = chrome.extension.getURL(file);
// 		imgs[i].src = url; 
// 		console.log(imgs[i].src);
// 	}
// }

// for (img of imgs) {
// 	let r = Math.floor(Math.random() * filenames.length);
// 	let file = 'kittens/' + filenames[r];
// 	let url = chrome.extension.getURL(file);
// 	img.src = url; 
// 	console.log(img.src);
// }
// window.addEventListener('click', wordSelected);

// function wordSelected() {
// 	let text = window.getSelection().toString();
// 	if (text.length > 1) {
// 		chrome.runtime.sendMessage({'data': text});
// 		console.log('' + text);
// 	}
// }

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
	// console.log(message);
	let options = new Array();
	
	if (message['text'] === 'download') {
		count = 0;
		let images = document.getElementsByTagName('img');
		for (image of images) {
			let option = {
				url: '',
				filename: ''
			};
			option['url'] = image.src;
			let arrayString = image.src.split('/');
			if(count < 10) {
				option['filename'] = `${message['title']}/0${count++}.jpg`;
			} else {
				option['filename'] = `${message['title']}/${count++}.jpg`;
			}
			if (!option['url'].includes('ad.doubleclick.net')) {
			 	options.push(option);
				console.log('' + option['filename']);
			}
		}
		chrome.runtime.sendMessage(options);
	}
	// let paragraphs = document.getElementsByTagName('p');
	// for (pa of paragraphs) {
	// 	pa.innerHTML = message;
	// }
	// if (message.txt === 'hello') {
	// 	let paragraphs = document.getElementsByTagName("p");
	// 	for (ele of paragraphs) {
	// 		ele.style['background-color'] = '#FF00FF';
	// 	}
	// }
}