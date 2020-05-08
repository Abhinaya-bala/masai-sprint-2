var milliSeconds = 0
var seconds = 0
var minutes = 0
var intervalId = null

function Start() {
    if (intervalId == null) {
        intervalId = setInterval(function () {
            var displayMilliSecond = document.querySelector("#milliSeconds")
            var displaySecond = document.querySelector("#seconds")
            var displayMinute = document.querySelector("#minutes")

            milliSeconds++
            displayMilliSecond.innerHTML = milliSeconds
            if (milliSeconds > 100) {
                seconds++
                milliSeconds = 0;
                displaySecond.innerHTML = seconds
            }

            if (seconds > 60) {
                minutes++
                seconds = 0;
                milliSeconds = 0;
                displayMinute.innerHTML = minutes
            }

        }, 10)



    }
}

function Stop() {

    clearInterval(intervalId)
    intervalId = null
}

function Reset() {
    clearInterval(intervalId)
    intervalId = null
    var displayMilliSecond = document.querySelector("#milliSeconds")
    var displaySecond = document.querySelector("#seconds")
    var displayMinute = document.querySelector("#minutes")

    milliSeconds = 0
    seconds = 0
    minutes = 0

    displayMilliSecond.innerHTML = milliSeconds
    displaySecond.innerHTML = seconds
    displayMinute.innerHTML = minutes

}


