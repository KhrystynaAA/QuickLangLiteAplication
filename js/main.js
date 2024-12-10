let audio = new Audio('assets/rap-presentation.mp3');
let isPlaying = false;

function playAudio() {
  if (isPlaying) {
    audio.pause();
    isPlaying = false;
  } else {
    audio.play();
    isPlaying = true;
  }
}
