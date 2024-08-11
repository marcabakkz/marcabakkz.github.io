document.addEventListener('DOMContentLoaded', function () {
    const scrollContainer = document.querySelector('.scroll-container');
    const dots = document.querySelectorAll('.dot');

    scrollContainer.addEventListener('scroll', function () {
        const scrollWidth = scrollContainer.scrollWidth - scrollContainer.clientWidth;
        const scrollPosition = scrollContainer.scrollLeft;
        const index = Math.round((scrollPosition / scrollWidth) * (dots.length - 1));

        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    });
    
    // Trigger scroll event to set initial active dot
    scrollContainer.dispatchEvent(new Event('scroll'));
});

document.getElementById('subscribe-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Construct WhatsApp URL
    const phoneNumber = '+6283178457214';
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=Name:%20${encodeURIComponent(name)}%0AEmail:%20${encodeURIComponent(email)}%0AMessage:%20${encodeURIComponent(message)}`;

    // Open WhatsApp URL in new tab
    window.open(whatsappUrl, '_blank');

    // Disable form inputs and button
    document.getElementById('name').disabled = true;
    document.getElementById('email').disabled = true;
    document.getElementById('message').disabled = true;
    const subscribeButton = document.getElementById('subscribe-button');
    subscribeButton.disabled = true;
    subscribeButton.innerText = 'Terima kasih telah klik';
});
