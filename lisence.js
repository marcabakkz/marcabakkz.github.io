const startScanning = async () => {
    const html5QrCode = new Html5Qrcode("qr-reader");

    try {
        // Coba dengan kamera depan terlebih dahulu
        await html5QrCode.start(
            { facingMode: "user" }, // Menggunakan kamera depan
            {
                fps: 10,
                qrbox: { width: 250, height: 250 }
            },
            qrCodeMessage => {
                alert(`QR Code detected: ${qrCodeMessage}`);
                html5QrCode.stop();
            },
            errorMessage => {
                console.warn(`QR Code no longer in front of camera.`);
            }
        );
    } catch (err) {
        console.error("Error with front camera, trying back camera.", err);

        // Jika gagal, coba dengan kamera belakang
        try {
            await html5QrCode.start(
                { facingMode: "environment" }, // Menggunakan kamera belakang
                {
                    fps: 10,
                    qrbox: { width: 250, height: 250 }
                },
                qrCodeMessage => {
                    alert(`QR Code detected: ${qrCodeMessage}`);
                    html5QrCode.stop();
                },
                errorMessage => {
                    console.warn(`QR Code no longer in front of camera.`);
                }
            );
        } catch (err) {
            console.error("Error with back camera:", err);
        }
    }
};
