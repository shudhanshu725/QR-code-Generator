function generateQR() {
  const text = document.getElementById("text").value;
  const qrImage = document.getElementById("qr-image");

  if (text.trim() === "") {
    alert("Please enter text or a URL");
    return;
  }

  // Use a free QR code API
  qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(text)}&size=200x200`;
}
