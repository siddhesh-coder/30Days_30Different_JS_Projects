const perPanel = document.querySelectorAll('.panel');

let currentlyOpen = null;

function changes() {

    if (currentlyOpen) { //removing
        currentlyOpen.classList.remove('open-slide','add-active');
      }
  
      this.classList.add('open-slide','add-active'); //adding

      currentlyOpen = this.classList.contains('open-slide','add-active') ? this : null; //checking
};

perPanel.forEach((el)=>{
    el.addEventListener('click',changes);
})
