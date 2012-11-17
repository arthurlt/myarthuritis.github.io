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
	holidayCheck(month,date,hour,minute);
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
	//halloWeen();
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
		document.getElementById("speaker").src="/img/panel/mute-red.svg";
		mutepressed=1;
	}
	else {
		document.getElementById('chime').muted = false;
		document.getElementById("speaker").src = "/img/panel/high.svg";
		mutepressed=0;
	}
}

function showNotify(says,color,size) {
	document.getElementById('main').style.marginTop = "58px";
	document.getElementById('notify').style.background = color;
	document.getElementById('notify').style.top = "0";
	document.getElementById("notify").innerHTML = says;
}
function hideNotify() {
	document.getElementById('main').style.marginTop = "38px";
	document.getElementById('notify').style.top = "-48px";
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

function ranInt(min,max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function holidayCheck(month,date,hour,minute) {
	if (month=="Oct" && date==31) { //Halloween
		showNotify("Happy Halloween! Stay around a bit!","rgba(255,140,0,.95)");
		setTimeout("document.getElementById('zombyell').play();", ranInt(1000000,300000));
		setTimeout("document.getElementById('ghost').play();", ranInt(1000000,200000));
		setTimeout("document.getElementById('outofphase').play();", ranInt(10000000,600000));
		setTimeout("document.getElementById('churchbell').play();", ranInt(1000000,400000));
	}
	if (month=="Nov" && date==11) { //Vetrans Day
		if (notifycolor==0 || notifycolor==1 || notifycolor==2) { //red for 3 seconds
			showNotify("Honoring all who served. Veterans Day","rgba(204,0,0,.95)");
			notifycolor++;
		}
		else {
			if (notifycolor==3 || notifycolor==4 || notifycolor==5) { //white for 3 seconds changes text color to black
				document.getElementById('notify').style.background = "rgba(255,255,255,.95)"; 
				document.getElementById('notify').style.color = "black";
				notifycolor++;
			}
			else {
				if (notifycolor==6 || notifycolor==7 || notifycolor==8) { //blue for 3 seconds changes text back to white
					document.getElementById('notify').style.background = "rgba(0,0,128,.95)";
					document.getElementById('notify').style.color = "white";
					notifycolor++;
				}
				else { //after cycling through colors switches back to red
					notifycolor=0;
				}
			}
		}
	}
	if (month=="Nov" || month=="Dec" || month=="Jan") {
		Animation.start();
	}
	if (month=="Dec" && date==25) { //Christmas
		showNotify("Merry Christmas!");
		if (hour==00) {
			if (minute==00) {
				//play Santa's sleigh
			}
		}
	}
}