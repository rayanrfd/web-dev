const count = document.getElementById('min');
const max = 10
const textInput = document.getElementById('message'); // Update to #message (correct ID)

document.addEventListener('DOMContentLoaded', function() {
    textInput.addEventListener('input', function() {
        const textLength = textInput.value.length;
        count.textContent = textLength;
        if (textLength > max) {
            textInput.classList.add('max-attained');
        } else {
            textInput.classList.remove('max-attained');
        }
    })
});
