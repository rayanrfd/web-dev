const cookieBanner = document.getElementById('cookie-banner');
const acceptCookieButton = document.getElementById('accept-cookies')
const closeButton = document.getElementById('hide-cookie');


document.addEventListener('DOMContentLoaded', () => {
    cookieBanner.style.visibility = 'visible';
  })

acceptCookieButton.addEventListener('click', () => {
    cookieBanner.style.visibility = 'hidden';
});

closeButton.addEventListener('click', () => {
    cookieBanner.style.visibility = 'hidden';
});
