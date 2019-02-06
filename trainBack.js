var trainSpeed = 250;
var trainPosition = 0;
var animation;

var train = document.getElementById("train");
var clear = document.getElementById("clearx")
train.addEventListener("click", speedUp);
clear.addEventListener("click", resetTrain);

var stopButton = document.getElementById("stopButton");
stopButton.addEventListener("click", stopTrain);

function speedUp() {
    if (trainSpeed > 10) {
        trainSpeed -= 10;
    }
    console.log("train speed: " + trainSpeed);

    clearInterval(animation);
    animation = setInterval(frame, trainSpeed);


    function frame() {
        trainPosition += 2;
        train.style.left = trainPosition + 'px';
        console.log(trainPosition);
        checkPosition(trainPosition);
    }


}

function checkPosition(currentPosition) {
    if (currentPosition === 918) {
        alert("Crash!");
        console.log("Crash!");
        clearInterval(animation);
    }
    if (currentPosition > 918) {
        alert("OFF THE TRACK !")
    }
}

function stopTrain() {
    if (trainPosition < 918) {
        clearInterval(animation);
        console.log("Whew! That was close!");
    }
}

function resetTrain() {

    if (trainPosition > 0) {
        trainPosition = 0;
        trainSpeed = 250;
        setInterval(animation)


    }
    clearInterval(animation);

}