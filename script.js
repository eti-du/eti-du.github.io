const sound = new Audio('https://upload.wikimedia.org/wikipedia/commons/9/98/Beepalert.wav');
function beep() {
    sound.play();
}

function cursor() {
    document.getElementById('pageetbarre').style.cursor = 'none';
}
