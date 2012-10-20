function startTime() {
  var today = new Date();
  var hour = today.getHours();
  var minute = today.getMinutes();
  var date = today.getDate();
  var day = today.getDay();
  var thismonth = today.getMonth();
  var weekday = new Array(7);
    weekday[0]="Sun";
    weekday[1]="Mon";
    weekday[2]="Tue";
    weekday[3]="Wed";
    weekday[4]="Thu";
    weekday[5]="Fri";
    weekday[6]="Sat";
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
    month[12]="test";
  minute = checkMinute(minute);
  hour = checkHour(hour);
  document.getElementById('time').innerHTML=(weekday[day])+" "+(month[thismonth])+"  "+date+" "+hour+":"+minute;
  hourChime(hour,minute);
  setTimeout('startTime();',1000);
  }

function checkMinute(m){
  if (m<10)
    {
    m="0" + m;
    }
  return m;
  }

function checkHour(h) {
  if (h<10)
    {
    h="0" + h;
    }
  return h;
  }
