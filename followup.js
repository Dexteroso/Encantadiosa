const numberInput = document.getElementById('contactnumber');
const contactButton = document.getElementById('ContactButton');
const messageContent = document.getElementById('message');

numberInput.addEventListener('input', updateWhatsAppLink);
messageContent.addEventListener('input', updateWhatsAppLink);

function updateWhatsAppLink() {
  const cleanedNumber = numberInput.value.replace(/\D/g, '');
  const encodedMessage = encodeURIComponent(messageContent.value);

  contactButton.href =
    `https://api.whatsapp.com/send/?phone=52${cleanedNumber}&text=${encodedMessage}&app_absent=0`;
}