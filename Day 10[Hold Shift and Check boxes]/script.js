const player = document.querySelector(".player");

const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const togglePlay = player.querySelector(".toggle");
const ranges = player.querySelectorAll(".player__slider");
const skipButtons = player.querySelectorAll("[data-skip]");
const fullscreen = player.querySelector('.fullscreen');


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
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrub = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrub;
}

function fullscreenOn(){
  //document.fullscreenElement
  //video.requestFullscreen
  //document.exitFullscreen

   const isInFullscreen = document.fullscreenElement || document.webkitFullscreenElement;

   if(!isInFullscreen){
      if(video.requestFullscreen){
        video.requestFullscreen();
       
      }else if(video.webkitRequestFullscreen){ //for safari
        video.webkitRequestFullscreen();
        
      }
   }else{
    if(document.exitFullscreen){
       document.exitFullscreen();
       
    }else if(document.webkitRequestFullscreen){ //for safari
      document.webkitExitFullscreen();
    
    }
   }
}

video.addEventListener("click", playVideo);
video.addEventListener("play", updateIcon);
video.addEventListener("pause", updateIcon);
video.addEventListener("timeupdate", handleProgress);

togglePlay.addEventListener("click", playVideo);

skipButtons.forEach((el) => {
  el.addEventListener("click", skip);
});

ranges.forEach((range) => {
  range.addEventListener("change", changeRanges);
});
ranges.forEach((range) => {
  range.addEventListener("mousemove", changeRanges);
});

let mousedown = false;
progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (e) => mousedown && scrub(e));
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mouseup", () => (mousedown = false));

fullscreen.addEventListener('click',function(){
  if(video.requestFullscreen){
        fullscreenOn();
  }
});
