const player = document.querySelector(".player");

const video = player.querySelector(".viewer");
const progress = player.querySelector(".proress");
const progressBar = player.querySelector(".progress__filled");
const togglePlay = player.querySelector(".toggle");
const ranges = player.querySelectorAll(".player__slider");
const skipButtons = player.querySelectorAll("[data-skip]");

function playVideo() {
  const method = video.paused ? "play" : "pause";
  video[method]();
}

function updateIcon() {
  const icon = this.paused ? "►" : "❚ ❚";
  togglePlay.textContent = icon;
}

function skip() {
  const time = parseFloat(this.dataset.skip);
  video.currentTime += time;
}

function changeRanges() {
    console.log(this.min);
    video[this.name] = this.value;
}

video.addEventListener("click", playVideo);
video.addEventListener("play", updateIcon);
video.addEventListener("pause", updateIcon);

togglePlay.addEventListener("click", playVideo);

skipButtons.forEach((el) => {
  el.addEventListener("click", skip);
});

ranges.forEach((range) => {
  range.addEventListener("change", changeRanges);
});
