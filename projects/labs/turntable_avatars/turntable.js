var main = document.getElementById("main");
var number = 1;
var loading = 1;
var con = 1;
start();

function start() {
	title();
	changeImage();
}

function title() {
	if (loading == 1) {
		setTimeout('document.title = "Loading.";', 000);
		setTimeout('document.title = "Loading..";', 500);
		setTimeout('document.title = "Loading...";', 1000);
		setTimeout('document.title = "Loading....";', 1500);
		setTimeout('document.title = "Loading.....";', 2000);
		setTimeout('document.title = "Loading......";', 2500);
		setTimeout('document.title = "Loading.......";', 3000);
		setTimeout('document.title = "Loading........";', 3500);
		setTimeout('title();', 4000);
	}
	else {
		document.title = "Done Loading";
		setTimeout('document.title = "Here are all of the turntable.fm avatars.";', 1000);
	}
}

function changeImage() {
	if (loading == 1) {
		imgSource = "http://s3.amazonaws.com/static.turntable.fm/roommanager_assets/avatars/"+ number +"/fullfront.png";
		number = number + 1;
		addAvatar();
	}
}

function addAvatar() {
	var img = document.createElement("img");
	img.src = imgSource;
	setTimeout('changeImage();', 100);
	img.onload = function() {
		main.appendChild(img);
	}
  	img.onerror = function() {
  		loading = 0;
  		//showNotify('Image '+number+' is not loading..')
  	};
}