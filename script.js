const msg = document.createElement("p");

function displayMessage() {
    document.body.appendChild(msg);
    msg.textContent = "You clicked the button!";
    console.log("This is the message generated after you click the button");
    setTimeout(function() {document.body.removeChild(msg); }, 5000);
}

const btn = document.getElementById("btn");

btn.addEventListener("click", displayMessage);


const stopwatch = document.getElementById("timer");

stopwatch.addEventListener("click", startStopwatch);

let i=0;

function startStopwatch() {
    setInterval(function() {i++}, 1000);
    console.log(i);
}

//I can't see i increasing by an increment of 1 in the console every 1 second so not sure what I've done wrong. Would love some help on this.