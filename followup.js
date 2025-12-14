const numberInput = document.getElementById('contactnumber');
const textArea = document.getElementById('CleanContactNumber');
const contactButton = document.getElementById('ContactButton');

numberInput.addEventListener('input', () => {
  const cleanedNumber = numberInput.value.replace(/\s+/g, '');
//   textArea.value = cleanedNumber;
  contactButton.href = `https://wa.me/52${cleanedNumber}`;
});
