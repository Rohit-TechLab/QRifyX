document.getElementById('generateBtn').addEventListener('click', function() {
    const url = document.getElementById('urlInput').value;
    const qrcodeContainer = document.getElementById('qrcode');
    qrcodeContainer.innerHTML = ''; // Clear previous QR code

    if (url) {
        const qrcode = new QRCode(qrcodeContainer, {
            text: url,
            width: 300,
            height: 300,
            correctLevel: QRCode.CorrectLevel.H
        });

        // Show the QR code container
        qrcodeContainer.style.display = 'flex'; // Show the QR code container
        // Show the download button
        document.getElementById('downloadBtn').style.display = 'block';
    } else {
        alert('Please enter a URL or text to generate a QR code.');
    }
});

document.getElementById('downloadBtn').addEventListener('click', function() {
    const qrcodeContainer = document.getElementById('qrcode');

    if (qrcodeContainer.firstChild) {
        const qrCodeImage = qrcodeContainer.firstChild.toDataURL("image/png"); // Get QR code image as data URL

        // Create a link element
        const link = document.createElement('a');
        link.href = qrCodeImage; // Use the QR code image data URL
        link.download = 'qrcode.png'; // Set the download filename
        link.click(); // Programmatically click the link to trigger the download
    } else {
        alert('No QR code generated to download.');
    }
});
