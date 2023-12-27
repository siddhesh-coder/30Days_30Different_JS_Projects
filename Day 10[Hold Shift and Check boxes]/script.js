const check = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastcheck;

function handleEvent(e) {
  let inBetween = false;

  if (e.shiftKey && this.checked) {
    check.forEach((checke) => {
      console.log(checke);
      if (checke === this || checke === lastcheck) {
        inBetween = !inBetween;
        console.log("here we are");
      }

      if (inBetween) {
        checke.checked = true;
      }
    });
  }

  lastcheck = this;
}

check.forEach((input) => {
  input.addEventListener("click", handleEvent);
});
