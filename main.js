function setCountdown(endDate, selector) {
  let days, hours, minutes, seconds;

  endDate = new Date(endDate).getTime();

  if (isNaN(endDate)) {
		return;
  }

  setInterval(calculate, 23);

  function calculate() {
    function pad(n, thousands) {
      if (thousands && n < 10) {
	return "00" + n
      }
      if (n < 10 || (thousands && n < 100)) {
	return "0" + n
      }
      return n
    }
    let startDate = new Date().getTime();

    let millis = parseInt((endDate - startDate) % 1000);
    let timeRemaining = parseInt((endDate - startDate) / 1000);

    if (timeRemaining >= 0) {
      days = parseInt(timeRemaining / 86400);
      timeRemaining = (timeRemaining % 86400);

      hours = parseInt(timeRemaining / 3600);
      timeRemaining = (timeRemaining % 3600);

      minutes = parseInt(timeRemaining / 60);
      timeRemaining = (timeRemaining % 60);

      seconds = parseInt(timeRemaining);

      const timeString = `${pad(days)}:${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${pad(millis, true)}`
      document.getElementById(selector).innerHTML = timeString
    } else {
      return;
    }
  }
}

window.addEventListener('load', function () {
  setCountdown('05/24/2020 12:30:00 PM PDT', 'taskOneClock');
  setCountdown('05/24/2020 12:30:00 PM PDT', 'taskTwoClock');
  setCountdown('05/24/2020 12:30:00 PM PDT', 'taskThreeClock');
  setCountdown('05/24/2020 12:30:00 PM PDT', 'taskFourClock');
});
