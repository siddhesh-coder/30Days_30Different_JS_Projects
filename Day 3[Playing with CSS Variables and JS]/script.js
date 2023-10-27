const inputs = document.querySelectorAll('input');

function makeChange(){
    const sizings = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + sizings);
}

inputs.forEach(item => item.addEventListener('input', makeChange));