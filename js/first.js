function startTime() {
	var today = new Date();
	var hour = checkHour(today.getHours());
	var minute = checkMinute(today.getMinutes());
	var date = today.getDate();
	var dayi = today.getDay();
	var monthi = today.getMonth();
	var day = new Array(7);
		day[0]="Sun";
		day[1]="Mon";
		day[2]="Tue";
		day[3]="Wed";
		day[4]="Thu";
		day[5]="Fri";
		day[6]="Sat";
	var month = new Array(13)
		month[0]="Jan";
		month[1]="Feb";
		month[2]="Mar";
		month[3]="Apr";
		month[4]="May";
		month[5]="Jun";
		month[6]="Jul";
		month[7]="Aug";
		month[8]="Sep";
		month[9]="Oct";
		month[10]="Nov";
		month[11]="Dec";
	day = (day[dayi]);
	month = (month[monthi]);
	document.getElementById('time').innerHTML=day+" "+month+"	"+date+" "+hour+":"+minute;
	halloWeen(month,date);
	hourChime(hour,minute);
	setTimeout('startTime();',1000);
}

function checkMinute(m){
	if (m<10) {
		m="0" + m;
		}
	return m;
}

function checkHour(h) {
	if (h<10) {
		h="0" + h;
		}
	return h;
}

function onLoad() {
	ran = Math.floor((Math.random()*100)+1);
	chimes = 0;
	mutepressed = 0;
	socialpressed = 0;
	s = document.getElementById("social");
	zombyell = 0;
	ghost = 0;
	//halloWeen();
	deBug(ran)
}

function keyPress(e) {}

function hourChime(hour,minute) {
	if (hour==00) {
	if (minute==00) {
		if (chimes<6) {
			document.getElementById('chime').play();
			}
		}
		else {
			chimes = 0
		}
	}
	//deBug('chimed '+chimes+' times');
}

function muteAudio() { //toggles mute
	if (mutepressed==0) {
		document.getElementById('chime').muted = true;
		document.getElementById("speaker").src="img/panel/mute-red.svg";
		mutepressed=1;
	}
	else {
		document.getElementById('chime').muted = false;
		document.getElementById("speaker").src = "img/panel/high.svg";
		mutepressed=0;
	}
}

function showWarning(says) {
	document.getElementById('main').style.marginTop = "58px";
	document.getElementById('warning').style.display = "block";
	document.getElementById("warning").innerHTML=says;
}
function hideWarning() {
	document.getElementById('main').style.marginTop = "38px";
	document.getElementById('warning').style.display = "none";
}

function socialTog() {
	if (socialpressed==0) {
		s.style.display = "block";
		setTimeout('s.className = "full";',1);
		socialpressed=1;
	}
	else {
		s.className = "hidden";
		setTimeout('s.style.display = "none";',150);
		socialpressed=0;
	}
}

function deBug(says) {
	if (dev==1) {
		document.getElementById('jsdebug').style.display='block'
	}
	document.getElementById("jsdebug").innerHTML=says;
}

function halloWeen(month,date) {
	if (month=="Oct") {
		if (date==31) {
			document.getElementById('warning').style.background = "rgba(255,140,0,.95)";
			showWarning("Happy Halloween!")
		}
	}
	//document.getElementById('zombyell').play();
	//document.getElementById('ghost').play();
	//deBug(zombyell+' '+ghost);
}