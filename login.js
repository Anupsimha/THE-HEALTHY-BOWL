document.getElementById('captcha-check').addEventListener('change', function() {
    const submitButton = document.querySelector('.submit-btn');
    if (this.checked) {
        submitButton.disabled = false;
        submitButton.classList.add('active');
    } else {
        submitButton.disabled = true;
        submitButton.classList.remove('active');
    }
});
