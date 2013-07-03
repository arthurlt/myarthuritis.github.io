var refreshRate 	= 16.7; //ms
var chimes 			= 0;
var mute 			= false;
var socialpressed	= false;
var notifycolor 	= 0;
var s 				= document.getElementById("social");

var plays			= 0;
var skips			= 0;
var audioElement 	= document.createElement('audio');

var gplus			= "https://plus.google.com/111629734323967418199/about"
var email			= "mailto:me@arthurtucker.me"

//Time
var hour			= 0;
var minute			= 0;
var date			= 0;
var day 			= 0;
var month 			= 0;

//Three colors
var notifysays		= "Hello, world!";
var firstcolor		= undefined;
var secondcolor		= undefined;
var thirdcolor		= undefined;
var fourthcolor		= undefined;
var continueColorChange = true;

var currentDate		= 0;
var nextDate		= 0;
var firstCheckedDate= true;
var checkedDate 	= false;
function pageInit()
{
	getID('main').className = "full";
	setTimeout("getID('panel').style.top = '0';	pageLoop();",750);
	//muteAudio();
	socialTog();
	readVars();

	currentDate = date;
	nextDate = date + 1;
}

function readVars()
{
	hour = get.hour();
	minute = get.minute();
	date = get.date();
	day = get.day();
	month = get.month();
	year = get.year();
}

function pageLoop()
{
	readVars();
	clock();
	currentDate = date;
	holidayCheck();
	//debug(get.ranInt(0,1000));
	//count();
	setTimeout('pageLoop();',refreshRate);
}

function clock()
{
	getID('time').innerHTML=day+" "+month+"	"+date+" "+hour+":"+minute;
	if (hour == 00) 
	{
		if (minute == 00) 
		{
			if (chimes < 6) 
			{
				play('0');
			}
		}
		else 
		{
			chimes = 0
		}
	}
}

