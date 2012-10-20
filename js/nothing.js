//function startEE(hour,minute) {
//	setTimeout('hourChime(hour,minute);',60000);
//	}
var chimes = 0
function hourChime(hour,minute) {
	if (hour==00)
	{
	if (minute==00)
		{
		if (chimes<6)
		{
		document.getElementById('chime').play();
		}
		}
		else
		{
		chimes = 0
		}
	}
	document.getElementById("jsdebug").innerHTML="chimed "+chimes+" times";
	}
