(function () {
  'use strict';

  var KEY = 'duque-cookie-consent';
  var banner = document.getElementById('cookieBanner');
  if (!banner) return;

  try {
    if (localStorage.getItem(KEY) === 'accepted') return;
  } catch (e) {}

  setTimeout(function () {
    banner.classList.add('is-visible');
  }, 300);

  var acceptBtn = document.getElementById('cookieAccept');
  if (acceptBtn) {
    acceptBtn.addEventListener('click', function () {
      try { localStorage.setItem(KEY, 'accepted'); } catch (e) {}
      banner.classList.remove('is-visible');
    });
  }
})();
