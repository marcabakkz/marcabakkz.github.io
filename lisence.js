const startScanning = async () => {
    const qrCodeScanner = new Html5Qrcode("qr-reader");

    try {
        // Start scanning with the front camera
        await qrCodeScanner.start(
            { facingMode: "environment" }, // Use back camera for better scanning
            {
                fps: 10,
                qrbox: { width: 250, height: 250 }
            },
            (decodedText, decodedResult) => {
                alert(`QR Code detected: ${decodedText}`);
                qrCodeScanner.stop();
            },
            (errorMessage) => {
                console.warn(`QR Code no longer in front of camera: ${errorMessage}`);
            }
        );
    } catch (error) {
        console.error("Error starting QR Code scanner:", error);
    }
};

document.getElementById('scan-button').addEventListener('click', startScanning);