get = (function ()
{
	function hour()
	{
		var today = new Date();
		var h = today.getHours();
		if (h<10) 
		{
			h="0" + h;
		}
		return h;
	}

	function minute()
	{
		var today = new Date();
		var m = today.getMinutes();
		if (m<10) 
		{
			m="0" + m;
		}
		return m;
	}

	function date()
	{
		var today = new Date();
		var date = today.getDate();
		return date;
	}

	function day()
	{
		var today = new Date();
		var dayi = today.getDay();
		var day = new Array(7);
			day[0]="Sun";
			day[1]="Mon";
			day[2]="Tue";
			day[3]="Wed";
			day[4]="Thu";
			day[5]="Fri";
			day[6]="Sat";
		return (day[dayi]);
	}

	function month()
	{
		var today = new Date();
		var monthi = today.getMonth();
		var month = new Array(11)
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
		return (month[monthi]);
	}

	function year()
	{
		var today = new Date();
		return today.getFullYear();
	}

	function ranInt(min,max) 
	{
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	function numberEnd(number)
	{
		switch (number) 
		{
			case 1:
			case 21:
			case 31:
			case 41:
			case 51:
			case 61:
			case 71:
			case 81:
			case 91:
			case 101:
				return 'st';
			case 2:
			case 22:
			case 32:
			case 42:
			case 52:
			case 62:
			case 72:
			case 82:
			case 92:
			case 102:
				return 'nd';
			case 3:
			case 23:
			case 33:
			case 43:
			case 53:
			case 63:
			case 73:
			case 83:
			case 93:
			case 103:
				return 'rd';
			default:
				return 'th';
		}
	}

	return {
		"hour": hour,
		"minute": minute,
		"date": date,
		"day": day,
		"month": month,
		"year": year,
		"ranInt": ranInt,
		"numberEnd": numberEnd

	}

})();

function getID(ID)
{
	return document.getElementById(ID);
}

function count()
{
	debug("times run..");
}

function threeColors(says,color1,color2,color3,color4)
{
	showNotify(says);
	if (notifycolor == 0 || notifycolor == 1 || notifycolor == 2) 
	{ //color1 for 3 seconds
		getID('notify').style.background = color1; 
		notifycolor++;
	}
	else if (notifycolor == 3 || notifycolor == 4 || notifycolor == 5) 
	{ //color2 for 3 seconds
		getID('notify').style.background = color2; 
		notifycolor++;
	}
	else if (color3 && (notifycolor == 6 || notifycolor == 7 || notifycolor == 8)) 
	{ //color3 for 3 seconds
		getID('notify').style.background = color3;
		notifycolor++;
	}
	else if (color4 && (notifycolor == 9 || notifycolor == 10 || notifycolor == 11))
	{ //color4 for 3 seconds
		getID('notify').style.background = color4;
		notifycolor++;
	}
	else 
	{ //after cycling through colors switches back to color1
		notifycolor = 0;
	}

	notifysays = says;
	firstcolor = color1;
	secondcolor = color2;
	thirdcolor = color3;
	fourthcolor = color4;

	if (continueColorChange)
	{
		setTimeout("threeColors(notifysays,firstcolor,secondcolor,thirdcolor,fourthcolor)",1000);
	}
	else
	{
		firstcolor = undefined;
		secondcolor = undefined;
		thirdcolor = undefined;
		fourthcolor = undefined;
		hideNotify();
		continueColorChange = true;
	}
}

function holidayCheck() 
{
	//Having holiday code running only once a day (minutes)
	if (checkedDate)
	{
		if (currentDate == nextDate) 
		{
			continueColorChange = true;
			checkedDate = false;
		}
	}
	if (firstCheckedDate || currentDate == nextDate && !checkedDate)
	{	
		if (!firstCheckedDate)
		{
			checkedDate = true;
			currentDate = date;
			nextDate = date + 1;
			
			hideNotify();
		}
		firstCheckedDate = false;
		//debug("Current day: "+ currentDate +"  Next day: "+ nextDate);

		if (month == "Jan" && date == 1) 
		{ //New Years Day
			showNotify("Welcome to "+year+"!",  "rgba(0,0,128,.95)");
			if (hour == 00 && minute == 00) 
			{
				play('1');
			}
		}

		//if (month == "May" && date == 13 || window.location.hash=="#surprise") 
		//{ //Cassi's wonderful birthday 
		//	var age = (year-1997);
		//	if (month != "May" && date != 13)
		//	{
		//		threeColors("Happy "+ age + get.numberEnd(age) +" Non-Birthday Cassi.. :P (What are you doing on here?)", "rgba(80,200,120,.95)", "rgba(102,51,153,.95)", "rgba(16,35,114,.95)", "rgba(255,79,0,.95)");
		//	}
		//	else
		//	{
		//		threeColors("Happy "+ age + get.numberEnd(age) +" Birthday Cassi!", "rgba(80,200,120,.95)", "rgba(102,51,153,.95)", "rgba(16,35,114,.95)", "rgba(255,79,0,.95)");
		//	}
		//}

		if (month == "Oct" && date == 31) 
		{ //Halloween
			showNotify("Happy Halloween! Stay around a bit!", "rgba(255,140,0,.95)");
		}

		if (month == "Nov" && date == 11) 
		{ //Vetrans Day
			threeColors("Honoring all who served. Veterans Day", "rgba(204,0,0,.95)", "rgba(255,255,255,.95)", "rgba(0,0,128,.95)");
		}

		if (month == "Dec" || month == "Jan" || month == "Feb") 
		{ //Winter
			Animation.start();
		}
		else
		{
			Animation.stop();
		}

		if (month == "Dec" && date == 21) 
		{ //"The Last Day"
			showNotify("BAD WOLF","rgba(0,0,128,.95)");
		}

		if (month == "Dec" && date == 25) 
		{ //Christmas
			showNotify("Merry Christmas!");
		}

		if (month == "Dec" && date == 31) 
		{ //New Years Eve
			uHour = 23 - hour;
			uMin = 60 - minute;
			showNotify(uHour+" hours and "+uMin+" minutes until "+(year+1)+"!", "rgba(0,0,128,.95)");
		}
	}
}

function showNotify(says,color,size) {
	getID('main').style.marginTop = "58px";
	getID('notify').style.background = color;
	if (color == "white" || color == "rgba(255,255,255, 0.95)")
	{
		getID('notify').style.color = "black";
	}
	else
	{
		getID('notify').style.color = "white";
	}
	getID('notify').style.top = "0";
	getID("notify").innerHTML = says;
}

function hideNotify() {
	getID('main').style.marginTop = "38px";
	getID('notify').style.top = "-48px";
	continueColorChange = false;
}

function muteAudio()
{
	getID("speaker").onmousedown = function() 
	{
		if (!mute) 
		{
			getID("speaker").src="/img/panel/mute-red.svg";
			mute = true;
		}
		else 
		{
			getID("speaker").src = "/img/panel/high.svg";
			mute = false;
		}
	}
}

function play(songNum)
{
	var songChoose = new Array(1)
		songChoose[0]="clock";
		songChoose[1]="fireworks";
	var song = (songChoose[songNum]);
	audioElement.setAttribute('src', ('/content/audio/'+song+'.wav'));

	if (!mute)
	{
		audioElement.play();
		//audioElement.addEventListener('ended', (parseInt(song)++));
		//debug(song);
		plays++;
		debug(plays+" plays.");
	}
	else
	{
		skips++;
		debug(skips+" skips.")
	}
}

function socialTog() 
{
	getID("avatar").onmousedown = function() 
	{
		if (!socialpressed) 
		{
			s.style.display = "block";
			setTimeout('s.className = "full";',1);
			socialpressed = true;
		}
		else 
		{
			s.className = "hidden";
			setTimeout('s.style.display = "none";',150);
			socialpressed = false;
		}
	}
}

function debug(says) 
{
	console.log(says);
}

pageInit();