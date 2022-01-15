const sound = new Audio('Beep_400ms.ogg');
function beep() {
    sound.play();
}

function cursor() {
    document.getElementById('pageetbarre').style.cursor = 'none';
}
