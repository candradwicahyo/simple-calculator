window.onload = () => {
  
  const input = document.querySelector('.input');
  const submitButton = document.querySelector('.btn-submit');
  submitButton.addEventListener('click', function() {
    // value dari input
    const value = input.value.trim();
    /*
      validasi lebih dahulu, jika berhasil melewati
      validasi, lalu jumlahkan
    */
    if (validate(value) == true) input.value = eval(value);
  });
  
  function validate(value) {
    // jika input kosong
    if (!value) return alert('input is empty!');
    // jika input mengandung huruf
    if (value.match(/[a-zA-Z]/gmi)) return alert('can only numbers!');
    // jika berhasil melewati semua validasi
    return true;
  }
  
}