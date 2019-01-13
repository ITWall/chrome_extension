
// let userinput = document.getElementById('userinput');
// console.log(userinput.value);

// let userinput = document.getElementById('userinput');
// console.log('' + userinput.value);


// $(document).ready(function () {
// 	// console.log($('#userinput').val());
// 	$('#userinput').keyup(function () {
// 		chrome.tabs.query(params, gotTab)
// 		let val = $(this).val();
// 		function gotTab(tabs) {
// 			chrome.tabs.sendMessage(tabs[0].id, val);
// 		}
// 	})
// })
let bgPage = chrome.extension.getBackgroundPage();
let word = bgPage.word;
$(document).ready(function () {

	$('#inputLocation').keypress(function (e) {
		let text = $(this).val();
		if (e.which == 13 && text.length > 1) {
			console.log(text);
			let url = `http://api.openweathermap.org/data/2.5/weather?q=${text}
			&appid=f2bc892d4cb3e085f0ead29b2e7be650
			&units=metric`;
			$.getJSON(url, function (data) {
				document.getElementById('temp').innerHTML = data.main.temp;
			})
		}
	})
	// document.getElementById('word').innerHTML = word;

	// $('#audio').click(function () {
	// 	let path = chrome.extension.getURL('audio/start.mp3');
	// 	console.log(path);
	// 	var myAudio = new Audio();
	// 	myAudio.src = path;
	// 	myAudio.play();
	// })

	// var options = {
	// 	url: 'https://hinhanhdephd.com/wp-content/uploads/2016/03/hinh-anh-meo-con-de-thuong-nhat-1.jpg',
	// 	filename: 'cat/1.jpg'
	// }

	function callbackDownload(downloadId) {
		console.log('' + downloadId);
	}

	$('#download').click(function () {
		getTabPromise().then(tab => {
			let message = {
				'text': 'download',
				'title': tab.title.replace(/:+/g, '_').replace(/\?+/g, '_').replace(/\|+/g, '_')
			}
			chrome.tabs.sendMessage(tab.id, message);
		})
		// getTabPromise().then((tab) => {
		// 	let arrayString = options['url'].split('/');
		// 	options['filename'] = `${tab.title}/${arrayString[arrayString.length - 1]}`;
		// 	chrome.downloads.download(options, callbackDownload);
		// });
	})

})

function getTabPromise() {

	let params = {
		active: true,
		currentWindow: true
	}

	return new Promise((res, rej) => {
		chrome.tabs.query(params, function (tabs) {
			res(tabs[0]);
		});
	});

}

