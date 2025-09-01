(function() {
    emailjs.init("lUJOljcA2ffAfN5y2");
})();

document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();

    document.querySelector('button[type="submit"]').textContent = 'Sending...';

    emailjs.sendForm('service_g1116gh', 'template_bldspad', this)
        .then(function() {
            alert('Thank you for your feedback! Your message has been sent.');
            document.getElementById('feedbackForm').reset();
            document.querySelector('button[type="submit"]').textContent = 'Submit';
        }, function(error) {
            alert('Failed to send feedback. Please try again.');
            document.querySelector('button[type="submit"]').textContent = 'Submit';
        });
});