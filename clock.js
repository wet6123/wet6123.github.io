const clock = document.querySelector("#clock");

function getClock() {
  const time = new Date();
  const Month = "";

  switch (time.getMonth()) {
    case 0:
      nowMonth = "Jan";
      break;
    case 1:
      nowMonth = "Feb";
      break;
    case 2:
      nowMonth = "Mar";
      break;
    case 3:
      nowMonth = "Apr";
      break;
    case 4:
      nowMonth = "Mat";
      break;
    case 5:
      nowMonth = "Jun";
      break;
    case 6:
      nowMonth = "Jul";
      break;
    case 7:
      nowMonth = "Aug";
      break;
    case 8:
      nowMonth = "Sep";
      break;
    case 9:
      nowMonth = "Oct";
      break;
    case 10:
      nowMonth = "Nov";
      break;
    case 11:
      nowMonth = "Dec";
      break;
  }

  let nowDay = time.getDate();
  if (nowDay === 1) {
    nowDay = nowDay + "st";
  } else if (nowDay === 2) {
    nowDay = nowDay + "nd";
  } else if (nowDay === 3) {
    nowDay = nowDay + "rd";
  } else {
    nowDay = nowDay + "th";
  }

  const nowHour = String(time.getHours()).padStart(2, "0");
  const nowMinutes = String(time.getMinutes()).padStart(2, "0");
  const nowSeconds = String(time.getSeconds()).padStart(2, "0");

  clock.innerText = `${nowMonth}. ${nowDay} \n ${nowHour} : ${nowMinutes} : ${nowSeconds}`;
}

getClock();
setInterval(getClock, 1000);
