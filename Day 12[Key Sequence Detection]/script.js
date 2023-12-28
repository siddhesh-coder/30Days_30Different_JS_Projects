
const pressed = [];
const value = "siddhesh";
window.addEventListener('keyup',(e)=>{
    pressed.push(e.key);
  pressed.splice(-value.length - 1,pressed.length - value.length);

  if(pressed.join('').includes(value)){
    console.log("oooooooohhhh! got");
    cornify_add();
  }
  console.log(pressed);
});