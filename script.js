let qrImg = document.getElementById("qrImg"); // Image element
let imgtext = document.getElementById("qrText"); // Input text element
const generate = document.querySelector("#Generate"); // Corrected button selector
const imgBox=document.querySelector(".imgBox");
// Function to generate QR code
function generateQR() {
  const text = imgtext.value.trim(); // Get and trim the input value
  if (text) {
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(text)}`;
  } else {
    alert("Please enter text or URL to generate a QR Code!");
  }
  imgBox.style.display="block";

}

// Event listener for the button
generate.addEventListener("click", generateQR);
