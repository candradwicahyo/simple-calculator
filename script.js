window.onload = () => {
  
  function kalkulator() {
    const regex = /[a-zA-Z]/g;
    
    const error = document.querySelector('span');
    const input = document.querySelector('.input');
    const button = document.querySelector('.button');
    button.addEventListener("click", () => {
      error.textContent = (!input.value || !input.value.match(regex)) ? null : 'hanya boleh berisikan angka saja!';
      if (input.value) input.value = eval(input.value);
    });
  }
  
  kalkulator();
  
}