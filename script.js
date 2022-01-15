const sound = new Audio('Beepalert.wav');
function beep() {
    sound.play();
}

function cursor() {
    document.getElementById('pageetbarre').style.cursor = 'none';
}
