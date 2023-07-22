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

      // chrome.tabs.query({ url: $(location).attr('href')}, function(tabs) {  
      //       chrome.tabs.remove(tabs[0].id);   
      //   }); 

      //this worked for google homepage and youtube
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {  
        chrome.tabs.remove(tabs[0].id);   
    }); 

    
  }
    inputSec--;
  }

  // initialize pause to be disabled
  pause.disabled = true;

  start.addEventListener("click", () => {
    let timeInput = document.getElementById("newTime").value;

    start.innerHTML = 'Resume'
    inputSec = timeInput * 60;
    start.disabled = true;
    pause.disabled = false;

    // if (document.getElementById("time").innerHTML !== "0:00") {
    //   // inputSec = document.getElementById("time").innerHTML * 60;
    //   console.log(inputSec)
    //   start.disabled = true;
    //   pause.disabled = false;

    //   myInterval = setInterval(timer, 1000);
    // }

    myInterval = setInterval(timer, 1000);
  });

  pause.addEventListener("click", () => {
    clearInterval(myInterval);
    //pause does not save remaining time
    //when pressing start again time resets to whatever was in the field
    pause.disabled = true;
    start.disabled = false;
    // inputSec = document.getElementById("time").innerHTML * 60
    // console.log(inputSec)
    // moved below code to start.addEventListener
    // start.innerHTML = 'Resume'
    // document.getElementById("start").setAttribute("id", "resume")
  });

  // resume.addEventListener("click", () => {

  //   inputSec = document.getElementById("time").innerHTML * 60;
  //   console.log(inputSec)
  //   resume.disabled = true;
  //   pause.disabled = false;

  //   myInterval = setInterval(timer, 1000);
  // })
});
