const sound = new Audio('https://upload.wikimedia.org/wikipedia/commons/9/98/Beepalert.wav');
function beep() {
    sound.play();
}

function cursor() {
    document.getElementById('pageetbarre').style.cursor = 'none';
}

function quiz() {
    document.getElementById("submitbutton").style.display = 'none';
    var points = 0;
    var a = document.querySelector('input[name="ques1"]:checked').value;
    var b = document.querySelector('input[name="ques2"]:checked').value;
    var c = document.querySelector('input[name="ques3"]:checked').value;
    var d = document.querySelector('input[name="ques4"]:checked').value;
    if (a === 'prop2') {points++;}
    if (b === 'prop1') {points++;}
    if (c === 'prop2') {points++;}
    if (d === 'prop3') {points++;}
    document.getElementById("points").innerHTML = points + "/4";
}
