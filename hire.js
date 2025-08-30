(function() {
    emailjs.init("lUJOljcA2ffAfN5y2");
})();

document.getElementById('hireForm').addEventListener('submit', function(event) {
    event.preventDefault();

    document.querySelector('button[type="submit"]').textContent = 'Sending...';

    emailjs.sendForm('service_g1116gh', 'template_3bms2pq', this)
        .then(function() {
            alert('Thank you for your interest! You will receive my email shortly.');
            document.getElementById('hireForm').reset();
            document.querySelector('button[type="submit"]').textContent = 'Submit';
        }, function(error) {
            alert('Failed to send. Please try again.');
            document.querySelector('button[type="submit"]').textContent = 'Submit';
        });
});