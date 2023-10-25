function playSound(e){
    const audio = this.document.querySelector(`audio[data-key="${e.key}"]`);
    const key = this.document.querySelector(`.key[data-key="${e.key}"]`);

    if(!audio){ //base case if audio is not present then it will not run all function
      return;
    }
  
    audio.currentTime = 0; // rewind to the start
  
    audio.play(); 
    key.classList.toggle('playing');
  }
//removing playing code

function removeTransition(e){
  if(e.propertyName !== "transform"){ //skip it if it's not a transform
    return;
  }

  this.classList.remove('playing'); //remove
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);

