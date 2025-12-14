const numberInput = document.getElementById('contactnumber');
const contactButton = document.getElementById('ContactButton');

numberInput.addEventListener('input', () => {
  const cleanedNumber = numberInput.value.replace(/\s+/g, '');
  contactButton.href = `https://wa.me/52${cleanedNumber}`;
});

contactButton.addEventListener('click', () => {
  setTimeout(() => {
    numberInput.value = '';
  }, 100);
});