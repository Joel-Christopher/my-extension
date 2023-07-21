document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM is loaded");
  const start = document.getElementById("start");
  const pause = document.getElementById("pause");

  let inputSec;
  let myInterval;

  function timer() {
    let timeEl = document.getElementById("time");
    let min = Math.floor(inputSec / 60);
    let sec = inputSec - min * 60;

    if (sec < 10) {
      sec = "0" + sec;
    }

    let timeLeft = `${min}:${sec}`;

    timeEl.innerHTML = timeLeft;

    if (inputSec === 0) {
      alert("GO TOUCH SOME GRASS");
      clearInterval(myInterval);
      // closing of the current tab
      // window.close();

      //self.close();

      // chrome.tabs.getCurrent(function (tab) {
      //   chrome.tabs.remove(tab.id, function () {});
      // });
    }
    inputSec--;
  }

  // initialize pause to be disabled
  pause.disabled = true;

  start.addEventListener("click", () => {
    let timeInput = document.getElementById("newTime").value;

    inputSec = timeInput * 60;
    start.disabled = true;
    pause.disabled = false;

    myInterval = setInterval(timer, 1000);
  });

  pause.addEventListener("click", () => {
    clearInterval(myInterval);
    //pause does not save remaining time
    //when pressing start again time resets to whatever was in the field
    pause.disabled = true;
    start.disabled = false;
  });
});
