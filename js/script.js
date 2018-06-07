function stop() {
  var sound = document.getElementById("audio");
  sound.pause();
  sound.currentTime = 0;
}

function playSound(file) {
  stop();
  var sound = document.getElementById("audio");
  sound.src = file;
  sound.play();
}
