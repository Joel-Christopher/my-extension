console.log("this is a popup");


// create variables to get id of buttons
const start = document.querySelector("#start");
const pause = document.querySelector("#pause");

// initialize pause to be disabled
pause.disabled = true;

start.addEventListener("click", () => {
  start.disabled = true;
  pause.disabled = false;
})

pause.addEventListener("click", () => {
  pause.disabled = true;
  start.disabled = false;
})