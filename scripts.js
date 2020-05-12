// Write your JavaScript code here.
// Remember to pay attention to page loading!

// document.addEventListener("DOMContentLoaded", function (event) {
//   document.getElementById("takeoff").addEventListener("click", function (event) {
//     const response = confirm("Confirm that the shuttle is ready for takeoff.");

//     document.getElementById("flightStatus").innerText = "Shuttle in flight.";

//     document.getElementById("shuttleBackground").style.backgroundColor = "blue";

//     document.getElementById("spaceShuttleHeight").innerText += 10000;
//   });

//   document.getElementById("up").addEventListener("click", function (event) {
//     const selector = document.getElementById("rocket");

//     let current = selector.style.bottom;

//     selector.style.bottom = "" + (parseInt(current.substring(0, current.length - 2)) + 10) + "px";
//   });
// });

// put DOM code here to ensure all elements have been rendered first
window.addEventListener("load", function () {
  console.log("window loaded");

  let shuttleHeight = 0;
  let shuttlePic = document.getElementById("rocket");

  takeOff = function (event) {
    console.log("confirm?");
    let response = window.confirm("Confirm that the shuttle is ready for takeoff.");
    if (response) {
      console.log("CONFIRMED");
      document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
      document.getElementById("shuttleBackground").style.backgroundColor = "blue";
      shuttleHeight = 10000;
      shuttlePic.style.top = "240px";
      document.getElementById("spaceShuttleHeight").innerHTML = shuttleHeight;
    } else {
      console.log("CANCEL TAKEOFF");
    }
  };

  land = function (event) {
    console.log("LANDING");
    window.alert("The shuttle is landing. Landing gear engaged.");
    document.getElementById("flightStatus").innerHTML = "The shuttle has landed.";
    document.getElementById("shuttleBackground").style.backgroundColor = "green";
    shuttleHeight = 0;
    shuttlePic.style.top = "250px";
    document.getElementById("spaceShuttleHeight").innerHTML = shuttleHeight;
  };

  abort = function (event) {
    console.log("ABORT?");
    let response = window.confirm("Confirm that you want to abort the mission.");
    if (response) {
      console.log("ABORT! ABORT! ABORT!");
      document.getElementById("flightStatus").innerHTML = "Mission aborted.";
      document.getElementById("shuttleBackground").style.backgroundColor = "green";
      shuttleHeight = 0;
      shuttlePic.style.top = "250px";
      document.getElementById("spaceShuttleHeight").innerHTML = shuttleHeight;
    } else {
      console.log("ABORT CANCELLED");
    }
  };

  up = function (event) {
    console.log("increasing shuttle height by 10,000 miles");
    shuttleHeight += 10000;
    document.getElementById("spaceShuttleHeight").innerHTML = shuttleHeight;
    let spaces = parseInt(shuttlePic.style.top) - 10 + "px";
    shuttlePic.style.top = spaces;
  };

  down = function (event) {
    console.log("decreasing shuttle height by 10,000 miles");
    shuttleHeight -= 10000;
    document.getElementById("spaceShuttleHeight").innerHTML = shuttleHeight;
    let spaces = parseInt(shuttlePic.style.top) + 10 + "px";
    shuttlePic.style.top = spaces;
  };

  left = function (event) {
    console.log("move shuttle a little bit to the left");
    let spaces = parseInt(shuttlePic.style.left) - 10 + "px";
    shuttlePic.style.left = spaces;
  };

  right = function (event) {
    console.log("move shuttle a little bit to the right");
    let spaces = parseInt(shuttlePic.style.left) + 10 + "px";
    shuttlePic.style.left = spaces;
  };
  // need to use event listener and JavaScript to properly add/subtract values
  document.getElementById("up").addEventListener("click", up);
  document.getElementById("down").addEventListener("click", down);
  document.getElementById("left").addEventListener("click", left);
  document.getElementById("right").addEventListener("click", right);
});
