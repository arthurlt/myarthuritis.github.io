var refreshRate 	= 16.7; //ms
var chimes 			= 0;
var mute 			= false;
var socialpressed	= false;
var notifycolor 	= 0;
var s 				= document.getElementById("social");
var zombyell 		= 0;
var ghost 			= 0;

var plays			= 0;
var skips			= 0;

//Time
var hour 			= 0;
var minute  		= 0;
var date 			= 0;
var day 			= 0;
var month 			= 0;

//Three colors
var firstcolor		= "green";
var secondcolor		= "purple";
var thirdcolor		= "orange";
var notifysays		= "Hello, world!";
var continueColorChange = true;

var currentDate		= 0;
var nextDate		= 0;
var firstCheckedDate= true;
var checkedDate		= false;
function pageInit()
{
	getID('main').className = "full";
	setTimeout("getID('panel').style.top = '0';	pageLoop();",750);
	muteAudio();
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
				play('chime');
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

function threeColors(color1,color2,color3,says)
{
	showNotify(says);
	if (notifycolor == 0 || notifycolor == 1 || notifycolor == 2) 
	{ //red for 3 seconds
		getID('notify').style.background = color1; 
		notifycolor++;
	}
	else if (notifycolor == 3 || notifycolor == 4 || notifycolor == 5) 
		{ //white for 3 seconds changes text color to black
			getID('notify').style.background = color2; 
			notifycolor++;
		}
		else if (notifycolor == 6 || notifycolor == 7 || notifycolor == 8) 
			{ //blue for 3 seconds changes text back to white
				getID('notify').style.background = color3;
				notifycolor++;
			}
			else 
			{ //after cycling through colors switches back to red
				notifycolor = 0;
			}
	firstcolor = color1;
	secondcolor = color2;
	thirdcolor = color3;
	notifysays = says;
	if (continueColorChange)
	{
		setTimeout("threeColors(firstcolor,secondcolor,thirdcolor,notifysays)",1000)
	}
	else
	{
		hideNotify();
	}
}

function holidayCheck() 
{
	//Having holiday code running only once a day (minutes)
	if (checkedDate)
	{
		if (currentDate == nextDate) 
		{
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
			continueColorChange = false;
		}
		firstCheckedDate = false;
		debug("Current day: "+ currentDate +"  Next day: "+ nextDate);

		if (month == "Jan" && date == 1) 
		{ //New Years Day
			showNotify("Welcome to 2013!",  "rgba(0,0,128,.95)");
			if (hour == 00 && minute == 00) 
			{
				play('fireworks');
			}
		}

		if (month == "Feb" && date == 24) 
		{ //Cassi's wonderful birthday 
			var age = (year-1997);
			threeColors("green", "purple", "orange", "Happy "+ age + get.numberEnd(age) +" Birthday Cassi!");
		}

		if (month == "Oct" && date == 31) 
		{ //Halloween
			showNotify("Happy Halloween! Stay around a bit!","rgba(255,140,0,.95)");
		}

		if (month == "Nov" && date == 11) 
		{ //Vetrans Day
			threeColors("rgba(204,0,0,.95)","rgba(255,255,255,.95)","rgba(0,0,128,.95)","Honoring all who served. Veterans Day");
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
			if (hour == 00) 
			{
				if (minute == 00) 
				{
					//play Santa's sleigh
				}
			}
		}

		if (month == "Dec" && date == 31) 
		{ //New Years Eve
			uHour = 23 - hour;
			uMin = 60 - minute;
			showNotify(uHour+" hours and "+uMin+" minutes until 2013!", "rgba(0,0,128,.95)");
		}

	}
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

function play(ID)
{
	if (!mute)
	{
		getID(ID).play();
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
}

pageInit();