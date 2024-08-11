document.querySelectorAll('.flashsale-buttons .buy-button, .product-item .buy-button').forEach(button => {
    button.addEventListener('click', function() {
        // Mendapatkan nama produk dari elemen yang sesuai
        const productName = this.closest('.flashsale-item, .product-item').querySelector('h3').textContent;
        
        // Membuat pesan yang akan dikirimkan
        const message = `Hai, min. saya ingin memesan produk brand *marcabakkz* yang bernama ${productName}`;
        
        // URL WhatsApp dengan pesan yang telah diformat
        const whatsappURL = `https://wa.me/6283178457214?text=${encodeURIComponent(message)}`;
        
        // Mengarahkan pengguna ke URL WhatsApp
        window.location.href = whatsappURL;
    });
});